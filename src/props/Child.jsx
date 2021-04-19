import React, { Component } from "react";

class Child extends Component {
  render() {
    return (
      <div>
        <h1>Child</h1>
        {/* nhận lại props */}
        <p> name : {this.props.tenAnhHung}</p>
        <p> say : </p>
        {this.props.children}
      </div>
    );
  }
}

export default Child;
