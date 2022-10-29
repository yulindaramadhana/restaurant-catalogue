/* eslint-disable import/extensions */
import './headline.js';

class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const heroImageElement = document.createElement('div');
    heroImageElement.classList.add('hero-image');

    const headlineElement = document.createElement('web-headline');

    heroImageElement.appendChild(headlineElement);

    this.appendChild(heroImageElement);
  }
}

customElements.define('hero-element', HeroElement);
