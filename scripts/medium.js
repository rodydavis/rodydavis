const mediumToMarkdown = require('medium-to-markdown');
const fs = require('fs');

const prefix = 'https://rodydavis.medium.com'

const urls = [
    `${prefix}/how-to-host-your-podcast-for-free-on-github-pages-4d701a6704ac`
];

for (const url of urls) {
    // Enter url here
    mediumToMarkdown.convertFromUrl(url)
        .then(function (markdown) {
            // console.log(markdown);
            fs.writeFileSync(`posts/${url.replace(`${prefix}/`, '')}.md`, markdown)
        });
}