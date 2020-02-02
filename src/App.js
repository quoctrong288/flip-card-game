import React, { Component } from 'react';
import Card from './components/Card';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);

      this.level = 1;
      this.firstCard = null;
      this.secondCard = null;
      this.flipping = null;
      this.state = {
          numbers: []
      }

      this.handleCardClick = this.handleCardClick.bind(this);
  }

  handleCardClick(card) {
    let first = this.firstCard;
    let second = this.secondCard;

    if (first != null && second != null) {
      return false;
    }

    console.log("number = " + card.number);
    if (first == null) {
      this.firstCard = card;
      console.log("first card = " + this.firstCard.number);
    }
    else if (second == null) {
      this.secondCard = card;
      if (this.firstCard.number === this.secondCard.number) {
        console.log("OK Accept");
        this.firstCard = null;
        this.secondCard = null;
      }
      else {
        console.log("Not accept");
        this.flipping = setTimeout(() => {
          if (this.firstCard) this.firstCard.setState({isFlipped: false});
          if (this.secondCard) this.secondCard.setState({isFlipped: false});
          this.firstCard = null;
          this.secondCard = null;
        }, 1000);
      }
    }
    return true;
  }

  componentDidMount() {
    this.setState({numbers: shuffle(8)});
  }

  selectMode(mode) {
    let numCards = 8;
    switch (mode) {
      case GAME_MODE.EASY:
        numCards = 8;
        break;
      case GAME_MODE.NORMAL:
        numCards = 12;
        break;
      case GAME_MODE.HARD:
        numCards = 16;
        break;
      case GAME_MODE.INSANE:
        numCards = 24;
        break;
      default:
        numCards = 8;
    }

    clearTimeout(this.flipping);
    if (this.firstCard) this.firstCard.setState({isFlipped: false});
    if (this.secondCard) this.secondCard.setState({isFlipped: false});
    this.firstCard = null;
    this.secondCard = null;
    this.setState({numbers: shuffle(numCards)});
  }

  render() {
    var numCol = this.state.numbers.length === 24 ? 6 : 4;
    var width = numCol * 128;
    const divStyle = { width: width };

    return (
      <div>
        <div>
          <button onClick={() => this.selectMode(GAME_MODE.EASY)}> EASY </button>
          <button onClick={() => this.selectMode(GAME_MODE.NORMAL)}> NORMAL </button>
          <button onClick={() => this.selectMode(GAME_MODE.HARD)}> HARD </button>
          <button onClick={() => this.selectMode(GAME_MODE.INSANE)}> INSANE </button>
        </div>
        <div className="game-board" style={divStyle}>
        {
          this.state.numbers.map((number, index) => (
            <Card 
              key={index}
              number={number}
              onClickHandle={this.handleCardClick}
            />
          ))
        }
        </div>
      </div>
    );
  }
}

let GAME_MODE = {
  EASY: 1,
  NORMAL: 2,
  HARD: 3,
  INSANE: 4
}

function shuffle(length) {
  if (length % 2) { length--; } // length must be even number

  let array = [];
  for (let i = 0; i < length; ++i) {
    let val = i + 1;
    if (val > length/2) {
      val -= length/2;
    }
    array[i] = val;
  }

  let curIndex = array.length, tempValue, randIndex;

  while (0 !== curIndex) {
    randIndex = Math.floor(Math.random() * curIndex);
    curIndex -= 1;

    tempValue = array[curIndex];
    array[curIndex] = array[randIndex];
    array[randIndex] = tempValue;
  }

  return array;
}

export default App;
