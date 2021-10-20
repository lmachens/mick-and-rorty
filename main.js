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

  const characters = [
    {
      name: 'Pawnshop Clerk',
      imgSrc: 'https://rickandmortyapi.com/api/character/avatar/258.jpeg',
      status: 'Alive',
      race: 'Alien',
      lastKnownLocation: 'Pawn Shop Planet',
      firstSeenIn: 'Raising Gazorpazorp',
    },
    {
      name: 'Pencilvester',
      imgSrc: 'https://rickandmortyapi.com/api/character/avatar/259.jpeg',
      status: 'Dead',
      race: 'Alien',
      lastKnownLocation: 'Earth (Replacement Dimension)',
      firstSeenIn: 'Total Rickall',
    },
    {
      name: 'Dr. Xenon Bloom',
      imgSrc: 'https://rickandmortyapi.com/api/character/avatar/108.jpeg',
      status: 'Dead',
      race: 'Humanoid',
      lastKnownLocation: 'Anatomy Park',
      firstSeenIn: 'Anatomy Park',
    },
  ];

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
