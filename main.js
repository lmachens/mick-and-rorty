import { createElement } from './lib/elements';
import './style.css';
import createCharacterCard from './components/characterCard';
import createSearchBar from './components/searchBar';
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

  async function handleSubmit(searchQuery) {
    console.log(searchQuery);
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${searchQuery}`
    );
    const body = await response.json();
    const characters = body.results;
    const characterElements = characters.map((character) =>
      createCharacterCard(character)
    );
    console.log(characterElements);
    mainElement.innerHTML = '';
    mainElement.append(...characterElements);
  }

  const searchBar = createSearchBar(handleSubmit);

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

  appElement.append(headerElement, searchBar, mainElement);
}

renderApp();
