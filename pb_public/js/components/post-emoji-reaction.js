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
          white-space: nowrap; /* Prevent wrapping */
          overflow-x: auto; /* Allow horizontal scrolling */
          overflow-y: hidden; /* Hide vertical scrollbar if any */
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

        /* Media query for smaller screens */
        @media (max-width: 600px) {
          button {
            padding: 0.15em 0.3em; /* Drastically reduce padding */
            font-size: 0.75em; /* Significantly reduce font size */
            margin: 0 1px; /* Add minimal horizontal margin to prevent touching */
          }
          button span {
            font-size: 0.85em; /* Adjust count font size relative to new button font size */
            margin-left: 2px; /* Small space between emoji and count */
          }
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
            white-space: nowrap; /* Prevent wrapping */
            display: flex; /* Use flexbox for layout */
            flex-wrap: nowrap; /* Prevent wrapping */
            align-items: center; /* Center items vertically */
          }
          button {
            background: none;
            border: none; /* Removed border */
            border-radius: 4px;
            padding: 0.15em 0.3em;
            margin: 0 1px;
            cursor: pointer;
            transition: background-color 0.2s ease;
            font-size: 0.75em;
            display: inline-flex;
            align-items: center;
            gap: 2px; /* Space between emoji and count */
          }
          button:hover {
            background-color: #f0f0f0;
          }
          span {
            font-size: 0.85em;
            font-family: sans-serif;
            margin-left: 2px;
          }

          /* Media query for smaller screens */
          @media (max-width: 600px) {
            button {
              padding: 0.15em 0.3em; /* Drastically reduce padding */
              font-size: 0.75em; /* Significantly reduce font size */
              margin: 0 1px; /* Add minimal horizontal margin to prevent touching */
            }
            button span {
              font-size: 0.85em; /* Adjust count font size relative to new button font size */
              margin-left: 2px; /* Small space between emoji and count */
            }
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
