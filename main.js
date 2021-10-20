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
    [
      createCharacterCard({
        name: 'Pawnshop Clerk',
        imgSrc: 'https://rickandmortyapi.com/api/character/avatar/258.jpeg',
        status: 'Alive',
        race: 'Alien',
        lastKnownLocation: 'Pawn Shop Planet',
        firstSeenIn: 'Raising Gazorpazorp',
      }),
      createCharacterCard({
        name: 'Pencilvester',
        imgSrc: 'https://rickandmortyapi.com/api/character/avatar/259.jpeg',
        status: 'Dead',
        race: 'Alien',
        lastKnownLocation: 'Earth (Replacement Dimension)',
        firstSeenIn: 'Total Rickall',
      }),
    ]
  );

  appElement.append(headerElement, mainElement);
}

renderApp();
