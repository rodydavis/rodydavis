import { html, css } from "lit";
import { mix } from "/js/mixwith.js";
import { LitTemplateMixin, ShadowRootMixin } from "/js/mixins.js";
import { icons } from "/js/icons.js";
import { computed } from "@preact/signals-core";

const activitySections = [
    { name: "Posts", icon: "file", label: "Posts", href: "/posts" },
    { name: "Tags", icon: "tag", label: "Tags", href: "/tags" },
    { name: "Apps", icon: "rocket", label: "Apps", href: "/apps" },
    { name: "Social", icon: "bluesky", label: "Social", href: "/social" },
    //   { name: "Pages", icon: "book", label: "Pages" },
];

const fallbackIcons = {
    file: html`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M9 3v18"></path></svg>`,
    tag: html`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41L11 3.83a2 2 0 0 0-2.83 0L3.83 8.17a2 2 0 0 0 0 2.83l9.59 9.59a2 2 0 0 0 2.83 0l4.24-4.24a2 2 0 0 0 0-2.83z"></path><circle cx="7.5" cy="7.5" r="1.5"></circle></svg>`,
    rocket: html`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5L3 21l4.5-1.5L17 10a5 5 0 0 0-7-7L3 7.5 4.5 12l5.5 5.5z"></path><path d="M9 7l8 8"></path></svg>`,
    book: html`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M4 4.5A2.5 2.5 0 0 1 6.5 7H20"></path><path d="M20 22V2"></path></svg>`,
    bluesky: html`<svg class="icon" width="38" height="38" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.339 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z" /></svg>`
};

export class VSCodeSidebar extends mix(HTMLElement).with(LitTemplateMixin, ShadowRootMixin) {
    styles = computed(() => css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: var(--vscode-sideBar-background, #23232b);
      height: 100%;
      padding: 8px 0;
      border-right: 1px solid var(--vscode-sideBar-border, #222);
      width: 60px;
    }
    .activity-bar {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      gap: 8px;
      margin-top: 8px;
    }
    .activity-bar a {
      width: 100%;
      display: block;
      text-decoration: none;
      outline: none;
    }
    .activity-bar a:focus .activity-btn,
    .activity-bar a:focus-visible .activity-btn {
      box-shadow: 0 0 0 2px var(--vscode-focusBorder, #0078d4);
      z-index: 1;
    }
    .activity-bar a:active .activity-btn {
      filter: brightness(0.95);
    }
    .activity-bar a .activity-btn {
      width: 100%;
      height: 48px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      cursor: pointer;
      transition: background 0.2s;
      color: var(--vscode-icon-foreground, #d4d4d4);
      border: none;
      background: none;
      font: inherit;
      outline: none;
      gap: 2px;
    }
    .activity-btn {
      width: 48px;
      height: 48px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      cursor: pointer;
      transition: background 0.2s;
      color: var(--vscode-icon-foreground, #d4d4d4);
      border: none;
      background: none;
      font: inherit;
      outline: none;
      gap: 2px;
    }
    .activity-btn[active] {
      background: var(--vscode-sideBar-activeBackground, #37373d);
      color: var(--vscode-sideBar-activeForeground, #fff);
    }
    .icon {
      width: 24px;
      height: 24px;
      display: block;
    }
    .label {
      font-size: 0.7em;
      margin-top: 2px;
      text-align: center;
      color: inherit;
    }
  `);
    active = "Posts";
    setActive(name) {
        this.active = name;
        this.dispatchEvent(new CustomEvent('activity-selected', { detail: { name }, bubbles: true, composed: true }));
        this.requestUpdate();
    }
    builder = computed(() => html`
    <slot name="sidebar-top"></slot>
    <nav class="activity-bar">
      ${activitySections.map(
        s => html`
          <a href="${s.href}" tabindex="-1" style="text-decoration:none;width:100%;display:block;">
            <button class="activity-btn" ?active=${this.active === s.name} title=${s.label} @click=${() => this.setActive(s.name)}>
              <span class="icon">${(icons("24") && icons("24")[s.icon]) || fallbackIcons[s.icon]}</span>
              <span class="label">${s.label}</span>
            </button>
          </a>
        `
    )}
    </nav>
    <slot name="sidebar-bottom"></slot>
  `);
}
customElements.define("vscode-sidebar", VSCodeSidebar);
