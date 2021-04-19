import React, { Component } from "react";

class DemoDataBinding extends Component {
  ten = "ronaldo";
  soAo = 7;

  renderInfo = () => {
    return (
      <div>
        <p>tên : {this.ten}</p>
        <p>số áo : {this.soAo}</p>
      </div>
    );
  };

  render() {
    const hinhAnh = "https://ggstorage.oxii.vn/images/oxii-2019-3-29/728x436/cristiano-ronaldo-pics_1564_1064_949.jpg";
    return (
      <div>
        <h1>Demo Data Binding</h1>
        {this.renderInfo()}
        <img src={hinhAnh} alt="" />
      </div>
    );
  }
}

export default DemoDataBinding;
