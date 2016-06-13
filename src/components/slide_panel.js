// ==================================================
// SlidePanel
// ==================================================

import React, { PropTypes } from 'react';
import color from 'color';
import { Motion, spring } from 'react-motion';
import em from 'to-em';
import { DARK_GRAY } from '../styling/colors.js';

const getSlideStyle = (x) => ({
  transform: `translate3d(${x}%, 0, 0)`,
  WebkitTransform: `translate3d(${x}%, 0, 0)`,
});
const navStyle = {
  position: 'relative',
  height: em(42),
};
const navItemStyles = {
  base: {
    width: '100%',
    paddingBottom: em(10),
  },
  back: {
    position: 'absolute',
    top: 0,
    left: '138%',
  },
};
const navButtonStyle = {
  padding: em(4),
  cursor: 'pointer',
};
const navButtonTextStyle = {
  fontSize: em(17),
  color: color(DARK_GRAY).clearer(0.75).rgbString(),
  userSelect: 'none',
};
const paneWrapStyle = {
  position: 'relative',
};
const paneStyles = {
  base: {
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  left: {
    left: 0,
  },
  right: {
    left: '138%',
  },
};

const SlidePanel = ({ visiblePane, onBackClick, rightPane, leftPane }) => (
  <div id="SlidePanel">
    <Motion
      style={{
        x: spring(visiblePane === 'right' ? -138 : 0),
      }}
    >
      {({ x }) =>
        <div style={getSlideStyle(x)}>
          <div style={navStyle}>
            <div style={{ ...navItemStyles.base, ...navItemStyles.back }}>
              <div style={navButtonStyle} onClick={onBackClick}>
                <span style={navButtonTextStyle}>{'Back'}</span>
              </div>
            </div>
          </div>
          <div style={paneWrapStyle}>
            <div style={{ ...paneStyles.base, ...paneStyles.left }}>
              {leftPane}
            </div>
            <div style={{ ...paneStyles.base, ...paneStyles.right }}>
              {rightPane}
            </div>
          </div>
        </div>
      }
    </Motion>
  </div>
);

SlidePanel.propTypes = {
  visiblePane: PropTypes.oneOf(['left', 'right']).isRequired,
  onBackClick: PropTypes.func.isRequired,
  rightPane: PropTypes.node.isRequired,
  leftPane: PropTypes.node.isRequired,
};

// not using Radium here for animation performance.
export default SlidePanel;
