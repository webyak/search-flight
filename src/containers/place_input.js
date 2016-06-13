// ==================================================
// PlaceInput
// ==================================================

import React, { Component, PropTypes } from 'react';
import { getCitiesAndCountries } from '../data/';
import InputSection from '../components/input_section.js';
import TextInput from '../components/text_input.js';
import SuggestionList from '../components/suggestion_list.js';

class PlaceInput extends Component {
  state = {
    airportLocations: getCitiesAndCountries(),
    suggestionsVisible: false,
  }
  getSuggestions = () => {
    const { airportLocations } = this.state;
    let { place } = this.props;
    place = place.toLowerCase().trim();

    const suggestions = [];
    for (const location of airportLocations) {
      const i = location.toLowerCase().indexOf(place);

      if (i !== -1) {
        // make sure the locations that begin with the query come first.
        if (i === 0) suggestions.unshift(location);
        else suggestions.push(location);
      }
    }

    // max 5 suggestions.
    return suggestions.slice(0, 6);
  }
  showSuggestions = () => {
    this.setState({ suggestionsVisible: true });
  }
  hideSuggestions = () => {
    this.setState({ suggestionsVisible: false });
  }
  render() {
    const { name, zIndex, place, setPlace } = this.props;
    const { suggestionsVisible } = this.state;

    return (
      <InputSection zIndex={zIndex} expanded={!!place} labelText={name}>
        <TextInput
          value={place}
          placeholder={name}
          onChange={(p) => setPlace(p)}
          onFocus={this.showSuggestions}
          onBlur={this.hideSuggestions}
        />
        {suggestionsVisible &&
          <SuggestionList
            suggestions={this.getSuggestions()}
            onSuggestionClick={(p) => setPlace(p)}
          />
        }
      </InputSection>
    );
  }
}

PlaceInput.propTypes = {
  name: PropTypes.oneOf(['From', 'To']),
  zIndex: PropTypes.number.isRequired,
  place: PropTypes.string.isRequired,
  setPlace: PropTypes.func.isRequired,
};

export default PlaceInput;
