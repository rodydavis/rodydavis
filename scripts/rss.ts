#!/usr/bin/env node
import * as rss from 'feed';
import type { Item } from 'feed/lib/typings';
import * as fs from 'fs';
import escape from 'xml-escape';

export async function writeRssFile(input: string) {
  const author = {
    name: 'Rody Davis',
    email: 'rody.davis.jr@gmail.com',
    link: 'https://rodydavis.com',
  };

  const feed = new rss.Feed({
    title: 'Rody Davis Blog Feed',
    description: 'This is my personal feed!',
    id: 'https://rodydavis.com',
    link: 'https://rodydavis.com/',
    language: 'en', // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
    image: 'https://rodydavis.com/assets/icons/icon_512.png',
    favicon: 'https://rodydavis.com/favicon.ico',
    copyright: 'All rights reserved 2020, Rody Davis',
    // eslint-disable-next-line object-shorthand
    author: author,
  });

  checkPath(input, feed, undefined);

  feed.addCategory('Technology');
  feed.addContributor(author);

  const rssOutput = feed.rss2();
  //   await fs.promises.writeFile("feed.xml", rssOutput);

  return rssOutput;
}

function checkPath(
  input: string,
  feed: rss.Feed,
  category: string | undefined,
) {
  const stat = fs.statSync(input);
  if (stat.isDirectory()) {
    const files = fs.readdirSync(input);
    for (const path of files) {
      checkPath(`${input}/${path}`, feed, path);
    }
    return;
  }
  const item = addPost(input, category);
  if (item) feed.addItem(item);
}

function addPost(path: string, category: string | undefined): Item | undefined {
  const name = path.replace('.md', '');
  const content = fs.readFileSync(path).toString();
  const sections = content.split('---');
  let meta = '';
  let _content = content;
  const now = new Date(Date.parse(Date.now().toLocaleString()));
  if (content.match('---')) {
    // eslint-disable-next-line prefer-destructuring
    meta = sections[1];
    // eslint-disable-next-line prefer-destructuring
    _content = sections[2];
  }
  if (meta !== '') {
    const post: Item = {
      id: name,
      link: `https://rodydavis.com/#/blog/${name}`,
      description: meta,
      content: _content,
      image: '',
      author: [{ name: 'Rody Davis' }],
      title: '',
      date: now,
    };
    if (category) {
      post.category = [
        {
          name: category,
        },
      ];
    }
    const lines = meta.split('\n');
    for (const line of lines) {
      if (line.match('title')) {
        post.title = line.split(': ')[1].trim();
      }
      if (line.match('date')) {
        const _date = new Date(Date.parse(line.split(': ')[1].trim()));
        post.date = _date;
      }
    }
    if (_content.indexOf('![') !== -1) {
      const index = _content.indexOf('![');
      const imgStart = _content.indexOf('](', index);
      const imgEnd = _content.indexOf(')', index);
      post.image = _content.substring(imgStart + 2, imgEnd);
    }
    post.image = escape(`https://rodydavis.com${post.image}`);
    return post;
  }
}
