class RestaurantMenu extends HTMLElement {
  set restaurantMenu(restaurantMenu) {
    this._restaurantMenu = restaurantMenu;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="restaurant-detail-info__menu">
            <div>Menu:</div>
            <div>
                <div class="restaurant-detail-info__label restaurant-menu"> 
                    <div>Foods</div>
                    <div>${this._restaurantMenu.foods.map((e) => e.name).join(', ')}</div>
                </div>
                <div class="restaurant-detail-info__label restaurant-menu">
                    <div>Benerages</div>
                    <div>${this._restaurantMenu.drinks.map((e) => e.name).join(', ')}</div>
                </div>
            </div>
        </div>
        `;
  }
}

customElements.define('restaurant-detail-menu', RestaurantMenu);
