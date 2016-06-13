// ==================================================
// RadioButton
// ==================================================

import React, { PropTypes } from 'react';
import Radium from 'radium';
import color from 'color';
import { Motion, spring } from 'react-motion';
import em from 'to-em';
import { DARK_GRAY } from '../styling/colors.js';

const buttonStyle = {
  display: 'inline-block',
  paddingRight: em(12),
  marginBottom: em(24),
};
const boxStyle = {
  display: 'inline-block',
  width: em(20),
  height: em(20),
  marginRight: em(8),
  background: '#f2f2f2',
  borderRadius: em(8),
  boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.03)',
};
const dotStyle = {
  width: '100%',
  height: '100%',
  background: color(DARK_GRAY).clearer(0.1).rgbString(),
  borderRadius: '50%',
  // transform: scale3d(0, 0, 1);
};
const labelTextStyle = {
  position: 'relative',
  top: '-0.3em',
  fontSize: em(14),
  fontWeight: 700,
};

const RadioButton = ({ value, checked, onChange, labelText }) => (
  <div id="RadioButton" style={buttonStyle}>
    <input
      id={value}
      style={{ display: 'none' }}
      type="radio"
      value={value}
      checked={checked}
      onChange={onChange}
    />
    <label htmlFor={value}>
      <div style={boxStyle}>
        <Motion
          style={{
            opacity: spring(checked ? 1 : 0, [300, 24]),
            size: spring(checked ? 0.42 : 0, [300, 17]),
          }}
        >
          {({ opacity, size }) =>
            <div
              style={{
                ...dotStyle,
                opacity,
                transform: `scale3d(${size}, ${size}, 1)`,
              }}
            ></div>
          }
        </Motion>
      </div>
      <span style={labelTextStyle}>{labelText}</span>
    </label>
  </div>
);

RadioButton.propTypes = {
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  labelText: PropTypes.string.isRequired,
};

export default Radium(RadioButton);
