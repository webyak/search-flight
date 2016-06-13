// ==================================================
// Form
// ==================================================

import React, { PropTypes } from 'react';
import Radium from 'radium';
import em from 'to-em';

const titleStyle = {
  paddingBottom: em(44),
};
const titleTextStyle = {
  fontSize: em(28),
};

const Form = ({ title, children }) => (
  <div id="Form">
    <div style={titleStyle}>
      <span style={titleTextStyle}>{title}</span>
    </div>
    {children}
  </div>
);

Form.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Radium(Form);
