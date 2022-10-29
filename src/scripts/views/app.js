/* eslint-disable import/extensions */
import UrlParser from '../routes/url-parser.js';
import '../components/app-bar.js';
import '../components/footer.js';
import DrawerInitiator from '../utils/drawer-initiator.js';
import routes from '../routes/routes.js';

class App {
  constructor({
    button, drawer, content, navbar,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._navbar = navbar;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    this._content.innerHTML = await page.render();
    await page.afterRender();

    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      this._onClickSkipContent();
    });
    skipLinkElem.addEventListener('keyup', (event) => {
      event.preventDefault();
      if (event.keyCode === 13) {
        this._onClickSkipContent();
      }
    });
  }

  // eslint-disable-next-line class-methods-use-this
  _onClickSkipContent() {
    document.querySelector('#mainContent').focus();
    // document.querySelector('.skip-link').blur();
  }
}

export default App;
