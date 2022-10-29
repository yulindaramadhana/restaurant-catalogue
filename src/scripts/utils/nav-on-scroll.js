const NavOnScroll = {
  init({ navbar }) {
    window.onscroll = () => {
      if (document.body.scrollTop >= 100
        || document.documentElement.scrollTop >= 100
        || window.pageYOffset > 100) {
        this._coloredNavbar(navbar);
      } else {
        this._transparentNavbar(navbar);
      }
    };
  },
  _coloredNavbar(navbar) {
    navbar.classList.add('nav-colored');
    navbar.classList.remove('nav-transparent');
  },
  _transparentNavbar(navbar) {
    navbar.classList.add('nav-transparent');
    navbar.classList.remove('nav-colored');
  },
};

export default NavOnScroll;
