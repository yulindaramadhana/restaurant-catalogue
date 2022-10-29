const changeNavClass = {
  _addClass() {
    const navbar = document.querySelector('nav');
    navbar.classList.add('nav-home');
    navbar.classList.remove('nav-detail');
  },
  _removeClass() {
    const navbar = document.querySelector('nav');
    navbar.classList.add('nav-detail');
    navbar.classList.remove('nav-home');
  },
};

export default changeNavClass;
