// ==================================================
// SuggestionItem
// ==================================================

import React, { PropTypes } from 'react';
import Radium from 'radium';
import em from 'to-em';

const style = {
  padding: em('8 16'),
  listStyle: 'none',
  cursor: 'pointer',
  background: '#fff',
  ':hover': {
    background: '#fbfbfb',
  },
};

const SuggestionItem = ({ suggestion, onClick }) => (
  <li
    id="SuggestionItem"
    style={style}
    onMouseDown={onClick}
  >{suggestion}</li>
);

SuggestionItem.propTypes = {
  suggestion: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,

};

export default Radium(SuggestionItem);
