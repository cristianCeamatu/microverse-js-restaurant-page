import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.scss';

import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';

const state = {
  articles: ['Cheap prices', 'Michelin Stars', 'Takeaway'],
  header: {
    title: 'Welcome the Microverse Restaurant',
    subtitle: 'A place where you will always want to come back',
  },
};

function component(state) {
  const element = document.createElement('div');

  element.appendChild(Home(state));
  // element.appendChild(Menu(state));
  // element.appendChild(Contact(state));
  return element;
}

document.querySelector('#content').appendChild(component(state));


function getElement(string) {
  switch (string) {
    case 'Menu':
      return Menu();
    case 'Contact':
      return Contact();
    default:
      return Home();
  }
}

function switchTab({
  target,
}, state) {
  const element = document.createElement('div');
  element.appendChild(getElement(target.textContent));

  document.querySelector('#content').innerHTML = '';
  document.querySelector('#content').appendChild(element);
  addListeners(state);
}

function addListeners(state) {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(tab => tab.addEventListener('click', (e) => switchTab(e, state)));
}

addListeners(state);