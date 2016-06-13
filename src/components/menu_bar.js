// ==================================================
// MenuBar
// ==================================================

import React from 'react';
import Radium from 'radium';
import color from 'color';
import em from 'to-em';
import { BLUE } from '../styling/colors.js';

const menuStyle = {
  position: 'relative',
  zIndex: 7,
  padding: em(21),
  background: `${BLUE} padding-box`,
  borderBottom: `${em(2)} solid ${color(BLUE).clearer(0.9).rgbString()}`,
};
const placeholderStyle = {
  width: em(80),
  height: em(18),
  background: 'rgba(255, 255, 255, 0.07)',
  borderRadius: em(1),
};

const MenuBar = () => (
  <header id="MenuBar" style={menuStyle}>
    <div style={placeholderStyle}></div>
  </header>
);

export default Radium(MenuBar);
