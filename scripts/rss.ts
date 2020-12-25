#!/usr/bin/env node
import * as rss from 'feed';
import type { Item } from 'feed/lib/typings';
import * as fs from 'fs';
import {
  extractImageUrlFromMarkdown,
  getPostFromMeta,
  mdWithoutMeta,
} from '../src/utils/meta';
import escape from 'xml-escape';
import { md2Html } from './build';

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
  const rawMd = fs.readFileSync(path).toString();
  const meta = getPostFromMeta(rawMd, path, name);
  const now = new Date(Date.parse(Date.now().toLocaleString()));
  if (meta) {
    const post: Item = {
      id: name,
      link: `https://rodydavis.com/#/blog/${name}`,
      description: meta.timeToRead,
      content: md2Html(mdWithoutMeta(rawMd)),
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
    if (meta.title) {
      post.title = meta.title;
    }
    if (meta.date) {
      const _date = new Date(Date.parse(meta.date));
      post.date = _date;
    }
    post.image = extractImageUrlFromMarkdown(rawMd);
    if (post.image?.startsWith('/')) {
      post.image = escape(`https://rodydavis.com${post.image}`);
    }
    return post;
  }
}
