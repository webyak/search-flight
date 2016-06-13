// ==================================================
// Datepicker Header
// ==================================================

import React, { PropTypes } from 'react';
import Radium from 'radium';
import em from 'to-em';
import Select from './select.js';

const headerStyle = {
  position: 'relative',
  textAlign: 'center',
};
const buttonStyles = {
  base: {
    position: 'absolute',
    top: 0,
    padding: em('10 8'),
    cursor: 'pointer',
  },
  left: {
    left: 0,
  },
  right: {
    right: 0,
  },
};
const arrowStyles = {
  base: {
    width: 0,
    borderTop: `${em(8)} solid transparent`,
    borderRight: `${em(8)} solid transparent`,
    borderBottom: `${em(8)} solid transparent`,
    borderLeft: `${em(8)} solid transparent`,
  },
  previous: {
    borderRight: `${em(8)} solid #f2f2f2`,
  },
  next: {
    borderLeft: `${em(8)} solid #f2f2f2`,
  },
  disabled: {
    borderLeft: 'none',
    borderRight: 'none',
  },
};

const Header = ({
  buttonLeftDisabled,
  buttonRightDisabled,
  onButtonLeftClick,
  onButtonRightClick,
  selectLeftValue,
  selectLeftOptions,
  selectLeftOnChange,
  selectRightValue,
  selectRightOptions,
  selectRightOnChange,
}) => (
  <div id="DatepickerHeader" style={headerStyle}>
    <div
      style={[buttonStyles.base, buttonStyles.left]}
      onClick={!buttonLeftDisabled && onButtonLeftClick}
    >
      <div
        style={[
          arrowStyles.base,
          arrowStyles.previous,
          buttonLeftDisabled && arrowStyles.disabled,
        ]}
      ></div>
    </div>
    <div
      style={[buttonStyles.base, buttonStyles.right]}
      onClick={!buttonRightDisabled && onButtonRightClick}
    >
      <div
        style={[
          arrowStyles.base,
          arrowStyles.next,
          buttonRightDisabled && arrowStyles.disabled,
        ]}
      ></div>
    </div>
    <div style={{ padding: em('6 0 14') }}>
      <Select
        value={selectLeftValue}
        options={selectLeftOptions}
        onChange={selectLeftOnChange}
      />
      <Select
        value={selectRightValue}
        options={selectRightOptions}
        onChange={selectRightOnChange}
      />
    </div>
  </div>
);

Header.propTypes = {
  buttonLeftDisabled: PropTypes.bool,
  buttonRightDisabled: PropTypes.bool,
  onButtonLeftClick: PropTypes.func.isRequired,
  onButtonRightClick: PropTypes.func.isRequired,
  selectLeftValue: PropTypes.number.isRequired,
  selectLeftOptions: PropTypes.array.isRequired,
  selectLeftOnChange: PropTypes.func.isRequired,
  selectRightValue: PropTypes.number.isRequired,
  selectRightOptions: PropTypes.array.isRequired,
  selectRightOnChange: PropTypes.func.isRequired,
};

export default Radium(Header);
