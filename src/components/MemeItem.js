import React, { Component } from "react";
import { connect } from "react-redux";
import { createMeme } from "../actions";

class MemeItem extends Component {
  constructor() {
    super();
    this.state = {
      hovered: false,
    };
  }
  postMeme() {
    const { text0, text1 } = this.props;
    const memeObj = { template_id: this.props.meme.id, text0, text1 };
    this.props.createMeme(memeObj);
  }
  render() {
    return (
      <div
        className="meme-items"
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
        onClick={() => this.postMeme()}
      >
        <img
          className={this.state.hovered ? "meme-image darken-image" : "meme-image"}
          src={this.props.meme.url}
          alt={this.props.meme.name}
        />
        <p className={this.state.hovered ? "meme-name" : "no-name"}>
          {this.props.meme.name}
        </p>
      </div>
    );
  }
}
export default connect(null, { createMeme })(MemeItem);