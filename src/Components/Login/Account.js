import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class IndexPages extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <div
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
    );
  }
}
