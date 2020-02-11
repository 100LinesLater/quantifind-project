import React, {Component} from 'react';

class SimonSquare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundStyle: {background: this.props.color || "white"},
    };
    this.click = this.click.bind(this);
  }

  click() {
    // Set clicked to true and set timer to revert it after 0.5s
    const newBackgroundStyle = Object.assign({}, this.state.backgroundStyle);
    const oldBackgroundStyle = Object.assign({}, this.state.backgroundStyle);
    
    newBackgroundStyle['box-shadow'] = `0px 0px 24px 10px rgba(${this.props.rgba})`;
    this.setState({backgroundStyle: newBackgroundStyle});
    
    setTimeout(this.setState({backgroundStyle: oldBackgroundStyle}), 5000);

    // Pass the color of this square up to the game component
    this.props.clicked(this.props.color);
  }

  render() {
    const {backgroundStyle} = this.state;
    
    return (
      <div className="simon-square-area">
        <div
          className="simon-square"
          style={backgroundStyle}
          onClick={() => this.click()}
        >
        </div>
      </div>
    )
  }
}

export default SimonSquare;