// ==================================================
// Column
// ==================================================

import React, { PropTypes } from 'react';
import Radium from 'radium';
import { LIGHT_GRAY } from '../styling/colors.js';

const columnStyles = {
  base: {
    display: 'inline-block',
    minHeight: 'calc(100vh - 3.375em)',
    width: '50%',
    verticalAlign: 'top',
    overflowX: 'hidden',
  },
  gray: {
    background: LIGHT_GRAY,
    boxShadow: 'inset -1px 1px 2px rgba(0, 0, 0, 0.03)',
  },
  white: { background: '#fff' },
};
const wrapStyles = {
  left: { padding: '14% 10% 0 14%' },
  right: { padding: '14% 14% 0 10%' },
};

const Column = ({ color, align, children }) => (
  <div
    id="Column"
    style={[
      columnStyles.base,
      color === 'gray' && columnStyles.gray,
      color === 'white' && columnStyles.white,
    ]}
  >
    <div
      style={[
        align === 'left' && wrapStyles.left,
        align === 'right' && wrapStyles.right,
      ]}
    >
      <div style={{ position: 'relative' }}>
        {children}
      </div>
    </div>
  </div>
);

Column.propTypes = {
  color: PropTypes.oneOf(['gray', 'white']),
  align: PropTypes.oneOf(['left', 'right']),
  children: PropTypes.node,
};

export default Radium(Column);
