import './assets/style.scss';

import _ from 'lodash';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack34'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
