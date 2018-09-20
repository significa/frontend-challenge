import React, { Component } from "react";
import { connect } from "react-redux";
import debounce from "lodash.debounce";

import { fetchCatalogue } from "../../actions";
import Input, { SearchBarContainer, Icon } from "../../components/UI/Inputs";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: "" };
    this.startFetch = debounce(this.startFetch, 300);
  }

  onInputChange = e => {
    const { value } = e.target;
    this.setState({ searchTerm: value }, this.startFetch);
  };

  startFetch = () => {
    const { searchTerm } = this.state;
    this.props.fetchCatalogue(searchTerm);
  };

  render() {
    const { searchTerm } = this.state;

    return (
      <SearchBarContainer>
        <Icon />
        <Input
          placeholder="Search movies..."
          value={searchTerm}
          onChange={this.onInputChange}
        />
      </SearchBarContainer>
    );
  }
}

function mapStateToProps({ movieCatalogue }) {
  return { movieCatalogue };
}

export default connect(
  mapStateToProps,
  { fetchCatalogue }
)(SearchBar);
