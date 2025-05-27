class RelatedPosts extends HTMLElement {
  static get observedAttributes() { return ['post-id']; }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          /* Match post-headings-nav styles */
          padding: 1rem;
          border-left: 1px solid #eee;
          margin-left: 1rem; /* This might be too much if blog-sidebar already has gap/padding */
          background: var(--nav-bg, #fff);
          margin-top: 1rem; /* Keep some separation from headings nav */
        }
        h2 {
          /* Match .h1 a from post-headings-nav for prominence */
          font-weight: bold;
          font-size: 1.1em; 
          margin-bottom: 0.5em;
          color: var(--nav-link-color, #222);
          padding: 0; /* Reset padding if any */
        }
        ul {
          list-style: none;
          padding-left: 0;
          margin: 0;
        }
        /* Match nav a from post-headings-nav */
        li a {
          text-decoration: none;
          color: var(--nav-link-color, #222);
          display: block;
          padding: 0.25em 0; /* Consistent padding */
          font-size: 0.95em; /* Consistent font size */
          border-radius: 4px;
          transition: background 0.15s, color 0.15s;
        }
        li a:hover, li a:focus {
          background: var(--nav-link-hover-bg, #f0f0f0);
          color: var(--nav-link-hover-color, #007bff);
        }
        .loading, .error {
          font-size: 0.9em; /* Keep specific styles for loading/error */
          color: #777;
          padding: 0.25em 0; /* Align with link padding */
        }
        @media (prefers-color-scheme: dark) {
          :host {
            background: var(--nav-bg-dark, #181a1b);
            border-left: 1px solid #333;
          }
          h2 {
            color: var(--nav-link-color-dark, #eee);
          }
          li a {
            color: var(--nav-link-color-dark, #eee);
          }
          li a:hover, li a:focus {
            background: var(--nav-link-hover-bg-dark, #23272a);
            color: var(--nav-link-hover-color-dark, #66aaff);
          }
          .loading, .error {
            color: #aaa;
          }
        }
      </style>
      <h2>Related Posts</h2>
      <ul class="related-posts-list"><li class="loading">Loading related posts...</li></ul>
    `;
  }

  connectedCallback() {
    if (this.hasAttribute('post-id')) {
      this.fetchAndRenderRelatedPosts();
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'post-id' && oldValue !== newValue && newValue) {
      this.fetchAndRenderRelatedPosts();
    }
  }

  async fetchAndRenderRelatedPosts() {
    const postId = this.getAttribute('post-id');
    if (!postId) {
      this.shadowRoot.querySelector('.related-posts-list').innerHTML = '<li class="error">Post ID not provided.</li>';
      return;
    }

    const listElement = this.shadowRoot.querySelector('.related-posts-list');
    listElement.innerHTML = '<li class="loading">Loading related posts...</li>';

    try {
      const res = await fetch(`/api/posts/${postId}/related`);
      if (!res.ok) {
        throw new Error(`Failed to fetch related posts: ${res.status}`);
      }
      const relatedPosts = await res.json();

      if (!relatedPosts || relatedPosts.length === 0) {
        listElement.innerHTML = '<li>No related posts found.</li>';
        return;
      }

      let html = '';
      relatedPosts.forEach(post => {
        html += `<li><a href="${post.url}">${post.title}</a></li>`;
      });
      listElement.innerHTML = html;

    } catch (e) {
      console.error('Error fetching or rendering related posts:', e);
      listElement.innerHTML = `<li class="error">Error loading related posts.</li>`;
    }
  }
}

customElements.define('related-posts', RelatedPosts);
