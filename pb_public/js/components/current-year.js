class CurrentYear extends HTMLElement {
  connectedCallback() {
    this.textContent = new Date().getFullYear();
  }
}
customElements.define('current-year', CurrentYear);
