import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Answers from "../components/Answers";
import { Button } from "reactstrap";

class Show_Question extends Component {
  state = {
    answers: [], // collection of answers both correct & incorrects
    id: 0, // start from the first question
    correct_answer: "" // this will hold the correct_answer from the question object
  };

  // this function will randomize the whole array
  shuffle = arr => {
    for (let i = 0; i < arr.length; i++) {
      const j = Math.floor(Math.random() * arr.length);
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  };

  // this will get the current question based on this.state.id
  componentDidMount() {
    if (this.props.questions.length === 0) {
      this.props.history.push("/");
      return false;
    }

    // get correct_answer and incorrect_answer from the question object
    const { correct_answer, incorrect_answers } = this.props.questions[
      this.state.id
    ];
    // print the two variables
    // console.log(correct_answer, incorrect_answers);
    // update the state
    this.setState(({ ...copyState }) => {
      // 1. concat the correct_answer with incorrect_answers
      const answers = incorrect_answers.concat(correct_answer);
      // 2. randomize the answers array at the first time
      // and set the answers to the new answers array
      copyState.answers = this.shuffle(answers);
      // 3. set the correct_answer in the state
      copyState.correct_answer = correct_answer;
      // 4. return the new state
      return copyState;
    });
  }

  // this will run when the user clicks on the next button
  onNextClick = () => {
    // 1. check if user answer is equal to the correct_answer
    if (this.props.answer === this.state.correct_answer) {
      this.props.addScore(); // if so then add score
    } else {
      this.props.incorrect_number();
    }

    // TODO: check if id greater than or equal to questions.length - 1 => go to /results page
    if (this.state.id >= this.props.questions.length - 1) {
      this.props.history.push("/results");
      return true;
    }

    // 2. update the state
    this.setState(({ ...copyState }) => {
      // 1. add one to the id
      copyState.id += 1;

      // 2. get correct_answer and incorrect_answer from the second or the third question object
      // question object will come based on the state.id
      const { correct_answer, incorrect_answers } = this.props.questions[
        copyState.id
      ];

      // 3. concat the correct_answer with incorrect_answers
      const answers = incorrect_answers.concat(correct_answer);

      // 4. randomize the answers array again
      // and change the answers to the new answers array
      copyState.answers = this.shuffle(answers);

      // 5. change the correct_answer in the state
      copyState.correct_answer = correct_answer;

      // 6. return the new state
      return copyState;
    });
  };
  render() {
    // check if there's answers
    // true => render jsx
    // false => return null
    const content = this.state.answers.length ? (
      <div className="flex  flex-column h-100">
        <div className="container h-100 flex flex-column justify-content-center w-500px">
          <div className="bg-white p-5 rounded">
            <h5 className="text-right">Score: +{this.props.score}</h5>
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

// get the questions, answer, score from redux
const mapStateToProps = state => {
  return {
    questions: state.questions,
    answer: state.answer,
    score: state.score
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addScore: () => dispatch({ type: "CORRECT" }),
    incorrect_number: () => dispatch({ type: "INCORRECT_NUMBER" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Show_Question));
