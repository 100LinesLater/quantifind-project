import React, {Component} from 'react';

class SimonSquare extends Component {
  constructor(props) {
    super(props);
    this.interval = null;
    this.state = {
      backgroundStyle: {background: this.props.color || "white"},
      boxShadowCounter: 0,
    };
    this.click = this.click.bind(this);
  }

  componentDidUpdate() {
    // Remove box shadow after short interval
    if (this.state.backgroundStyle['box-shadow']) {
      const oldBackgroundStyle = { background: this.props.color || "white" };
      this.interval = setInterval(() => {
        if (this.state.boxShadowCounter === 1) clearInterval(this.interval);
        this.setState({boxShadowCounter: this.state.boxShadowCounter + 1});
        this.setState({backgroundStyle: oldBackgroundStyle});
      }, 200);
    }
  }

  click() {
    // Create box shadow to indicate to user that they clicked the square
    const newBackgroundStyle = Object.assign({}, this.state.backgroundStyle);
    
    newBackgroundStyle['box-shadow'] = `0px 0px 24px 10px rgba(${this.props.rgba})`;
    this.setState({backgroundStyle: newBackgroundStyle});

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