// ==================================================
// TransitionList
// ==================================================

import React, { Component, PropTypes } from 'react';
import { TransitionMotion, spring } from 'react-motion';

const wrapStyle = {
  position: 'relative',
};
const getMotionItemStyle = ({ opacity, y }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  opacity,
  transform: `translate3d(0, ${y}px, 0)`,
  WebkitTransform: `translate3d(0, ${y}px, 0)`,
});

class TransitionList extends Component {
  getDefaultStyles = () => {
    const { items } = this.props;
    return items.map(item => ({
      key: item.id,
      style: {
        opacity: 0,
        y: 800,
      },
      data: item,
    }));
  }
  getStyles = (prevStyles) => {
    const { animationDisabled, items, itemHeight } = this.props;
    const opacityConfig = { stiffness: 210, damping: 24 };
    const yConfig = { stiffness: 140, damping: 19 };

    return items.map((item, i) => {
      const precedentStyle = prevStyles[i - 1];
      let style = !precedentStyle
        ? {
          opacity: spring(1, opacityConfig),
          y: spring(0, yConfig),
        }
        : {
          opacity: spring(precedentStyle.style.opacity, opacityConfig),
          y: spring(precedentStyle.style.y + itemHeight, yConfig),
        };

      if (animationDisabled) {
        style = { opacity: 1, y: i * itemHeight };
      }

      return {
        key: item.id,
        style,
        data: item,
      };
    });
  }
  willLeave = () => ({
    opacity: spring(0, { stiffness: 210, damping: 24 }),
  })
  willEnter = () => ({
    opacity: 0,
    y: 800,
  })
  render() {
    const { Item, itemProps, onItemClick } = this.props;

    return (
      <TransitionMotion
        defaultStyles={this.getDefaultStyles()}
        styles={this.getStyles}
        willEnter={this.willEnter}
        willLeave={this.willLeave}
      >
        {(interpolatedStyles) =>
          <div id="TransitionList" style={wrapStyle}>
            {interpolatedStyles.map(({ key, style: { opacity, y }, data }) =>
              <div
                key={key}
                style={getMotionItemStyle({ opacity, y })}
              >
                <Item
                  onClick={() => { if (onItemClick) onItemClick(data); }}
                  {...itemProps}
                  {...data}
                />
              </div>
            )}
          </div>
        }
      </TransitionMotion>
    );
  }
}

TransitionList.propTypes = {
  animationDisabled: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  Item: PropTypes.func.isRequired,
  itemProps: PropTypes.object,
  itemHeight: PropTypes.number.isRequired,
  onItemClick: PropTypes.func,
};

// not using Radium here for animation performance.
export default TransitionList;
