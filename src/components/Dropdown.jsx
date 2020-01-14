import React, { Component } from "react";
// Input and Label are components from reactstrap library
import { Input, Label } from "reactstrap";

class Dropdown extends Component {
  render() {
    const { name, title, options, onChange } = this.props;
    return (
      <div className="dropdown">
        <Label for={name}>{title}</Label>
        <Input type="select" name={name} id={name} onChange={onChange}>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </Input>
      </div>
    );
  }
}

export default Dropdown;
