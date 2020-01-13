import React, { Component } from "react";
import { connect } from "react-redux";

class Dropdown extends Component {
  state = {};

  render() {
    console.log(this.props);

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
    changeAmount: () => dispatch({ type: "CHANGE_AMOUNT", value: 5 })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
