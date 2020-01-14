import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Show_Question extends Component {
  render() {
    console.log(this.props);
    const id = this.props.match.params.id;

    return (
      <div>
        <h1>{this.props.questions[id].question.replace(/&quot;/gi, "")}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questions
  };
};

export default connect(mapStateToProps, null)(withRouter(Show_Question));
