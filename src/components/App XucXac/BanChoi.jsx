import React, { Component } from "react";
import XucXac from "./XucXac";
import BtnTaiXiu from "./BtnTaiXiu";

export default class BanChoi extends Component {
  renderDanhSachXucXac = () => {
    const { xucXacs } = this.props;
    return xucXacs.map((item) => {
      return <XucXac item={item} />;
    });
  };

  render() {
    const { handleTaiorXiu } = this.props;
    return (
      <div className="row text-center">
        <div className="col-4">
          <BtnTaiXiu handleTaiorXiu={handleTaiorXiu} taiOrXiu={true} />
        </div>
        <div className="col-4">
          <div className="d-flex justify-content-center">
            {this.renderDanhSachXucXac()}
          </div>
        </div>
        <div className="col-4">
          <BtnTaiXiu handleTaiorXiu={handleTaiorXiu} taiOrXiu={false} />
        </div>
      </div>
    );
  }
}
