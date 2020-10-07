import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.scss';

import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';

function component() {
  const element = document.createElement('div');

  const state = {
    articles: ['Cheap prices', 'Michelin Stars', 'Takeaway'],
    header: {
      title: 'Welcome the Microverse Restaurant',
      subtitle: 'A place where you will always want to come back',
    },
  };

  element.appendChild(Home(state));
  element.appendChild(Menu(state));
  element.appendChild(Contact(state));
  return element;
}

document.querySelector('#content').appendChild(component());