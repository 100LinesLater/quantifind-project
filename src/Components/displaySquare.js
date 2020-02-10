import React, {Component} from 'react';

class DisplaySquare extends Component {
  constructor(props){
    super(props);
    this.interval = null;
    this.state = {
      counter: 0,
      finishedSequence: false,
    };
  }

  // When it receives a new answer array, displays each color for 1 second.
  componentDidUpdate(prevProps) {
    if (JSON.stringify(prevProps.answer) !== JSON.stringify(this.props.answer)) {
      this.setState({finishedSequence: false});

      this.interval = setInterval(() => {
        this.setState({counter: this.state.counter + 1});
        
        if (this.state.counter === this.props.level * 2) {
          this.setState({counter: 0});
          this.setState({finishedSequence: true});
          clearInterval(this.interval);
        }
      }, 1000);
    }
  }

  render() {
    const {answer} = this.props;
    const {counter, finishedSequence} = this.state;

    return (
      <div className="display-square-area">
        <div 
          className="display-square"
          style={{
            background: `${!finishedSequence ?
              (counter % 2 === 0 ?
                answer[Math.floor(counter / 2)] :
                'white') :
              'white'}`
          }}
        >
        </div>
      </div>
    )
  }
}

export default DisplaySquare;