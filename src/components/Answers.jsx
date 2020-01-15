import React, { Component } from "react";
import { connect } from "react-redux";

class Answers extends Component {
  state = {
    selected: 0
  };

  handleClick = (answer, index) => {
    this.props.clickAnswer(answer);
    // this is not good because we are re-rendering the whole component on each click on the answer
    // TODO: mpve selected to store/reducer
    this.setState({ selected: index });
  };

  render() {
    return this.props.answers.map((answer, index) => {
      return (
        <div
          className={`clickable${
            this.state.selected === index ? " selected" : ""
          }`}
          onClick={() => this.handleClick(answer, index)}
          key={index}
        >
          <strong>{answer}</strong>
          <hr />
        </div>
      );
    });
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clickAnswer: answer => dispatch({ type: "ANSWER", answer: answer })
  };
};
export default connect(null, mapDispatchToProps)(Answers);
