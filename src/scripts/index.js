import 'regenerator-runtime'; /* for async await transpile */
import './component/nav-bar';
import '../styles/main.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';
import swRegister from './utils/sw-register';

document.addEventListener('DOMContentLoaded', () => {
  const app = new App({
    button: document.querySelector('.hamburger'),
    drawer: document.querySelector('#drawer'),
    navMenu: document.querySelector('.nav-menu'),
    content: document.querySelector('#main-content'),
  });

  window.addEventListener('hashchange', () => {
    app.renderPage();
  });

  window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
  });
});
