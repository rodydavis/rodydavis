export function md2ampstory(src: string, meta: AmpMeta): string {
  const story: AmpStory = {
    title: meta.title,
    pages: [],
  };
  // Create Story
  const sections = src.split("---");
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (section.trim().length < 1) continue;
    const layers: AmpLayer[] = [];
    let layer: AmpVerticalLayer;
    for (const line of section.split("\n")) {
      if (line.trim().length < 1) continue;
      if (line.match(".background")) {
        const element = elementMap(line);
        if (element.kind === "image") {
          const _layer: AmpLayer = { kind: "fill", element: element };
          if (layer != null) {
            layers.push(layer);
          }
          layers.push(_layer);
          layer == null;
          continue;
        }
      } else {
        if (layer == null) {
          layer = { kind: "vertical", elements: [] };
        }
        const element = elementMap(line);
        layer.elements.push(element);
      }
    }
    if (layer != null) {
      layers.push(layer);
      layer = null;
    }
    story.pages.push({ id: `page_${i}`, layers: layers });
  }
  return renderStory(story);
}

function renderStory(story: AmpStory): string {
  // Render Story
  let result: string[] = [];
  result.push(
    `<!DOCTYPE html>
      <html ⚡>
      <head>
        <meta charset="utf-8" />
        <title>${story.title}</title>
        <link rel="canonical" href="pets.html" />
        <meta
            name="viewport"
            content="width=device-width,minimum-scale=1,initial-scale=1"
        />
        <style amp-boilerplate>
            body {
            -webkit-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
            -moz-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
            -ms-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
            animation: -amp-start 8s steps(1, end) 0s 1 normal both;
            }
            @-webkit-keyframes -amp-start {
            from {
                visibility: hidden;
            }
            to {
                visibility: visible;
            }
            }
            @-moz-keyframes -amp-start {
            from {
                visibility: hidden;
            }
            to {
                visibility: visible;
            }
            }
            @-ms-keyframes -amp-start {
            from {
                visibility: hidden;
            }
            to {
                visibility: visible;
            }
            }
            @-o-keyframes -amp-start {
            from {
                visibility: hidden;
            }
            to {
                visibility: visible;
            }
            }
            @keyframes -amp-start {
            from {
                visibility: hidden;
            }
            to {
                visibility: visible;
            }
            }
        </style>
        <noscript
            ><style amp-boilerplate>
            body {
                -webkit-animation: none;
                -moz-animation: none;
                -ms-animation: none;
                animation: none;
            }
            </style></noscript
        >
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <script
            async
            custom-element="amp-video"
            src="https://cdn.ampproject.org/v0/amp-video-0.1.js"
        ></script>
        <script
            async
            custom-element="amp-story"
            src="https://cdn.ampproject.org/v0/amp-story-1.0.js"
        ></script>
        <link
            href="https://fonts.googleapis.com/css?family=Oswald:200,300,400"
            rel="stylesheet"
        />
        <style amp-custom>
            amp-story {
            font-family: "Oswald", sans-serif;
            color: #fff;
            }
            amp-story-page {
            background-color: #000;
            }
            h1 {
            font-weight: bold;
            font-size: 2.875em;
            font-weight: normal;
            line-height: 1.174;
            }
            p {
            font-weight: normal;
            font-size: 1.3em;
            line-height: 1.5em;
            color: #fff;
            }
            q {
            font-weight: 300;
            font-size: 1.1em;
            }
            amp-story-grid-layer.bottom {
            align-content: end;
            }
            amp-story-grid-layer.noedge {
            padding: 0px;
            }
            amp-story-grid-layer.center-text {
            align-content: center;
            }
            .wrapper {
            display: grid;
            grid-template-columns: 50% 50%;
            grid-template-rows: 50% 50%;
            }
            .banner-text {
            text-align: center;
            background-color: #000;
            line-height: 2em;
            }
        </style>
        <style>
        * {
            text-shadow: 1px 1px black;
        }
        </style>
        </head>
        <body>
          <!-- Cover page -->
          <amp-story
            standalone
            title="${story.title}"
            publisher="Rody Davis"
            publisher-logo-src="images/banner.jpeg"
            poster-portrait-src="images/banner.jpg"
          >
     
    `
  );
  for (const page of story.pages) {
    result.push(`<amp-story-page id=${page.id}>`);
    for (let i = 0; i < page.layers.length; i++) {
      const layer = page.layers[i];
      result.push(`<amp-story-grid-layer template="${layer.kind}">`);
      if (layer.kind == "vertical" || layer.kind == "horizontal") {
        for (const element of layer.elements) {
          addElement(element, result);
        }
      } else if (layer.kind == "fill") {
        addElement(layer.element, result);
      }
      result.push(`</amp-story-grid-layer>`);
    }
    result.push(`</amp-story-page>`);
  }
  result.push(
    `</amp-story>
    </body>
  </html>
`
  );
  return result.join("");
}

function addElement(element: AmpElement, result: string[]) {
  if (element.kind == "text") {
    result.push(`<${element.tag}>${element.data}</${element.tag}>`);
  }
  if (element.kind == "image") {
    result.push(`<amp-img
          src="${element.src}"
          width="${element.width}"
          height="${element.height}"
          layout="responsive">
          </amp-img>`);
  }
}

function elementMap(line: string): AmpElement {
  line = line.trimLeft();

  // Heading
  if (line.startsWith("# ")) {
    return { kind: "text", data: line.replace("# ", ""), tag: "h1" };
  }
  if (line.startsWith("## ")) {
    return { kind: "text", data: line.replace("## ", ""), tag: "h2" };
  }
  if (line.startsWith("### ")) {
    return { kind: "text", data: line.replace("### ", ""), tag: "h3" };
  }
  if (line.startsWith("#### ")) {
    return { kind: "text", data: line.replace("#### ", ""), tag: "h4" };
  }
  if (line.startsWith("##### ")) {
    return { kind: "text", data: line.replace("##### ", ""), tag: "h5" };
  }
  if (line.startsWith("###### ")) {
    return { kind: "text", data: line.replace("##### ", ""), tag: "h6" };
  }

  // Image
  if (line.startsWith("![")) {
    let start: number, end: number;
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char == "(") {
        start = i + 1;
      }
      if (char == ")") {
        end = i;
      }
    }
    if (start != undefined && end != undefined) {
      return {
        kind: "image",
        src: `${line.substring(start, end)}`,
        width: 720,
        height: 1280,
      };
    }
  }
  // Fallback to Regular Text
  return { kind: "text", data: line, tag: "p" };
}

export interface AmpMeta {
  title: string;
}

interface AmpStory {
  pages: AmpPage[];
  title: string;
}

interface AmpPage {
  id: string;
  layers: AmpLayer[];
}

type AmpLayer =
  | AmpVerticalLayer
  | AmpHorizontalLayer
  | AmpFillLayer
  | AmpThirdsLayer;

interface AmpVerticalLayer {
  kind: "vertical";
  elements: AmpElement[];
}

interface AmpHorizontalLayer {
  kind: "horizontal";
  elements: AmpElement[];
}

interface AmpFillLayer {
  kind: "fill";
  element: AmpImageElement;
}

interface AmpThirdsLayer {
  kind: "thirds";
  upper: AmpElement[];
  middle: AmpElement[];
  lower: AmpElement[];
}

type AmpElement = AmpTextElement | AmpImageElement;

interface AmpTextElement {
  kind: "text";
  tag: string;
  data: string;
}

interface AmpImageElement {
  kind: "image";
  src: string;
  width: number;
  height: number;
}
