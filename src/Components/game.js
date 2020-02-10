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
  }

  startGame() {
    // Reset counters and result verification
    this.setState({squareClickCounter: 0});
    this.setState({counter: 0});
    this.setState({resultVerification: true});

    // Generate randomized answer
    this.setState({answer: generateAnswer(this.state.level)});
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
          <button
            className="start-button"
            onClick={() => this.startGame()}>
            <p>Start</p>
            {/* Play Icon */}
          </button>
        </div>

        <div className="upper-game-body">
          <DisplaySquare className="display" answer={answer} level={level} />
          <div className="simon-square-grid">
            <SimonSquare className="red" color="red" />
            <SimonSquare className="blue" color="blue" />
            <SimonSquare className="green" color="green" />
            <SimonSquare className="yellow" color="yellow" />
          </div>
        </div>

        <p className="outcome-text">
          {(answer.length === squareClickCounter && gameEnded)
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