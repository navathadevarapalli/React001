import React, { Component } from "react";
import { ReactDOM } from "react-dom";

class SearchBar extends React.Component {
  state = { searchString: "" };

  render() {
    return (
      <div class="ui segment">
        <form class="ui form">
        <label>Search Images</label>
          <input type="text"></input>
        </form>
      </div>
    );
  }
}
export default SearchBar;
