class RelatedPosts extends HTMLElement {
  static get observedAttributes() { return ['post-id', 'card']; }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          margin: 0 auto;
        }
        .bento-box {
          background: none;
          border-radius: 1rem;
          box-shadow: none;
          padding: 0;
          margin: 0;
          transition: none;
          &:hover {
            transform: none;
            box-shadow: none;
          }
        }
        h2 {
          display: none;
          /* If h2 were to be displayed, its color would adapt: */
          color: light-dark(initial, var(--nav-link-color-dark, #fff));
        }
        ul {
          list-style: none;
          padding-left: 0;
          margin: 0;
        }
        li a {
          text-decoration: none;
          color: light-dark(var(--nav-link-color, #2563eb), var(--nav-link-color-dark, #60a5fa));
          display: block;
          padding: 0.5em 0;
          font-size: 1rem;
          border-radius: 0.5rem;
          transition: background 0.15s, color 0.15s;
          font-weight: 500;
        }
        li a:hover, li a:focus {
          background: light-dark(#f1f5f9, #23272a);
          color: light-dark(#1d4ed8, #3b82f6);
        }
        .loading, .error {
          font-size: 1em;
          color: light-dark(#64748b, #a1a1aa);
          padding: 0.5em 0;
        }
        /* Card mode styles */
        .related-posts-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1rem;
          width: 100%;
          margin: 0 auto;
          box-sizing: border-box;
          padding-block: 0.5rem;
          /* Remove horizontal scroll and snap */
        }
        .related-posts-cards post-card {
          min-width: 0;
          max-width: 100%;
          flex: 1 1 0%;
          scroll-snap-align: unset;
        }
      </style>
      <div class="bento-box">
        <h2>Related Posts</h2>
        <ul class="related-posts-list"><li class="loading">Loading related posts...</li></ul>
        <div class="related-posts-cards" style="display:none;"></div>
      </div>
    `;
  }

  connectedCallback() {
    if (this.hasAttribute('post-id')) {
      this.fetchAndRenderRelatedPosts();
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if ((name === 'post-id' && oldValue !== newValue && newValue) || (name === 'card' && oldValue !== newValue)) {
      this.fetchAndRenderRelatedPosts();
    }
  }

  async fetchAndRenderRelatedPosts() {
    const postId = this.getAttribute('post-id');
    const cardMode = this.hasAttribute('card');
    const listElement = this.shadowRoot.querySelector('.related-posts-list');
    const cardsElement = this.shadowRoot.querySelector('.related-posts-cards');
    if (!postId) {
      listElement.innerHTML = '<li class="error">Post ID not provided.</li>';
      cardsElement.style.display = 'none';
      listElement.style.display = '';
      return;
    }
    listElement.innerHTML = '<li class="loading">Loading related posts...</li>';
    listElement.style.display = cardMode ? 'none' : '';
    cardsElement.style.display = cardMode ? '' : 'none';
    if (cardMode) {
      cardsElement.innerHTML = '<div class="loading">Loading related posts...</div>';
    }
    try {
      const res = await fetch(`/api/posts/${postId}/related`);
      if (!res.ok) {
        throw new Error(`Failed to fetch related posts: ${res.status}`);
      }
      const relatedPosts = await res.json();
      if (!relatedPosts || relatedPosts.length === 0) {
        if (cardMode) {
          cardsElement.innerHTML = '<div>No related posts found.</div>';
        } else {
          listElement.innerHTML = '<li>No related posts found.</li>';
        }
        return;
      }
      if (cardMode) {
        // Render as post-card elements
        cardsElement.innerHTML = relatedPosts.map(post => {
          // Escape attributes
          const esc = (s) => String(s || '').replace(/"/g, '&quot;');
          return `<post-card
            title="${esc(post.title)}"
            description="${esc(post.description)}"
            date="${esc(post.date)}"
            link="${esc(post.url)}"
            ${post.img ? `img="${esc(post.img)}"` : ''}
            ${post.author ? `author="${esc(post.author)}"` : ''}
            ${post.avatar ? `avatar="${esc(post.avatar)}"` : ''}
          >
            ${(post.tags || []).map(tag => `<tag-item slot="tags" link="/tags/${esc(tag.id)}" name="${esc(tag.name)}"></tag-item>`).join('')}
          </post-card>`;
        }).join('');
      } else {
        // Render as bullet list
        let html = '';
        relatedPosts.forEach(post => {
          html += `<li><a href="${post.url}">${post.title}</a></li>`;
        });
        listElement.innerHTML = html;
      }
    } catch (e) {
      console.error('Error fetching or rendering related posts:', e);
      if (cardMode) {
        cardsElement.innerHTML = `<div class="error">Error loading related posts.</div>`;
      } else {
        listElement.innerHTML = `<li class="error">Error loading related posts.</li>`;
      }
    }
  }
}

customElements.define('related-posts', RelatedPosts);
