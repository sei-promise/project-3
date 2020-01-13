import React, { Component } from "react";
import { connect } from "react-redux";

class Dropdown extends Component {
  state = {};

  render() {

    return (
      <div>
        <h1>Dropdown</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    amount: state.apiOptions.amount,
    category: state.apiOptions.category,
    level: state.apiOptions.level,
    type: state.apiOptions.type
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeAmount: (value) => dispatch({ type: "CHANGE_AMOUNT", value }),
    changeCategory: (category) => dispatch({ type: "CHANGE_CATEGORY", value: category }),
    changeLevel: (level) => dispatch({ type: "CHANGE_LEVEL", value: level }),
    changeType: (type) => dispatch({ type: "CHANGE_LEVEL", value: type }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
