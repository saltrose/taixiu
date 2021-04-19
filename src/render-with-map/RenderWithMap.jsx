import React, { Component } from "react";

class RenderWithMap extends Component {
  danhSachTuong = [
    {
      tenTuong: "Yasuo",
      cauNoi: "hasagi",
    },
    {
      tenTuong: "Garen",
      cauNoi: "demacia",
    },
    {
      tenTuong: "Zigg",
      cauNoi: "filaden",
    },
  ];

  renderHeroList = () => {
    return this.danhSachTuong.map((tuong, index) => {
      return (
        <li key={index}>
          {tuong.tenTuong} - {tuong.cauNoi}
        </li>
      );
    });
  };

  // renderHeroList = () =>
  //   this.danhSachTuong.map((tuong) => (
  //     <li>
  //       {tuong.tenTuong} - {tuong.cauNoi}
  //     </li>
  //   ));

  render() {
    return (
      <div>
        <h1>Danh Sách Tướng</h1>
        <ul>{this.renderHeroList()}</ul>
      </div>
    );
  }
}

export default RenderWithMap;
