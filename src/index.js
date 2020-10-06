import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/style.scss';

import Header from './components/Header';
import Main from './components/Main';

function component() {
  const element = document.createElement('div');
  const articles = ['Cheap prices', 'Michelin Stars', 'Takeaway'];
  const header = {
    title: 'Welcome the Microverse Restaurant',
    subtitle: 'A place where you will always want to come back',
  };

  element.appendChild(Header(header));
  element.appendChild(Main(articles));

  return element;
}

document.querySelector('#content').appendChild(component());