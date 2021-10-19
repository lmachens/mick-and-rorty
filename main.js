import { createElement } from './lib/elements';
import './style.css';
import createCharacterCard from './components/characterCard';

function renderApp() {
  const appElement = document.querySelector('#app');

  const headerElement = createElement(
    'header',
    {
      className: 'header',
    },
    [
      createElement('h1', {
        textContent: 'Mick and Rorty',
      }),
    ]
  );

  const mainElement = createElement(
    'main',
    {
      className: 'main',
    },
    [createCharacterCard()]
  );

  appElement.append(headerElement, mainElement);
}

renderApp();
