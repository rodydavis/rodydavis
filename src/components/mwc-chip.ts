import { css, customElement, html, LitElement, property } from 'lit-element';

@customElement('mwc-chip')
class Chip extends LitElement {
  constructor() {
    super();
  }

  @property() label = '';
  @property({ type: Boolean }) clickable = false;
  @property({ type: Boolean }) selected = false;

  static styles = css`
    @import url(https://fonts.googleapis.com/css?family=Roboto);
    .md-chip {
      display: inline-block;
      background: #e0e0e0;
      padding: 0 12px;
      border-radius: 32px;
      font-size: 13px;
      margin-bottom: 2px;
      margin-top: 2px;
    }
    .md-chip.md-chip-hover:hover {
      background: #ccc;
    }

    .md-chip-clickable {
      cursor: pointer;
    }

    .md-chip,
    .md-chip-icon {
      height: 32px;
      line-height: 32px;
    }

    .md-chip-icon {
      display: block;
      float: left;
      background: #009587;
      width: 32px;
      border-radius: 50%;
      text-align: center;
      color: white;
      margin: 0 8px 0 -12px;
    }

    .md-chip-remove {
      display: inline-block;
      background: #aaa;
      border: 0;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      padding: 0;
      margin: 0 -4px 0 4px;
      cursor: pointer;
      font: inherit;
      line-height: 20px;
    }
    .md-chip-remove:after {
      color: #e0e0e0;
      content: 'x';
    }
    .md-chip-remove:hover {
      background: #999;
    }
    .md-chip-remove:active {
      background: #777;
    }

    .md-chips {
      padding: 12px 0;
    }
    .md-chips .md-chip {
      margin: 0 5px 3px 0;
    }

    .md-chip-raised {
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
        0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
    }

    *,
    *:before,
    *:after {
      box-sizing: border-box;
    }

    body {
      background: #f0f0f0;
      position: absolute;
      width: 100%;
      padding: 0;
      margin: 0;
      font-family: 'Roboto', sans-serif;
      color: #333;
    }

    section {
      background: white;
      margin: 0 auto;
      padding: 4em;
      max-width: 800px;
    }
    section h1 {
      margin: 0 0 2em;
    }
    .md-chip-selected {
      background-color: red;
      color: white;
    }
  `;

  render() {
    let classes: string[] = ['md-chip'];

    if (this.clickable) {
      classes.push('md-chip-clickable');
    }
    if (this.selected) {
      classes.push('md-chip-selected');
    }
    return html` <div class="${classes.join(' ')}">${this.label}</div> `;
  }
}
