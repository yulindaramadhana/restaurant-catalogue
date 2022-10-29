class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav>
            <div class="nav-logo">
                <button id="hamburger">☰</button>
                <h1 tabindex="0">Hunger Apps</h1>
            </div>
            <ul id="drawer" class="list-nav">
                <li class="active"><a href="#/home">Home</a></li>
                <li><a href="#/like">Favorite</a></li>
                <li><a href="https://www.linkedin.com/in/yulinda-ramadhana-a46470137">About Us</a></li>
            </ul>
        </nav>`;
  }
}

customElements.define('app-bar', AppBar);
