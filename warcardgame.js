class Card {
  constructor(suit, value, rank) {
    this.value = suit;
    this.suit = value;
    this.rank = rank;
  }
}

class Player {
  constructor(name, hand, score) {
    this.name = name;
    this.hand = hand;
    this.score = score;
  }
}

class Deck {
  constructor() {
    this.deck = [];
  }

  createDeck() {
    const suit = ["Hearts", "Clubs", "Spades", "Diamonds"];
    const value = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];

    for (let i = 0; i < suit.length; i++) {
      for (let x = 0; x < value.length; x++) {
        const card = new Card(x + 1, value[x], suit[i]);
        this.deck.push(card);
      }
    }
  }

  shuffle() {
    const shuffledDeck = this.deck;

    function shuffleCards() {
      for (let i = shuffledDeck.length - 1; i > 0; i--) {
        const k = Math.floor(Math.random() * (i + 1));
        const temp = shuffledDeck[i];
        shuffledDeck[i] = shuffledDeck[k];
        shuffledDeck[k] = temp;
      }
    }
    shuffleCards();
  }
}

class Game {
  constructor() {}

  playGame() {
    const deck = new Deck();
    deck.createDeck();
    deck.shuffle();

    const player1 = new Player("Player 1", deck.deck.splice(0, 26), 0);
    const player2 = new Player("Player 2", deck.deck, 0);

    for (let i = 0; i < player1.hand.length; i++) {
      if (player1.hand[i].value > player2.hand[i].value) {
        player1.score = player1.score + 1;
        console.log("Winner - Player 1!");
        console.log(
          "Player 1 Score - " +
            player1.score +
            " : Player 2 Score - " +
            player2.score
        );
        console.log(`
                `);
      } else if (player2.hand[i].value > player1.hand[i].value) {
        player2.score = player2.score + 1;
        console.log("Winner - Player 2!");
        console.log(
          "Player 1 Score - " +
            player1.score +
            " : Player 2 Score - " +
            player2.score
        );
        console.log(`
                `);
      } else {
        console.log("Tie Game! Players earned 0 points.");
        console.log(
          "Player 1 Score - " +
            player1.score +
            " : Player 2 Score - " +
            player2.score
        );
        console.log(`
                `);
      }
    }

    if (player1.score > player2.score) {
      console.log("Player 1 Wins the Game!");
    } else if (player2.score > player1.score) {
      console.log("Player 2 Wins the Game!");
    } else {
      console.log("It's a Tie! Play another game?");
    }
  }
}

const game = new Game();
game.playGame();

const deck = new Deck();
deck.createDeck();
deck.shuffle();
