import { css, customElement, html, LitElement } from "lit-element";
import { buildDonationScript } from "../utils/meta";

@customElement("home-page")
export class HomePage extends LitElement {
  constructor() {
    super();
  }

  static styles = css`
    section {
      color: black;
      padding: 0px;
      width: 100%;
    }

    section > * {
      max-width: 760px;
      margin: auto;
      padding: 10px;
    }

    .dark {
      background-color: black;
      color: white;
    }

    .hero-image {
      height: 450px;
      background-image: url("/images/banner.jpeg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
    }

    .hero-text {
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
    }
  `;

  render() {
    return html`
      <div class="hero-image">
        <div class="hero-text"></div>
      </div>
      <section class="dark">
        <p>
          "Your work is going to fill a large part of your life, and the only
          way to be truly satisfied is to do what you believe is great work. And
          the only way to do great work is to love what you do. If you haven't
          found it yet, keep looking. Don't settle. As with all matters of the
          heart, you'll know when you find it."
        </p>
        <p>- Steve Jobs</p>
      </section>
    `;
  }
}
