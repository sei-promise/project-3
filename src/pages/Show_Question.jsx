import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Answers from "../Answers";
import { Button } from "reactstrap";

class Show_Question extends Component {
  state = {
    answers: [],
    id: 0,
    correct_answer: ""
  };

  shuffle = arr => {
    console.log(arr[arr.length - 1]);
    for (let i = 0; i < arr.length; i++) {
      let j = Math.floor(Math.random() * arr.length);
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  };

  componentDidMount() {
    const { correct_answer, incorrect_answers } = this.props.questions[
      this.state.id
    ];
    console.log(correct_answer, incorrect_answers);
    this.setState(({ ...copyState }) => {
      copyState.answers = this.shuffle(
        incorrect_answers.concat(correct_answer)
      );
      copyState.correct_answer = correct_answer;
      return copyState;
    });
  }
  onNextClick = () => {
    if (this.props.answer === this.state.correct_answer) {
      this.props.addScore();
    }
    this.setState(({ ...copyState }) => {
      copyState.id += 1;
      const { correct_answer, incorrect_answers } = this.props.questions[
        copyState.id
      ];
      copyState.answers = this.shuffle(
        incorrect_answers.concat(correct_answer)
      );
      copyState.correct_answer = correct_answer;
      return copyState;
    });
  };
  render() {
    const content = this.state.answers.length ? (
      <div className="flex  flex-column h-100">
        <div className="container h-100 flex flex-column justify-content-center w-500px">
          <div className="bg-white p-5 rounded">
            <h5 className="text-right">Score: {this.props.score}</h5>
            <h4>
              {this.props.questions[this.state.id].question.replace(
                /&quot;/gi,
                ""
              )}
            </h4>
            <br />
            <Answers answers={this.state.answers} />
            <br />
            {/* <button onClick={this.onNextClick}>NEXT</button> */}
            <Button block={true} color="warning" onClick={this.onNextClick}>
              NEXT
            </Button>
          </div>
        </div>
      </div>
    ) : null;
    return content;
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questions,
    answer: state.answer,
    score: state.score
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addScore: () => dispatch({ type: "CORRECT" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Show_Question));
