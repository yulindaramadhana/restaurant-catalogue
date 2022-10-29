import CONFIG from '../globals/config';

class RestaurantImage extends HTMLElement {
  set restaurantInfo(restaurantInfo) {
    this._restaurantInfo = restaurantInfo;
    this.render();
  }

  render() {
    this.innerHTML = ` 
        <div class="restaurant-detail-image">
            <img src="${CONFIG.BASE_IMAGE_URL}${this._restaurantInfo.pictureId}"
            alt="${this._restaurantInfo.name}">
        </div>
        `;
  }
}

customElements.define('restaurant-detail-image', RestaurantImage);
