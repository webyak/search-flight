// ==================================================
// Datepicker Select
// ==================================================

import React, { PropTypes } from 'react';
import Radium, { Style } from 'radium';
import em from 'to-em';

const wrapStyle = {
  position: 'relative',
  display: 'inline-block',
  paddingRight: '0.5em',
  marginRight: '0.43em',
};
const arrowStyle = {
  position: 'absolute',
  top: '0.68em',
  right: 0,
  width: 0,
  pointerEvents: 'none',
  borderTop: `${em(4)} solid #000`,
  borderRight: `${em(4)} solid transparent`,
  borderBottom: `${em(4)} solid transparent`,
  borderLeft: `${em(4)} solid transparent`,
};
const selectStyle = {
  padding: '0 .25em',
  fontSize: em(15),
  background: 'none',
  border: 0,
  outline: 'none',
  appearance: 'none',
};

const id = 'DatepickerSelect';
const Select = ({ value, options, onChange }) => (
  <div id={id} style={wrapStyle}>
    <Style
      scopeSelector={`#${id}::-ms-expand`}
      rules={{ display: 'none' }}
    />
    <div style={arrowStyle}></div>
    <select
      style={selectStyle}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option, i) =>
        <option key={i} value={option.value}>{option.label}</option>
      )}
    </select>
  </div>
);

Select.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Radium(Select);
