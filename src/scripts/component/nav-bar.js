class NavBar extends HTMLElement {
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
        
        .navbar {
        min-height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 50px;
        background-color: var(--dark-first);
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 2;
        }

        .nav-menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 60px;
        }

        .logo {
        font-size: 2rem;
        text-decoration: none;
        color: white;
        font-family: "Playfair Display", serif;
        }

        .logo span {
        color: var(--main-color);
        }

        .nav-menu li {
        list-style: none;
        }

        .nav-menu li a {
        color: white;
        text-decoration: none;
        transition: 0.7s ease;
        min-width: 44px;
        min-height: 44px;
        display: flex;
        justify-content: center;
        align-items: center;
        }

        .nav-menu a:hover {
        text-decoration: underline;
        color: var(--main-color);
        }

        .hamburger {
        display: none;
        cursor: pointer;
        padding: 1em;
        background-color: transparent;
        border: none;
        }

        .bar {
        display: block;
        width: 25px;
        height: 3px;
        margin: 5px auto;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        background-color: white;
        }

        @media screen and (max-width: 599px) {
        .hamburger {
            display: block;
        }

        .hamburger.active .bar:nth-child(2) {
            opacity: 0;
        }

        .hamburger.active .bar:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }

        .hamburger.active .bar:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }

        .nav-menu {
            position: absolute;
            left: -100%;
            top: 70px;
            gap: 0;
            flex-direction: column;
            background: rgba(23, 24, 22, 0.8);
            backdrop-filter: blur(5px);
            width: 100%;
            text-align: center;
            transition: 0.3s;
            z-index: 1;
        }

        .nav-item {
            margin: 16px 0;
            min-width: 44px;
            min-height: 44px;
        }

        .nav-item a {
            font-size: large;
            min-width: 44px;
            min-height: 44px;
        }

        .nav-menu.active {
            left: 0;
        }
        }
      </style>
      
      <nav id="drawer" class="navbar">
        <h1 class="logo">Resto<span>Folio</span></h1>
        <button class="hamburger" aria-label="Menu Toggle">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
        <ul class="nav-menu">
          <li class="nav-item"><a href="/">Home</a></li>
          <li class="nav-item"><a href="#/favorite">Favorite</a></li>
          <li class="nav-item">
            <a href="https://www.linkedin.com/in/muhfiz" target="_blank" rel="noopener"
              >About Us</a
            >
          </li>
        </ul>
      </nav>
    `;

    const hamburger = this.shadowDOM.querySelector('.hamburger');
    const navMenu = this.shadowDOM.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }
}

customElements.define('nav-bar', NavBar);
