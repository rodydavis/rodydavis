class OpenHeartElement extends HTMLElement {
  KEY = "_open_heart";
  _send;

  constructor() {
    super();
    this._send = this.send.bind(this);
  }

  connectedCallback() {
    this.tabIndex = 0;
    this.setAttribute("role", "button");
    this.setAttribute("aria-busy", "false");

    if (!this.emoji || !this.href) {
      console.error(this, "missing required attributes");
      this.toggleAttribute("disabled", true);
      return;
    }

    if (!this.validateEmoji()) {
      console.error(this, "emoji attribute incorrect");
      return;
    }

    if (this.hasReacted()) {
      this.setReacted();
    } else {
      this.addEventListener("click", this._send);
      this.addEventListener("keydown", this._send);
    }
  }

  validateEmoji() {
    if ("Segmenter" in Intl) {
      const segments = Array.from(
        new Intl.Segmenter(navigator.language || "en", {
          granularity: "grapheme",
        }).segment(this.emoji)
      );
      const emoji = segments.length > 0 ? segments[0].segment : false;
      if (this.emoji != emoji) return false;
      if (!emoji) return false;
      return /\p{Emoji}/u.test(emoji);
    } else {
      const match = this.emoji.match(/\p{Emoji}/u);
      return !!(match && match[0]);
    }
  }

  get href() {
    return this.getAttribute("href");
  }

  get emoji() {
    return this.getAttribute("emoji");
  }

  get key() {
    return `${this.emoji}@${encodeURIComponent(this.href)}`;
  }

  get disabled() {
    return this.hasAttribute("disabled");
  }

  get persist() {
    return this.hasAttribute("persist") != "false";
  }

  hasReacted() {
    if (!this.persist) return false;
    const hearts = (localStorage.getItem(this.KEY) || "").split(",");
    return hearts.includes(this.key);
  }

  setReacted() {
    if (this.persist) {
      this.setAttribute("aria-pressed", "true");
      this.toggleAttribute("disabled", true);
      return;
    }
    this.removeEventListener("click", this._send);
  }

  saveReaction() {
    const hearts = (localStorage.getItem(this.KEY) || "")
      .split(",")
      .filter((s) => s);
    hearts.push(this.key);
    localStorage.setItem(this.KEY, hearts.join(","));
  }

  async getCount() {
    const response = await fetch(this.href, {
      headers: { Accept: "application/json" },
    });
    if (!response.ok) return;

    let json = {};
    try {
      json = await response.json();
    } catch {
      /* do nothing */
    }

    this.setAttribute("count", Number(json[this.emoji] || 0).toString());
  }

  async send(event) {
    if (event instanceof KeyboardEvent && !["Enter", " "].includes(event.key))
      return;

    if (this.disabled) return;
    if (this.getAttribute("aria-busy") === "true") return;
    if (this.hasReacted()) return this.setReacted();

    this.setAttribute("aria-busy", "true");
    await fetch(this.href, {
      method: "post",
      body: this.emoji,
      mode: "no-cors",
    });
    this.setAttribute("aria-busy", "false");
    this.saveReaction();
    this.setReacted();
    this.dispatchEvent(new CustomEvent("open-heart", { bubbles: true }));
    this.getCount();
  }
}

if (!window.customElements.get("open-heart")) {
  window.OpenHeartElement = OpenHeartElement;
  window.customElements.define("open-heart", OpenHeartElement);
}

export default OpenHeartElement;
