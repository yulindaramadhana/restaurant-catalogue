/* eslint-disable import/extensions */
import './restaurant-detail-image.js';
import './restaurant-detail-info.js';
import './restaurant-detail-menu.js';
import './restaurant-detail-review.js';

class RestaurantDetail extends HTMLElement {
  set restaurantDetail(restaurantDetail) {
    this._restaurantDetail = restaurantDetail;
    this.render();
  }

  render() {
    const containerElement = document.createElement('div');
    containerElement.classList.add('restaurant-detail-container');

    const restaurantImage = document.createElement('restaurant-detail-image');
    restaurantImage.restaurantInfo = this._restaurantDetail;

    const restaurantContent = document.createElement('div');
    restaurantContent.classList.add('restaurant-detail-content');

    const restaurantInfo = document.createElement('restaurant-detail-info');
    restaurantInfo.restaurantInfo = this._restaurantDetail;

    const restaurantMenu = document.createElement('restaurant-detail-menu');
    restaurantMenu.restaurantMenu = this._restaurantDetail.menus;

    const restaurantReview = document.createElement('div');
    restaurantReview.classList.add('restaurant-detail-review-container');

    const restaurantReviewTitle = document.createElement('div');
    restaurantReviewTitle.classList.add('restaurant-detail-review-title');
    restaurantReviewTitle.innerHTML = 'Reviews';

    const listRestaurantReview = document.createElement('div');
    listRestaurantReview.classList.add('list-restaurant-detail-review');

    restaurantReview.appendChild(restaurantReviewTitle);
    restaurantReview.appendChild(listRestaurantReview);

    this._restaurantDetail.customerReviews.forEach((review) => {
      const reviewItem = document.createElement('restaurant-detail-review');
      reviewItem.restaurantReview = review;
      listRestaurantReview.appendChild(reviewItem);
    });

    restaurantContent.appendChild(restaurantInfo);
    restaurantContent.appendChild(restaurantMenu);
    restaurantContent.appendChild(restaurantReview);

    containerElement.appendChild(restaurantImage);
    containerElement.appendChild(restaurantContent);

    this.appendChild(containerElement);
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
