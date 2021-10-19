import { createElement } from '../lib/elements';
import styles from './characterCard.module.css';

export default function createCharacterCard() {
  const characterCard = createElement('article', {
    className: styles.card,
    textContent: 'Rick',
  });
  return characterCard;
}
