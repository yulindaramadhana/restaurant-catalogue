class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <footer>
                <div>Restaurants catalogue</div>
            </footer>
        `;
  }
}

customElements.define('footer-element', Footer);
