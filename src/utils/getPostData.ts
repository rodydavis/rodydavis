import readingTime from "reading-time";

type Post = {
  title: string;
  file: URL;
  content: { source: string };
};

export function getPostData(post: Post) {
  return {
    // slug: post.file.pathname.split("/").pop().split(".").shift(),
    readingTime: readingTime(post.content.source).text,
  };
}

export function postTime(content:string) {
  return readingTime(content).text;
}