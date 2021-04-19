import React, { Component } from "react";

export default class ButtonColor extends Component {
  render() {
    return (
      <button
        className="btn"
        onClick={() => this.props.handleChoiceColor(this.props.btnColor.name)}
      >
        <img
          src={this.props.btnColor.imgSrc}
          alt="hinh"
          style={{ width: 50 }}
        />
      </button>
    );
  }
}
