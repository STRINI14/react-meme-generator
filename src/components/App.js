import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/index.css";
import MemeItem from "./MemeItem";
import {FormGroup, FormLabel, Form,FormControl} from 'react-bootstrap';


class App extends Component {
  constructor() {
    super();
    this.state = {
      memeLimit: 10,
      text0:'',
      text1: '',
    };
  }
  render() {
    return (
      <div>
        <h2 className="meme-header">Welcome to meme creator</h2>
        <h4 className="meme-link"><i>Create A Meme</i></h4>
        <Form inline="true">
        <FormGroup>
            <FormLabel class="top">Top</FormLabel>{" "}
            <FormControl
              type="text"
              onChange={(event) => this.setState({ text0: event.target.value })}
            ></FormControl>
          </FormGroup>{" "}
          <FormGroup>
            <FormLabel class="bottom">Bottom</FormLabel>{" "}
            <FormControl class="bottom-text"
              type="text"
              onChange={(event) => this.setState({ text1: event.target.value })}
            ></FormControl>
          </FormGroup>
        </Form>
        {this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
          return (<MemeItem key={index} meme={meme} text0={this.state.text0} text1={this.state.text1} />
          )
        })}
        <div
          className="meme-button"
          onClick={() => {
            this.setState({ memeLimit: this.state.memeLimit + 10 });
          }}
        >
          Load more memes....
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, null)(App);