import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button } from "reactstrap";

class Results extends Component {
  handleClick = () => {
    this.props.history.replace("/");
  };

  render() {
    const { score, correct_number, incorrect_number } = this.props;
    return (
      <div className="flex  flex-column h-100">
        <div className="container h-100 flex flex-column justify-content-center w-500px">
          <div className="bg-white p-5 rounded">
            <h1>Results</h1>
            <hr />

            <h3>Score: +{score} </h3>
            <h4 className="green">
              Correct Questions Number: {correct_number}{" "}
            </h4>
            <h4 className="red">
              Incorrect Questions Number: {incorrect_number}{" "}
            </h4>

            <br />
            <Button
              onClick={this.handleClick}
              color="primary"
              outline={true}
              block={true}
            >
              Start Again
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    score: state.score,
    correct_number: state.correct_number,
    incorrect_number: state.incorrect_number
  };
};

export default connect(mapStateToProps, null)(withRouter(Results));
