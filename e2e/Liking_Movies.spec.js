/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
Feature('Liking Movies');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('No Favorites Restaurants Found.', '.restaurant-item__not__found');
  I.amOnPage('/');

  I.waitForElement('.card-restaurant a');

  //   I.seeElement('.card-restaurant__name');

  const firstElm = locate('.card-restaurant a').first();
  //   const firstTitleElm = locate('.card-restaurant__name').first();
  //   const firstRestaurantName = await I.grabTextFrom(firstTitleElm);

  I.click(firstElm);
  //   pause();

  I.waitForElement('#likeButtonContainer');
  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.card-restaurant__name');
  const likedFilmTitle = await I.grabTextFrom('.card-restaurant__name');
  assert.strictEqual(firstRestaurantName, likedFilmTitle);
});
