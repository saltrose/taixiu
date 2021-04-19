import React, { Component } from "react";

export default class BtnPlay extends Component {
  handlePlay = () => {
    const { handlePlayGame } = this.props;
    handlePlayGame();
  };
  render() {
    return (
      <button
        onClick={this.handlePlay}
        className="btn btn-success"
        style={{ fontSize: 30 }}
      >
        PLAY GAME
      </button>
    );
  }
}
