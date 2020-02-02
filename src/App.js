import React, { Component } from 'react';
import Card from './components/Card';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);

      this.level = 1;
      this.firstCard = null;
      this.secondCard = null;
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
        setTimeout(() => {
          this.firstCard.setState({isFlipped: false});
          this.secondCard.setState({isFlipped: false});
          this.firstCard = null;
          this.secondCard = null;
        }, 1000);
      }
    }
    return true;
  }

  componentDidMount() {
    this.setState({numbers: shuffle(9)});
  }

  newGame() {
    console.log("start new game");
    this.level++;
    this.setState({numbers: shuffle(16)});
  }

  render() {
    var numCol = Math.sqrt(this.state.numbers.length);
    var width = numCol * 128;
    const divStyle = { width: width };

    return (
      <div>
        <div>
          <button onClick={() => this.newGame()}>
            New Game
          </button>
        </div>
        <div className="game-board" style={divStyle}>
        {
          this.state.numbers.map((number, index) => (
            <Card 
              key={index} 
              number={number} 
              onClickHandle={this.handleCardClick}
              // discovered={!this.state.unDiscovered.includes(number)} 
              // guessed={this.state.guess1 === number || this.state.guess2 === number}
            />
          ))
        }
        </div>
      </div>
    );
  }
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
