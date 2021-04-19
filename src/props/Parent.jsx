import React, { Component } from "react";
import Child from "./Child";
import ChildFunction from "./ChildFunction";

class Parent extends Component {
  state = {
    hero: {
      name: "Iron Man",
      say: "I love U 3000",
    },
  };
  render() {
    return (
      <div>
        <h1>Parent</h1>
        {/* truyền props */}
        <Child tenAnhHung={this.state.hero.name}>
          <img src="https://cdn.chanhtuoi.com/uploads/2020/05/w400/icon-facebook-67.jpg.webp" alt="" />
        </Child>
        <ChildFunction cauNoi={this.state.hero.say}>
          <img src="https://cdn.chanhtuoi.com/uploads/2020/05/w400/icon-facebook-67.jpg.webp" alt="" />
        </ChildFunction>
      </div>
    );
  }
}

export default Parent;
