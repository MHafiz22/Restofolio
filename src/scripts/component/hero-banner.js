class HeroBanner extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .hero {
        display: flex;
        align-items: center;
        min-height: 380px;
        width: 100%;
        text-align: center;
        background-image: url('/images/hero-image-large.jpg');
        background-position: center;
        background-color: var(--main-color);
        position: relative;
        z-index: 0;
        }

        .hero::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 1;
        }

        .hero-inner {
        position: relative;
        z-index: 2;
        margin: 0 auto;
        }

        .hero-title {
        color: white;
        font-weight: 500;
        font-size: 36px;
        font-family: "Playfair Display", serif;
        }

        .hero-tagline {
        color: white;
        margin-top: 16px;
        font-size: 18px;
        font-weight: 300;
        }

        @media screen and (min-width: 900px) {
        .hero-title {
            font-size: 40px;
        }

        .hero-tagline {
            font-size: 20px;
        }
        }

        @media screen and (min-width: 1200px) {
        .hero {
            min-width: 1000px;
        }
        }

        @media screen and (max-width: 600px) {
        .hero {
          background-image: url('/images/hero-image-small.jpg');
        }
        } 
      </style>
      
      <div class="hero">
        <div class="hero-inner">
          <h1 class="hero-title">Temukan Lezatnya Ragam Kuliner</h1>
          <p class="hero-tagline">
            Sambut kelezatan makanan dari berbagai kota di katalog restoran
            kami.
          </p>
        </div>
      </div>
    `;
  }
}

customElements.define('hero-banner', HeroBanner);
