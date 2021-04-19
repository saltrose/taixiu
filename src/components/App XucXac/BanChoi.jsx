import React, { Component } from "react";
import XucXac from "./XucXac";
export default class BanChoi extends Component {
  renderDanhSachXucXac = () => {
    const { xucXacs } = this.props;
    return xucXacs.map((item) => {
      return <XucXac item={item} />;
    });
  };
  handleChoiceTaiOrXiu = (taiOrXiu) => {
    // console.log(taiOrXiu);
    const { handleTaiorXiu } = this.props;
    handleTaiorXiu(taiOrXiu);
  };
  render() {
    return (
      <div className="row text-center">
        <div className="col-4">
          <button
            onClick={() => this.handleChoiceTaiOrXiu(true)}
            className="bg-danger display-4 p-5 text-light"
          >
            TÀI{" "}
          </button>
        </div>
        <div className="col-4">
          <div className="d-flex justify-content-center">
            {this.renderDanhSachXucXac()}
          </div>
        </div>
        <div className="col-4">
          <button
            onClick={() => this.handleChoiceTaiOrXiu(false)}
            className="bg-dark display-4 p-5 text-light"
          >
            XỈU{" "}
          </button>
        </div>
      </div>
    );
  }
}
