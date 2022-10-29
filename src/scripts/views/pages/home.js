/* eslint-disable import/extensions */
import '../../components/hero-element.js';
import '../../components/restaurant-list.js';
import NavOnScroll from '../../utils/nav-on-scroll.js';
import RestaurantDbSource from '../../data/restaurantdb-source.js';
import changeNavFontClass from '../../utils/change-navbar-class.js';
import ButtonShowListRestaurant from '../../utils/button-show-list-restaurant.js';

const Home = {
  async render() {
    return `
          <div>
            <hero-element></hero-element>
            <div class="content" id="list-all-restaurant">
                <h2 class="content__heading">List Restaurants</h2>
                    <restaurant-list></restaurant-list>
            </div>
          </div>
        `;
  },
  async afterRender() {
    changeNavFontClass._addClass();

    const data = await RestaurantDbSource.listRestaurant();
    this._renderResult(data.restaurants);

    this._onScrollPage();

    ButtonShowListRestaurant.init({
      buttonShowListRestaurant: document.querySelector('#btn-show-more'),
      listRestaurants: document.querySelector('#list-all-restaurant'),
    });
  },
  _renderResult(results) {
    const homeElement = document.querySelector('restaurant-list');
    homeElement.restaurants = results;
  },
  _onScrollPage() {
    const navbar = document.querySelector('.nav-home');
    NavOnScroll.init({
      navbar,
    });
  },
};

export default Home;
