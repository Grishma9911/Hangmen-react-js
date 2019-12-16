import React, { Component } from 'react';
import axios from 'axios';

import gameFactory from './game-state-factory';
import { GAME_WON, GAME_STARTED, GAME_OVER } from './game-states';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import Game from './Game';

import './App.css';

const SERVER_URL = "http://localhost:3001"

class App extends Component {
  constructor(props) {
    super(props);

    this.onLetterClick = this.onLetterClick.bind(this);
    this.onRestartClick = this.onRestartClick.bind(this);

    // Random word and new game state data
    this.state = gameFactory.newGame();
  }

  render() {
    const gameProps = {
      onLetterClick: this.onLetterClick,
      onRestartClick: this.onRestartClick,
      ...this.state
    };

    return (
      <div className="App">
        <AppHeader />
        <Game {...gameProps} />
        <AppFooter />
      </div>
    );
  }

  onLetterClick(letter, e) {
    e.preventDefault();
    const firstIndex = this.state.word.indexOf(letter)
    if (firstIndex !== -1) {
      const letters = this.state.letters.map(letterObject => {
        if (letterObject.value === letter) {
          return Object.assign({}, letterObject, {
            guessed: true,
          });
        }

        return letterObject;
      });

      // Check if the game has been won
      const gameWon = letters.reduce((winState, currentObject) => {
        return winState && currentObject.guessed;
      }, true);

      if(gameWon){
        this.updateStatusToDB(1);
      }

      console.log("Inside App.js file:::::::::::",gameWon)

      this.setState((prevState, props) => {
        return {
          letters,
          pastGuesses: [letter].concat(prevState.pastGuesses),
          gameState: gameWon ? GAME_WON : GAME_STARTED,
        };
      });
    } else {
      this.setState((prevState, props) => {
        // Update number of attempts left
        const guessesLeft = prevState.guesses - 1;
        let stateUpdate = {
          guesses: guessesLeft,
        };

        // Kill the game if needed
        if (guessesLeft === 0) {
          stateUpdate.gameState = GAME_OVER;
          this.updateStatusToDB(0);
        }

        // Update the letters already tried
        stateUpdate.pastGuesses = [letter].concat(prevState.pastGuesses);

        return stateUpdate;
      });
    }
  }

  updateStatusToDB(result){
    axios.post(`${SERVER_URL}/api/results`, { player:"Greeshma", result})
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }

  onRestartClick(e) {
    e.preventDefault();

    this.setState(gameFactory.newGame());
  }
}

export default App;
