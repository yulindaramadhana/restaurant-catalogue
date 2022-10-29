const ButtonShowListRestaurant = {
  init({ buttonShowListRestaurant, listRestaurants }) {
    this._buttonShowListRestaurant = buttonShowListRestaurant;
    this._listRestaurants = listRestaurants;

    this._onClickButton();
  },
  _onClickButton() {
    this._buttonShowListRestaurant.addEventListener('click', () => {
      const elementListRestaurants = this._listRestaurants.offsetTop;
      window.scrollTo({ top: elementListRestaurants - 80, behavior: 'smooth' });
    });
  },
};

export default ButtonShowListRestaurant;
