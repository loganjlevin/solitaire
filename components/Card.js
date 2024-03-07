const Card = () => {
  return {
    img: undefined,
    cardFront: undefined,
    cardBack: '../images/card_back.png',
    rank: undefined,
    suit: undefined,
    color: undefined,
    x: undefined,
    y: undefined,
    width: undefined,
    height: undefined,
    build: function (rank, suit, x, y) {
      this.rank = rank;
      this.suit = suit;
      this.img = new Image();
      this.x = x;
      this.y = y;
      this.color =
        this.suit === 'clubs' || this.suit === 'spades' ? 'black' : 'red';
      this.cardFront = `../images/${rank}_${suit}.png`;
      this.width = 100;
      this.height = 150;
      this.reveal(true);
      return this;
    },
    reveal: function (boolean) {
      this.img.src = boolean ? this.cardFront : this.cardBack;
    },
  };
};

export default Card;
