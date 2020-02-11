import React, { Component } from 'react';

import SimonSquare from './simonSquare';
import DisplaySquare from './displaySquare';
const generateAnswer = require('../HelperFunctions/generateAnswer');

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: [],
      level: 4,
      squareClickCounter: 0,
      resultVerification: true,
      gameEnded: false,
    };
    this.startGame = this.startGame.bind(this);
    this.storeClick = this.storeClick.bind(this);
  }

  startGame() {
    // Reset counters and result verification
    this.setState({squareClickCounter: 0});
    this.setState({counter: 0});
    this.setState({resultVerification: true});

    // Generate randomized answer
    this.setState({answer: generateAnswer(this.state.level)});
  }

  storeClick(color) {
    if (this.state.answer[this.state.squareClickCounter] !== color) {
      this.setState({resultVerification: false});
    }
    this.setState({squareClickCounter: this.state.squareClickCounter + 1});

    // Marks the end of the game
    if (this.state.squareClickCounter === this.state.level - 1) {
      this.setState({ gameEnded: true });
    }
  }

  render() {
    const {
            answer,
            level,
            squareClickCounter,
            resultVerification,
            gameEnded,
          } = this.state;

    return (
      <div className="game-area">
        <div className="game-header">
          <h2>Simon Says</h2>
          <button className="start-button" onClick={() => this.startGame()}>
            Start
          </button>
        </div>

        <div className="upper-game-body">
          <DisplaySquare className="display" answer={answer} level={level} />
          <div className="simon-square-grid">
            <SimonSquare
              className="red"
              color="red"
              rgba="255,0,0,1"
              clicked={this.storeClick}
            />
            <SimonSquare
              className="blue"
              color="blue"
              rgba="0,0,255,1"
              clicked={this.storeClick}
            />
            <SimonSquare
              className="green"
              color="green"
              rgba="0,255,0,1"
              clicked={this.storeClick}
            />
            <SimonSquare
              className="yellow"
              color="yellow"
              rgba="255,255,0,1"
              clicked={this.storeClick}
            />
          </div>
        </div>

        <p className="outcome-text">
          {answer.length === squareClickCounter && gameEnded
            ? resultVerification
              ? 'Congrats!'
              : 'Sorry, try a new game.'
            : ``}
        </p>
      </div>
    );
  }
}

export default Game;