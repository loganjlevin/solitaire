import Deck from './components/Deck.js';

const Solitaire = () => {
  const canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');

  const deckOfCards = Deck().build();
  deckOfCards.shuffle();
  deckOfCards.shuffle();
  deckOfCards.shuffle();

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    deckOfCards.cardArray.forEach((card) => {
      const { img, x, y } = card;
      ctx.drawImage(img, x, y);
    });
    requestAnimationFrame(animate);
  };
  animate();
};

export default Solitaire;
