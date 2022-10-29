/* eslint-disable import/extensions */
import '../../components/restaurant-list.js';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import changeNavFontClass from '../../utils/change-navbar-class.js';

const Like = {
  async render() {
    return `<div class="content-favorite-restaurants">
              <h2 class="content__heading">Like Restaurant</h2>
              <restaurant-list></restaurant-list>
            </div>`;
  },
  async afterRender() {
    changeNavFontClass._removeClass();

    const favoritesRestaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    this._renderResult(favoritesRestaurants);
  },
  _renderResult(results) {
    const listRestaurantsElement = document.querySelector('restaurant-list');
    listRestaurantsElement.restaurants = results;
  },
};

export default Like;
