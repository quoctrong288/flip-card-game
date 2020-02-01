import React, { Component } from 'react';
import Card from './components/Card';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);

      this.level = 1;
      this.state = {
          numbers: []
      }

      this.handleTileClick = this.handleTileClick.bind(this);
  }

  handleTileClick(number) {
      console.log("number = " + number);
  }

  componentDidMount() {
      this.setState({numbers: [1,2,3,4,5,6,7,8,9]})
  }

  newGame() {
      console.log("start new game");
      this.level++;
      //let gameBoard = document.getElementsByClassName("game-board");
      //console.log("check gameboard: " + JSON.stringify(gameBoard));
      //gameBoard.width = "396px";
  }

  render() {
      return (
          <div>
              <div>
                  <button onClick={() => this.newGame()}>
                      New Game
                  </button>
              </div>
              <div className="game-board">
              {
                  this.state.numbers.map((number, index) => (
                      <Card 
                          key={index} 
                          number={number} 
                          onClickHandle={this.handleTileClick}
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

export default App;
