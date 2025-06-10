class PostHeadingsNav extends HTMLElement {
  static get observedAttributes() { return ['post-id']; }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        .bento-box {
          background: none;
          border-radius: 1rem;
          box-shadow: none;
          padding: 0;
          margin: 0;
          transition: none;
        }
        .bento-box:hover {
          transform: none;
          box-shadow: none;
        }
        h2 {
          display: none;
        }
        nav ul {
          list-style: none;
          padding-left: 0;
          margin: 0;
        }
        nav ul ul {
          padding-left: 1em;
        }
        nav a {
          text-decoration: none;
          color: var(--nav-link-color, #2563eb);
          display: block;
          padding: 0.5em 0;
          font-size: 1rem;
          border-radius: 0.5rem;
          transition: background 0.15s, color 0.15s;
          font-weight: 500;
        }
        nav a:hover, nav a:focus {
          background: #f1f5f9;
          color: #1d4ed8;
        }
        .h1 a { font-weight: bold; font-size: 1.1em; }
        .h2 a { font-size: 1em; }
        .h3 a { font-size: 0.95em; padding-left: 0.5em; }
        .h4 a { font-size: 0.9em; padding-left: 1em; }
        .h5 a { font-size: 0.85em; padding-left: 1.5em; }
        .h6 a { font-size: 0.8em; padding-left: 2em; }
        .loading, .error {
          font-size: 1em;
          color: #64748b;
          padding: 0.5em 0;
        }
        @media (prefers-color-scheme: dark) {
          .bento-box {
            background: none;
            box-shadow: none;
          }
          h2 {
            color: var(--nav-link-color-dark, #fff);
          }
          nav a {
            color: var(--nav-link-color-dark, #60a5fa);
          }
          nav a:hover, nav a:focus {
            background: #23272a;
            color: #3b82f6;
          }
          .loading, .error {
            color: #a1a1aa;
          }
        }
      </style>
      <div class="bento-box">
        <h2>Headings</h2>
        <nav><ul><li>Loading headings...</li></ul></nav>
      </div>
    `;
  }

  slugify(text) {
    if (!text) return '';
    return String(text).toLowerCase()
      .replace(/\s+/g, '-')     // Replace spaces with -
      .replace(/[^\w-]+/g, '')  // Remove all non-word chars (keeps letters, numbers, underscore, hyphen)
      .replace(/--+/g, '-')     // Replace multiple - with single -
      .replace(/^-+/, '')       // Trim - from start of text
      .replace(/-+$/, '');      // Trim - from end of text
  }

  connectedCallback() {
    // Ensure DOM is ready for querySelector on .markdown-body
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", this.fetchAndRenderHeadings.bind(this));
    } else {
      this.fetchAndRenderHeadings();
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'post-id' && oldValue !== newValue) {
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", this.fetchAndRenderHeadings.bind(this));
      } else {
        this.fetchAndRenderHeadings();
      }
    }
  }

  async fetchAndRenderHeadings() {
    const postId = this.getAttribute('post-id');
    if (!postId) {
      this.shadowRoot.querySelector('nav ul').innerHTML = '<li>Post ID not provided.</li>';
      return;
    }

    try {
      const res = await fetch(`/api/posts/${postId}/markdown`);
      if (!res.ok) {
        throw new Error(`Failed to fetch markdown: ${res.status}`);
      }
      const data = await res.text();
      const markdown = data;

      if (!markdown) {
        this.shadowRoot.querySelector('nav ul').innerHTML = '<li>No markdown content found.</li>';
        return;
      }

      const parsedHeadings = this.parseHeadingsFromMarkdown(markdown);
      this.ensureIdsOnHtmlHeadings(); // Add IDs to HTML headings in the main document
      this.renderNavLinks(parsedHeadings); // Render navigation links

    } catch (e) {
      console.error('Error fetching or rendering headings:', e);
      this.shadowRoot.querySelector('nav ul').innerHTML = `<li>Error loading headings: ${e.message}</li>`;
    }
  }

  parseHeadingsFromMarkdown(markdown) {
    const headings = [];
    const headingRegex = /^(#{1,6})\s+(.*)/gm;
    let match;
    while ((match = headingRegex.exec(markdown)) !== null) {
      const level = match[1].length;
      const title = match[2].trim();
      const slug = this.slugify(title);
      headings.push({ level, title, slug });
    }
    return headings;
  }

  async ensureIdsOnHtmlHeadings(parsedHeadings) {
    if (!document.body.contains(this)) {
      // If the component is not connected, wait for DOMContentLoaded.
      // This might happen if the script is in <head> and not deferred.
      await new Promise(resolve => document.addEventListener('DOMContentLoaded', resolve, { once: true }));
    }

    const existingIds = new Set();
    // First, scan existing IDs in the relevant scope to avoid conflicts if some IDs are pre-set
    document.querySelectorAll('article.markdown-body [id]').forEach(el => existingIds.add(el.id));

    if (parsedHeadings)
      for (const heading of parsedHeadings) {
        const { level, title } = heading;
        let slug = this.slugify(title);
        let counter = 1;
        const originalSlug = slug;

        // Ensure generated slug is unique
        while (existingIds.has(slug)) {
          slug = `${originalSlug}-${counter}`;
          counter++;
        }
        existingIds.add(slug); // Add the newly generated/confirmed unique slug to our set

        // Corrected selector:
        const domHeadings = Array.from(document.querySelectorAll(`article.markdown-body h${level}`));

        // Find the corresponding heading in the DOM by matching text content
        // This is a simple heuristic. More robust matching might be needed for complex cases.
        const domHeadingToUpdate = domHeadings.find(dh => {
          // Normalize text content for comparison (e.g., trim whitespace, ignore case if necessary)
          const domTitle = dh.textContent.trim();
          const parsedTitle = title.trim();
          // A simple direct comparison. Consider more sophisticated matching if needed.
          return domTitle === parsedTitle && !dh.id; // Only update if it doesn't have an ID yet or if we want to override
        });

        if (domHeadingToUpdate) {
          domHeadingToUpdate.id = slug;
          heading.slug = slug; // Update the slug in parsedHeadings to reflect the one actually set
        } else {
          console.warn(`Could not find DOM element for heading: "${title}" (h${level}) to set ID.`);
        }
      }
  }

  renderNavLinks(parsedHeadings) {
    const navUl = this.shadowRoot.querySelector('nav ul');
    if (!parsedHeadings.length) {
      navUl.innerHTML = '<li>No headings found in post.</li>';
      return;
    }

    let html = '';
    parsedHeadings.forEach(heading => {
      // We use the slug generated from the markdown title for the href.
      // ensureIdsOnHtmlHeadings should have attempted to set a matching ID
      // on the corresponding HTML element.
      html += `<li class="h${heading.level}"><a href="#${heading.slug}">${heading.title}</a></li>`;
    });
    navUl.innerHTML = html;

    this.shadowRoot.querySelectorAll('nav a').forEach(a => {
      a.addEventListener('click', (event) => {
        // event.preventDefault(); // Keep commented to allow default browser anchor behavior
        const targetId = a.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (!targetElement) {
          console.warn(`Target element for ID "${targetId}" not found at click time. Browser will attempt to navigate.`);
        }
      });
    });
  }
}

customElements.define('post-headings-nav', PostHeadingsNav);
