/* eslint-disable import/extensions */
import '../../components/restaurant-list.js';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import changeNavFontClass from '../../utils/change-navbar-class.js';

const Like = {
  async render() {
    return `<div class="content" id="content-favorite-restaurants">
              <h2 class="content__heading">Like Restaurant</h2>
            </div>`;
  },
  async afterRender() {
    changeNavFontClass._removeClass();

    const favoritesRestaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    this._renderResult(favoritesRestaurants);
  },
  _renderResult(results) {
    const containerFavoritesRestaurants = document.getElementById('content-favorite-restaurants');

    if (results.length > 0) {
      this._showFavoriteRestaurants(results, containerFavoritesRestaurants);
    } else {
      this._showEmptyRestaurants(containerFavoritesRestaurants);
    }
  },
  _showFavoriteRestaurants(favoriteRestaurants, containerFavorites) {
    const elmListRestaurants = document.createElement('restaurant-list');

    containerFavorites.appendChild(elmListRestaurants);

    const listRestaurantsElement = document.querySelector('restaurant-list');
    listRestaurantsElement.restaurants = favoriteRestaurants;
  },
  _showEmptyRestaurants(containerFavorites) {
    const elementEmptyFavorites = document.createElement('div');
    elementEmptyFavorites.classList.add('restaurant-item__not__found');
    elementEmptyFavorites.innerHTML = 'No Favorites Restaurants Found.';
    containerFavorites.appendChild(elementEmptyFavorites);
  },
};

export default Like;
