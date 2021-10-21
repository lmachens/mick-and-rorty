import { createElement } from './lib/elements';
import './style.css';
import createCharacterCard from './components/characterCard';
import { fetchCharacters } from './lib/characters';

async function renderApp() {
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

  const characters = await fetchCharacters();

  const characterCards = characters.map((character) =>
    createCharacterCard(character)
  );

  const mainElement = createElement(
    'main',
    {
      className: 'main',
    },
    characterCards
  );

  appElement.append(headerElement, mainElement);
}

renderApp();
