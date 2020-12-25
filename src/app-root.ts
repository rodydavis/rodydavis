import {
  customElement,
  property,
  LitElement,
  html,
  css,
  TemplateResult,
} from 'lit-element';
import './components/nav-wrapper';

@customElement('app-root')
export class AppRoot extends LitElement {
  @property() message = 'Learn LitElement';

  static get styles() {
    return css`
      h1 {
        font-size: 4rem;
      }
      .wrapper {
        display: flex;
        color: white;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100%;
        background-color: #2196f3;
        background: linear-gradient(315deg, #b4d2ea 0%, #2196f3 100%);
        font-size: 24px;
      }
      .link {
        color: white;
      }
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
        background-image: url('/images/banner.jpeg');
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
      .social-link {
        text-decoration: none;
      }
      .social-icons {
        width: 100%;
        text-align: center;
        padding-top: 10px;
      }
    `;
  }

  render() {
    return html`
      <nav-wrapper>
        <section class="hero-image">
          <div class="hero-text"></div>
        </section>
        <section class="dark">
          <p>
            "Your work is going to fill a large part of your life, and the only
            way to be truly satisfied is to do what you believe is great work.
            And the only way to do great work is to love what you do. If you
            haven't found it yet, keep looking. Don't settle. As with all
            matters of the heart, you'll know when you find it."
          </p>
          <p>- Steve Jobs</p>
        </section>
        <section>${this.buildSocial()}</section>
      </nav-wrapper>
    `;
  }

  private buildSocial(): TemplateResult {
    return html` <div class="social-icons">
      ${this._socialIcon('github', 'https://github.com/rodydavis')}
      ${this._socialIcon('twitter', 'https://twitter.com/rodydavis')}
      ${this._socialIcon('youtube', 'https://youtube.com/rodydavis')}
      ${this._socialIcon('instagram', 'https://instagram.com/rodydavisjr')}
      ${this._socialIcon(
        'facebook',
        'https://facebook.com/rodydavisjr',
      )}${this._socialIcon('linkedin', 'https://www.linkedin.com/in/rodydavis')}
      ${this._socialIcon('tiktok', 'https://tiktok.com/@rodydavisjr')}
      ${this._socialIcon('email', 'mailto:rody.davis.jr@gmail.com')}
      ${this._socialIcon('rss', `/feed.xml`)}
    </div>`;
  }

  private _socialIcon(icon: string, link: string): TemplateResult {
    const size = 25;
    return html` <a class="social-link" href="${link}" target="_blank">
      <img
        width="${size}"
        height="${size}"
        slot="actionItems"
        src="/images/social/${icon}.svg"
        slot="onIcon"
      />
    </a>`;
  }
}
