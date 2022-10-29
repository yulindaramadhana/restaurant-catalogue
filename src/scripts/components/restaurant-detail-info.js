class RestauranDetailInfo extends HTMLElement {
  set restaurantInfo(restaurantInfo) {
    this._restaurantInfo = restaurantInfo;
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="restaurant-detail-info">
                <div class="restaurant-detail-info__label">
                    <div>Rating</div>
                    <div>${this._restaurantInfo.rating}</div>
                </div>
                <div class="restaurant-detail-info__label">
                    <div>Name</div>
                    <div>${this._restaurantInfo.name}</div>
                </div>
                <div class="restaurant-detail-info__label">
                    <div>Description</div>
                    <div>${this._restaurantInfo.description}</div>
                </div>
                <div class="restaurant-detail-info__label">
                    <div>City</div>
                    <div>${this._restaurantInfo.city}</div>
                </div>
                <div class="restaurant-detail-info__label">
                    <div>Address</div>
                    <div>${this._restaurantInfo.address}</div>
                </div>
            </div>
        `;
  }
}

customElements.define('restaurant-detail-info', RestauranDetailInfo);
