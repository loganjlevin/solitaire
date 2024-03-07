import Card from './Card.js';

const Deck = () => {
  const ranks = [
    'ace',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'jack',
    'queen',
    'king',
  ];
  const suits = ['clubs', 'diamonds', 'hearts', 'spades'];

  return {
    cardArray: [],
    build: function () {
      suits.forEach((suit, i) => {
        this.cardArray = [
          ...this.cardArray,
          ...ranks.map((rank, j) => {
            return Card().build(rank, suit, j * 50, i * 100);
          }),
        ];
      });
      return this;
    },
    shuffle: function () {
      let currentIndex = this.cardArray.length,
        randomIndex;
      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [this.cardArray[currentIndex].x, this.cardArray[randomIndex].x] = [
          this.cardArray[randomIndex].x,
          this.cardArray[currentIndex].x,
        ];
        [this.cardArray[currentIndex].y, this.cardArray[randomIndex].y] = [
          this.cardArray[randomIndex].y,
          this.cardArray[currentIndex].y,
        ];
        [this.cardArray[currentIndex], this.cardArray[randomIndex]] = [
          this.cardArray[randomIndex],
          this.cardArray[currentIndex],
        ];
      }
    },
  };
};
export default Deck;
