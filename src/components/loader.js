// ==================================================
// Loader
// ==================================================

import React, { PropTypes } from 'react';
import Radium from 'radium';
import { Motion, spring } from 'react-motion';
import em from 'to-em';

const getWrapStyle = (opacity) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  opacity,
});
const centerWrap = {
  width: em(15),
  margin: '0 auto',
};
const ballScaleKeyframes = Radium.keyframes({
  '0%': { opacity: 0, transform: 'scale(0)' },
  '5%': { opacity: 1 },
  '100%': { opacity: 0, transform: 'scale(1)' },
}, 'ballScale');
const ballScaleWrapStyle = {
  position: 'relative',
};
const ballScaleStyles = {
  base: {
    position: 'absolute',
    left: '-30px',
    top: 0,
    margin: 0,
    width: '60px',
    height: '60px',
    opacity: 0,
    backgroundColor: 'rgba(0, 0, 0, .12)',
    borderRadius: '100%',
    animation: 'x 1s 0s linear infinite',
    animationName: ballScaleKeyframes,
    animationFillMode: 'both',
  },
  second: {
    animationDelay: '-0.4s',
  },
  third: {
    animationDelay: '-0.2s',
  },
};


const Loader = ({ hidden }) => (
  <div id="Loader" style={{ position: 'relative' }}>
    <Motion style={{ opacity: spring(hidden ? 0 : 1) }}>
      {({ opacity }) =>
        <div style={getWrapStyle(opacity)}>
          <div style={centerWrap}>
            <div style={ballScaleWrapStyle}>
              <div style={[ballScaleStyles.base, ballScaleStyles.second]}></div>
              <div style={[ballScaleStyles.base, ballScaleStyles.third]}></div>
              <div style={[ballScaleStyles.base]}></div>
            </div>
          </div>
        </div>
      }
    </Motion>
  </div>
);

Loader.propTypes = {
  hidden: PropTypes.bool,
};

export default Radium(Loader);
