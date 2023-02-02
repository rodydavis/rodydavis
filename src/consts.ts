// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import { parse } from 'yaml';
import * as fs from 'fs';
import path from 'path';

interface SocialLink {
    link: string;
    icon: string;
}

interface MenuItem {
    name: string;
    link: string;
    icon?: string;
}

export function getConfig() {
    const yamlString = fs.readFileSync(path.join(process.cwd(), 'config.yaml'), 'utf8');
    const yaml = parse(yamlString);
    const socialLinks: SocialLink[] = [];
    for (const [key, value] of Object.entries(yaml.social)) {
        const val = value as { [key: string]: string };
        if (key === 'custom') {
            const { link, icon } = val;
            socialLinks.push({ link, icon });
        }
        if (key === 'github') {
            const username = val.username;
            const link = `https://github.com/${username}`;
            const icon = 'github';
            socialLinks.push({ link, icon });
        }
        if (key === 'twitter') {
            const username = val.username;
            const link = `https://twitter.com/${username}`;
            const icon = 'twitter';
            socialLinks.push({ link, icon });
        }
        if (key === 'tiktok') {
            const username = val.username;
            const link = `https://tiktok.com/@${username}`;
            const icon = 'tiktok';
            socialLinks.push({ link, icon });
        }
        if (key === 'instagram') {
            const username = val.username;
            const link = `https://instagram.com/${username}`;
            const icon = 'instagram';
            socialLinks.push({ link, icon });
        }
        if (key === 'linkedin') {
            const username = val.username;
            const link = `https://linkedin.com/in/${username}`;
            const icon = 'linkedin';
            socialLinks.push({ link, icon });
        }
        if (key === 'youtube') {
            const username = val.username;
            const link = `https://youtube.com/${username}`;
            const icon = 'youtube';
            socialLinks.push({ link, icon });
        }
        if (key === 'facebook') {
            const username = val.username;
            const link = `https://facebook.com/${username}`;
            const icon = 'facebook';
            socialLinks.push({ link, icon });
        }
    }
    const menuItems: MenuItem[] = [];
    for (const value of Object.values(yaml.menu)) {
        const { label, link, icon } = value as { [key: string]: string | undefined };
        menuItems.push({ name: label!, link: link!, icon });
    }
    return {
        site: {
            title: yaml.site.title,
            description: yaml.site.description,
            url: yaml.site.url,
            copyright_name: yaml.site.copyright_name,
        },
        social: socialLinks,
        menu: menuItems,
    };
}