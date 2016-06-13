// ==================================================
// InputSection
// ==================================================

import React, { PropTypes } from 'react';
import Radium from 'radium';
import { Motion, spring } from 'react-motion';
import em from 'to-em';

const getSectionMotionStyle = (hidden) => ({
  scaleY: spring(hidden ? 0 : 1, { stiffness: 300, damping: 17 }),
  opacity: spring(hidden ? 0 : 1, { stiffness: 300, damping: 24 }),
});
const getSectionStyle = ({ zIndex, scaleY, opacity }) => ({
  zIndex,
  position: 'relative',
  marginBottom: em(24),
  transform: `scale3d(1, ${Math.max(0, scaleY)}, 1)`,
  transformOrigin: 'center top',
  opacity,
});
const labelStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  paddingLeft: '0.4em',
  fontSize: em(14),
  fontWeight: 700,
};
const getWrapMotionStyle = (expanded) => ({
  y: spring(expanded ? 20 : 0, { stiffness: 300, damping: 17 }),
});
const getWrapStyle = (y) => ({
  position: 'relative',
  transform: `translate3d(0, ${y}px, 0)`,
});

const InputSection = ({ zIndex, expanded, labelText, hidden, children }) => (
  <Motion style={getSectionMotionStyle(hidden)}>
    {({ scaleY, opacity }) =>
      <div
        id="InputSection"
        style={getSectionStyle({ zIndex, scaleY, opacity })}
      >
        <div style={labelStyle}>{labelText}</div>
        <Motion style={getWrapMotionStyle(expanded)}>
          {({ y }) =>
            <div style={getWrapStyle(y)}>
              {children}
            </div>
          }
        </Motion>
      </div>
    }
  </Motion>
);

InputSection.propTypes = {
  zIndex: PropTypes.number,
  expanded: PropTypes.bool,
  labelText: PropTypes.string,
  hidden: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Radium(InputSection);
