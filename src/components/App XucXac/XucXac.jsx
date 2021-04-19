import React, { Component } from "react";

export default class XucXac extends Component {
  render() {
    const { item } = this.props;
    return <img src={item.imgSrc} width={50} height={50} alt="hinh" />;
  }
}
