import React, {Component} from 'react';

class SimonSquare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.click = this.click.bind(this);
  }

  click() {
    // Set clicked to true and set timer to revert it after 0.5s
    this.setState({clicked: true});
    setTimeout(this.setState({clicked: false}), 500);

    // Pass the color of this square up to the game component
    // this.props.clicked(this.props.color);
  }

  render() {
    const { color } = this.props;
    const {clicked} = this.state;
    const backgroundStyle = {background: color || "white"};

    return (
      <div className="simon-square-area">
        <div
          className={`simon-square ${clicked ? 'active' : ''}`}
          style={backgroundStyle}
          onClick={() => this.click()}
        >
        </div>
      </div>
    )
  }
}

export default SimonSquare;