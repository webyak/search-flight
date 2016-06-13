// ==================================================
// TextInput
// ==================================================

import React, { PropTypes } from 'react';
import Radium from 'radium';
import { resetInput } from '../styling/common_styles.js';
import em from 'to-em';

const styles = {
  base: {
    ...resetInput,
    padding: '1.2em 1.1em 1em',
    fontSize: em(17),
    background: '#f2f2f2',
    borderRadius: '1px',
    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.03)',
  },
  clickable: {
    cursor: 'pointer',
  },
};

const TextInput = ({
    value,
    placeholder,
    onChange,
    onFocus,
    onBlur,
    onClick,
    readOnly,
}) => (
  <input
    id="TextInput"
    style={[
      styles.base,
      !!onClick && styles.clickable,
    ]}
    type="text"
    value={value}
    placeholder={placeholder}
    onChange={e => onChange(e.target.value)}
    onFocus={onFocus}
    onBlur={onBlur}
    onClick={onClick}
    readOnly={readOnly}
    autoComplete="off"
  />
);

TextInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  readOnly: PropTypes.bool,
};

export default Radium(TextInput);
