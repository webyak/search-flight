// ==================================================
// SuggestionList
// ==================================================

import React, { PropTypes } from 'react';
import Radium from 'radium';
import { resetList } from '../styling/common_styles.js';
import SuggestionItem from './suggestion_item.js';

const listStyle = {
  ...resetList,
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
};

const SuggestionList = ({ suggestions, onSuggestionClick }) => (
  <div id="SuggestionList" style={{ position: 'relative' }}>
    <ul style={listStyle}>
      {suggestions.map((suggestion, i) =>
        <SuggestionItem
          key={i}
          suggestion={suggestion}
          onClick={() => onSuggestionClick(suggestion)}
        />
      )}
    </ul>
  </div>
);

SuggestionList.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onSuggestionClick: PropTypes.func.isRequired,
};

export default Radium(SuggestionList);
