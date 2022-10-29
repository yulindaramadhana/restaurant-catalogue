// eslint-disable-next-line import/extensions
import CONFIG from '../globals/config.js';

class RestauranItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
                            <div class="card-restaurant">
                                <a href="/#/detail/${this._restaurant.id}">
                                    <div class="card-restaurant__image">
                                        <img src="${CONFIG.BASE_IMAGE_URL}${this._restaurant.pictureId}"
                                            alt="${this._restaurant.name}">
                                    </div>
                                    <div class="card-restaurant__body">
                                        <div class="card-restaurant__headline">
                                            <div class="card-restaurant__name">${this._restaurant.name}</div>
                                            <div class="card-restaurant__rate">${this._restaurant.rating}</div>
                                        </div>
                                        <div class="card-restaurant__city">${this._restaurant.city}</div>
                                    </div>
                                </a>
                            </div> `;
  }
}

customElements.define('restaurant-item', RestauranItem);
