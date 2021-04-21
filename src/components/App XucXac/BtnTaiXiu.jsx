import React, { Component } from "react";

export default class BtnTaiXiu extends Component {
  handleChoiceTaiOrXiu = (taiOrXiu) => {
    // console.log(taiOrXiu);
    const { handleTaiorXiu } = this.props;
    handleTaiorXiu(taiOrXiu);
  };
  render() {
    const { taiOrXiu } = this.props;
    return (
      <button
        onClick={() => this.handleChoiceTaiOrXiu(taiOrXiu)}
        className={`${
          taiOrXiu ? "bg-danger" : "bg-dark"
        } display-4 p-5 text-light`}
      >
        {taiOrXiu ? "Tài" : "Xỉu"}
      </button>
    );
  }
}
