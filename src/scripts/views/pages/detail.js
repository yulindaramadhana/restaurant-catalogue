/* eslint-disable import/extensions */
import '../../components/restaurant-detail.js';
import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import LikeButtonPresenter from '../../utils/like-button-presenter.js';
import changeNavClass from '../../utils/change-navbar-class.js';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb.js';

const Detail = {
  async render() {
    return `<div class="content">
                    <h2 class="content__heading">Detail Restaurant</h2>
                    <restaurant-detail></restaurant-detail>
                    <div id="likeButtonContainer"></div>
                </div>`;
  },
  async afterRender() {
    changeNavClass._removeClass();

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = await RestaurantDbSource.detailRestaurant(url.id);
    this._renderResult(data.restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: data.restaurant.id,
        name: data.restaurant.name,
        pictureId: data.restaurant.pictureId,
        city: data.restaurant.city,
        rating: data.restaurant.rating,
      },
    });
  },
  _renderResult(results) {
    const detailRestaurant = document.querySelector('restaurant-detail');
    detailRestaurant.restaurantDetail = results;
  },
};

export default Detail;
