import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/style.scss';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function component() {
  const element = document.createElement('div');

  const state = {
    articles: ['Cheap prices', 'Michelin Stars', 'Takeaway'],
    header: {
      title: 'Welcome the Microverse Restaurant',
      subtitle: 'A place where you will always want to come back',
    },
  };

  element.appendChild(Header(state.header));
  element.appendChild(Main(state.articles));
  element.appendChild(Footer());

  return element;
}

document.querySelector('#content').appendChild(component());