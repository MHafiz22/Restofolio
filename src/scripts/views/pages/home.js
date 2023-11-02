import '../../component/restaurant-list';
import '../../component/restaurant-item';
import RestaurantSource from '../../data/restaurant-source';

const Home = {
  async render() {
    return `
      <div class="hero">
      <picture>
        <source media="(max-width: 600px)" srcset="./images/hero-image-small.jpg">
        <img src='./images/hero-image-large.jpg' alt="Hero Image"  class="hero-image">
      </picture>
        <div class="hero-inner">
          <h1 class="hero-title">Temukan Lezatnya Ragam Kuliner</h1>
          <p class="hero-tagline">
            Sambut kelezatan makanan dari berbagai kota di katalog restoran
            kami.
          </p>
        </div>
      </div>
      <article class="restaurant">
        <div class="content">
          <h1 class="restaurant-label">Jelajahi Restoran</h1>
          <restaurant-list></restaurant-list>
        </div>
      </article>
      <article class="story">
        <picture>
        <source media="(max-width: 600px)" srcset="./images/story-image-small.jpg">
        <img data-src='./images/story-image-large.jpg' 
            alt="" class="lazyload">
        </picture>
        <div class="story-content">
          <h1 class="story-title">Our Story</h1>
          <p class="story-description">
            Kami adalah sebuah tim yang penuh semangat dalam mencari pengalaman
            baru dalam dunia kuliner. Kami membagikan cerita tentang makanan
            dari berbagai sudut pandang. Bersama-sama, kami menjelajahi rasa dan
            kelezatan di setiap sudut kota. Bergabunglah dengan kami dalam
            perjalanan kuliner yang luar biasa ini!
          </p>
          <button class="story-button">Read More</button>
        </div>
      </article>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listRestaurants();
    const restaurantsContainer = document.querySelector('restaurant-list');
    restaurants.forEach((restaurant) => {
      const restaurantItemElement = document.createElement('restaurant-item');
      restaurantItemElement.restaurant = restaurant;
      restaurantsContainer.appendChild(restaurantItemElement);
    });
  },
};

export default Home;
