import React, { Component } from "react";
import Dropdown from "../components/Dropdown";
import dropdowns from "../dropdowns";
import { Button } from "reactstrap";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Home extends Component {
  state = {
    amount: 5, // default value for number of questions
    category: "any", // default value for category the api will choose random categories for the questions
    level: "any", // default value for difficulty the api will choose random level for the questions
    type: "multiple", // default value for the type of questions
    dropdowns: dropdowns // dropdowns values to render all of the dropdowns dynamically
  };

  // this will run when the user click on the dropdown and change the value
  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // this will run when the user clicked on Start Button
  handleClick = () => {
    const apiUrl = this.generateUrl();
    this.sendRequest(apiUrl);
  };

  // this will generate the api url based on what user choose from the dropdowns
  generateUrl = () => {
    const { amount, category, level, type } = this.state;

    let apiUrl = `https://opentdb.com/api.php?amount=${amount}&type=${type}`;

    if (category !== "any") {
      apiUrl += `&category=${category}`;
    }

    if (level !== "any") {
      apiUrl += `&Difficulty=${level}`;
    }

    return apiUrl;
  };

  // this will send request to the api and
  // dispatch action called "START"
  // go to -> src/store/reducer to read more about it
  sendRequest = apiUrl => {
    axios
      .get(apiUrl)
      .then(response => {
        const questions = response.data.results;
        this.props.start(questions);
        this.props.history.push("/questions/0"); // go to first index in the questions index
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="home-page">
        {/* looping over the dropdowns */}
        {this.state.dropdowns.map((dropdown, index) => (
          <Dropdown
            key={index}
            name={dropdown.name}
            title={dropdown.title}
            options={dropdown.options}
            onChange={this.onChange}
          />
        ))}
        <br />
        <Button
          outline={true}
          block={true}
          color="primary"
          onClick={this.handleClick}
        >
          Start Game
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    start: questions => dispatch({ type: "START", value: questions })
  };
};

export default connect(null, mapDispatchToProps)(withRouter(Home));
