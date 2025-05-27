class PostEmojiReaction extends HTMLElement {
  static get observedAttributes() { return ['post-id']; }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host { /* Style the host element itself */
          display: block;
        }
        .reaction-buttons-container {
          text-align: center; /* Center the buttons */
        }
        button {
          background: none;
          border: none; /* Removed border */
          border-radius: 4px;
          padding: 0.5em 1em;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }
        button:hover {
          background-color: #f0f0f0;
        }
        span {
          font-family: sans-serif;
        }
      </style>
      <div class="reaction-buttons-container"><span>Loading...</span></div>
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
      // First, get the available reactions
      const availableReactionsRes = await fetch('/api/available-reactions');
      if (!availableReactionsRes.ok) throw new Error('Failed to fetch available reactions');
      const availableReactions = await availableReactionsRes.json();

      // Then, get the counts for the current post
      const postReactionsRes = await fetch(`/api/posts/${postId}/reactions`);
      if (!postReactionsRes.ok) throw new Error('Failed to fetch post reactions');
      const postReactionsData = await postReactionsRes.json();

      let html = '';
      // Iterate over available reactions to maintain order and include all options
      for (const reaction of availableReactions) {
        const count = postReactionsData[reaction.emoji] || 0;
        html += `<button data-emoji="${reaction.emoji}" aria-label="${reaction.alt}">${reaction.emoji} <span>${count}</span></button> `;
      }

      this.shadowRoot.innerHTML = `
        <style>
          :host { /* Style the host element itself */
            display: block;
          }
          .reaction-buttons-container {
            text-align: center; /* Center the buttons */
          }
          button {
            background: none;
            border: none; /* Removed border */
            border-radius: 4px;
            padding: 0.5em 1em;
            cursor: pointer;
            transition: background-color 0.2s ease;
          }
          button:hover {
            background-color: #f0f0f0;
          }
          span {
            font-family: sans-serif;
          }
        </style>
        <div class="reaction-buttons-container">${html}</div>
      `;
      this.shadowRoot.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', async (e) => {
          const emoji = btn.getAttribute('data-emoji');
          await fetch(`/api/posts/${postId}/reactions`, {
            method: 'POST',
            body: emoji,
          });
          this.fetchAndRender();
        });
      });
    } catch (e) {
      console.error('Error fetching reactions:', e);
      this.shadowRoot.innerHTML = `
        <style>
          :host { /* Style the host element itself */
            display: block;
          }
          .reaction-buttons-container {
            text-align: center; /* Center the error message */
          }
          span {
            font-family: sans-serif;
            color: red;
          }
        </style>
        <div class="reaction-buttons-container"><span>Error loading reactions</span></div>
      `;
    }
  }
}
customElements.define('post-emoji-reaction', PostEmojiReaction);
