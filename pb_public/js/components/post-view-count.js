class PostViewCount extends HTMLElement {
  static get observedAttributes() { return ['post-id']; }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .view-count-container {
          text-align: center;
          padding-top: 0.5em; /* Added padding */
          padding-bottom: 0.5em; /* Added padding */
        }
        .view-count-container span {
          font-family: sans-serif;
        }
      </style>
      <div class="view-count-container"><span>Loading...</span></div>
    `;
  }

  connectedCallback() {
    this.fetchAndRender();
  }

  attributeChangedCallback() {
    this.fetchAndRender();
  }

  async fetchAndRender() {
    const postId = this.getAttribute('post-id');
    if (!postId) return;
    try {
      const res = await fetch(`/api/posts/${postId}/views`);
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      this.shadowRoot.innerHTML = `
        <style>
          .view-count-container {
            text-align: center;
            padding-top: 0.5em; /* Added padding */
            padding-bottom: 0.5em; /* Added padding */
          }
          .view-count-container span {
            font-family: sans-serif;
          }
        </style>
        <div class="view-count-container"><span>${data.views}</span> view(s)</div>
      `;
    } catch (e) {
      this.shadowRoot.innerHTML = `
        <style>
          .view-count-container {
            text-align: center;
            padding-top: 0.5em; /* Added padding */
            padding-bottom: 0.5em; /* Added padding */
          }
          .view-count-container span {
            font-family: sans-serif;
            color: red;
          }
        </style>
        <div class="view-count-container"><span>Error loading views</span></div>
      `;
    }
  }
}
customElements.define('post-view-count', PostViewCount);
