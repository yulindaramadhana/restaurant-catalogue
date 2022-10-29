class Headline extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero-image__title">
            <div tabindex="0" id="welcome-text">
                <h2>Hungry?</h2>
                <h2> Find your Favorite Place to Eat</h2>
            </div>
            <button id="btn-show-more">Find Now</button>
        </div>`;
  }
}

customElements.define('web-headline', Headline);
