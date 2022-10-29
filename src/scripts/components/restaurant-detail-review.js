class RestaurantReview extends HTMLElement {
  set restaurantReview(restaurantReview) {
    this._restaurantReview = restaurantReview;
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="card-review">
                <div class="card-review__header">
                    <div>${this._restaurantReview.name}</div>
                    <div>${this._restaurantReview.date}</div>
                </div>
                <div class="card-review__body">
                    ${this._restaurantReview.review}
                </div>
            </div>
        `;
  }
}

customElements.define('restaurant-detail-review', RestaurantReview);
