import {
  css,
  customElement,
  html,
  internalProperty,
  LitElement,
  property,
  TemplateResult,
  unsafeCSS,
} from "lit-element";
import "@material/mwc-circular-progress";
import "zero-md";
import { buildCommentsScript, getPostFromMeta, PostMeta } from "../utils/meta";
import { md2ampstory } from "../utils/amp-story";

@customElement("md-view")
export class MDView extends LitElement {
  constructor(src: string) {
    super();
    this.src = src;
  }

  @property({ type: String }) src: string;
  @property({ type: Boolean }) comments = false;
  @internalProperty() _mdCache: string | undefined = undefined;
  @internalProperty() _meta: PostMeta | undefined;

  async firstUpdated() {
    await this.mdToHtml();
    this.requestUpdate();
  }

  _script: HTMLScriptElement;

  connectedCallback() {
    super.connectedCallback();
    if (this.comments) {
      // this._script = buildCommentsScript();
      // document.body.appendChild(this._script);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.comments) {
      // const _comments = document.body.querySelector(".utterances");
      // document.body.removeChild(_comments);
    }
  }

  static styles = css`
    zero-md,
    div {
      max-width: 720px;
      margin: auto;
      padding: 10px;
      color: black;
    }
    iframe {
      border: none;
      width: 100%;
      height: 94vh;
    }
  `;

  render() {
    if (!this._mdCache) {
      return html`<mwc-circular-progress
        indeterminate
      ></mwc-circular-progress> `;
    }
    if (this._meta.layout == "post") {
      return this.renderPost(this._mdCache);
    }
    if (this._meta.layout == "story") {
      return this.renderStory(this._mdCache);
    }
    return this.renderPost(this._mdCache);
  }

  private renderStory(raw: string): TemplateResult {
    const htmlSrc = md2ampstory(raw, { title: this._meta.title || "N/A" });
    return html` <iframe sandbox="allow-scripts" srcdoc=${htmlSrc}></iframe> `;
  }

  private renderPost(md: string): TemplateResult {
    const blob = new Blob([md], { type: "text/markdown" });
    const objectURL = window.URL.createObjectURL(blob);
    return html`
      <zero-md src=${objectURL || this.src}> </zero-md>
      <div id="comment-section"></div>
    `;
  }

  private async mdToHtml(): Promise<any> {
    const response: Response = await fetch(this.src);
    const raw = (await response.text()).trimStart();
    if (raw[0] == "-" && raw[1] == "-" && raw[2] == "-") {
      this._meta = getPostFromMeta(raw, this.src, "");
      this.setContent(this.mdWithoutMeta(raw));
    } else {
      this._meta = undefined;
      this.setContent(raw);
    }
  }

  private mdWithoutMeta(md: string): string {
    let raw = md;
    if (raw[0] == "-" && raw[1] == "-" && raw[2] == "-") {
      let endMetaIndex = 0;
      for (let i = 3; i < raw.length; i++) {
        if (raw[i] == "-" && raw[i + 1] == "-" && raw[i + 2] == "-") {
          endMetaIndex = i + 3;
          break;
        }
      }
      return raw.substring(endMetaIndex, raw.length);
    }
  }

  private setContent(md: string) {
    let raw = md;
    const port = window.location.port;
    const host = window.location.hostname;
    const protocol = window.location.protocol;
    const root = port ? `${host}:${port}` : host;
    raw = raw.split("](/images/").join(`](${protocol}//${root}/images/`);
    this._mdCache = raw;
  }
}
