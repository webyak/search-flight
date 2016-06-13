// ==================================================
// MobileOverlay
// ==================================================

import React from 'react';
import Radium from 'radium';
import { BLUE } from '../styling/colors.js';
import em from 'to-em';

const overlayStyle = {
  zIndex: 99,
  position: 'fixed',
  top: 0,
  left: 0,
  padding: '20% 0',
  width: '100%',
  height: '100vh',
  background: BLUE,
  textAlign: 'center',
  '@media (min-width: 850px)': {
    display: 'none',
  },
};
const paragraphStyle = {
  padding: `0 ${em(8)}`,
  color: '#fff',
};
const anchorStyle = {
  color: '#fff',
};

const link = 'mailto:my@mail.com?subject=Yannik.io%20Flight%20Search&body=' +
  'https://yannik.io/flights/';
const MobileOverlay = () => (
  <div id="MobileOverlay" style={overlayStyle}>
    <p style={paragraphStyle}>
      Sorry, this demo isn't mobile optimized yet.<br />
      Send an <a href={link} style={anchorStyle}>email</a> as a reminder to check it on your pc.
    </p>
  </div>
);

export default Radium(MobileOverlay);
