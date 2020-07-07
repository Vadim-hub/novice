import React from "react";
import "./input-search.scss";

class InputSearch extends React.Component {
  state = {
    label: "",
  };

  onChange = (e) => {
    this.setState({
      label: e.target.value, // перезаписываем наши данные
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onImpt(this.state.label);
    this.setState({
      label: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          id="searchField"
          placeholder="Type here to search..."
          value={this.state.label}
          onChange={this.onChange}
        />
      </form>
    );
  }
}

export default InputSearch;
