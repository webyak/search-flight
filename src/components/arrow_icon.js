// ==================================================
// ArrowIcon
// ==================================================

import React, { PropTypes } from 'react';

const ArrowIcon = ({ type }) => (
  <svg
    id="ArrowIcon"
    x="0px"
    y="0px"
    width="32px"
    height="32px"
    viewBox="0 0 32 32"
  >
    <g transform="translate(0, 0)">
      <line
        fill="none"
        stroke="#d9d9d9"
        strokeWidth="1"
        strokeMiterlimit="10"
        x1={type === 'right' ? 0 : 2}
        y1="16"
        x2="30"
        y2="16"
        strokeLinejoin="miter"
        strokeLinecap="butt"
      />
      <polyline
        fill="none"
        stroke="#d9d9d9"
        strokeWidth="1"
        strokeLinecap="square"
        stroke-miterlimit="10"
        points={type === 'right' ? '21,7 30,16 21,25' : '11,25 2,16 11,7'}
        strokeLinejoin="miter"
      />
    </g>
  </svg>
);

ArrowIcon.propTypes = {
  type: PropTypes.oneOf(['right', 'left']),
};

export default ArrowIcon;
