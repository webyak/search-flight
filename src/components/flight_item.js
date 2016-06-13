// ==================================================
// FlightItem
// ==================================================

import React, { Component, PropTypes } from 'react';
import color from 'color';
import moment from 'moment';
import ArrowIcon from './arrow_icon.js';
import em from 'to-em';
import { DARK_GRAY, BLUE } from '../styling/colors.js';

const cardStyle = {
  position: 'relative',
  background: '#fff',
  borderRadius: em(2),
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
};
const underlayStyles = {
  base: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    background: 'rgba(0, 0, 0, .03)',
    opacity: 0,
    transition: 'opacity 100ms cubic-bezier(0.22, 0.61, 0.36, 1)',
  },
  visible: {
    opacity: 1,
  },
};
const wrapStyles = {
  base: {
    display: 'inline-block',
    textAlign: 'center',
  },
  left: {
    width: '75%',
    padding: em('6 0 10'),
  },
  right: {
    width: '25%',
    padding: em('12 0 10'),
  },
};
const timeSection = {
  padding: '0 10%',
};
const timeStyle = {
  display: 'inline-block',
  width: '33%',
  fontSize: em(13),
  fontWeight: 700,
  color: color(DARK_GRAY).clearer(0.75).rgbString(),
};
const iataSection = {
  position: 'relative',
};
const iconWrap = {
  position: 'absolute',
  right: 0,
  bottom: em(-6),
  left: em(-6),
  width: '24px',
  height: '24px',
  margin: '0 auto',
};
const iataStyle = {
  display: 'inline-block',
  width: '50%',
  fontWeight: 700,
  letterSpacing: '1.8px',
};
const citySection = {
  marginTop: em(-4),
};
const cityStyle = {
  display: 'inline-block',
  width: '50%',
  fontSize: em(13),
};
const priceStyle = {
  left: em(-3), // ?
  fontSize: em(15),
  fontWeight: 700,
};
const buttonStyles = {
  base: {
    display: 'inline-block',
    marginTop: em(6),
    padding: em('0 12 2'),
    color: '#fff',
    cursor: 'pointer',
    background: color(BLUE).clearer(0.06).rgbString(),
    borderRadius: em(2),
    userSelect: 'none',
  },
  disabled: {
    cursor: 'not-allowed',
    background: 'rgba(0, 0, 0, 0.2)',
  },
};
const buttonTextStyle = {
  fontSize: em(14),
};

class FlightItem extends Component {
  state = {
    underlayVisible: false,
  }
  shouldComponentUpdate(nextProps) {
    const { id, selectDisabled } = this.props;
    return id !== nextProps.id || selectDisabled !== nextProps;
  }
  showUnderlay = () => {
    this.setState({ underlayVisible: true });
  }
  hideUnderlay = () => {
    this.setState({ underlayVisible: false });
  }
  render() {
    const {
      type,
      price,
      depart,
      arrival,
      selectDisabled,
      onClick,
    } = this.props;
    const { underlayVisible } = this.state;

    return (
      <div
        id="FlightItem"
        style={cardStyle}
        onMouseEnter={this.showUnderlay}
        onMouseLeave={this.hideUnderlay}
      >
        <div
          style={{
            ...underlayStyles.base,
            ...underlayVisible && underlayStyles.visible,
          }}
        ></div>
        <div style={{ ...wrapStyles.base, ...wrapStyles.left }}>
          <div style={timeSection}>
            <div style={timeStyle}>{moment(depart.date).format('h:mm a')}</div>
            <div style={timeStyle}>
              {moment(moment(depart.date).diff(moment(arrival.date))).format('h[h] m[m]')}
            </div>
            <div style={timeStyle}>{moment(arrival.date).format('h:mm a')}</div>
          </div>
          <div style={iataSection}>
            <div style={iconWrap}>
              <ArrowIcon type={type === 'outbound' ? 'right' : 'left'} />
            </div>
            <div style={iataStyle}>{depart.airport.iata}</div>
            <div style={iataStyle}>{arrival.airport.iata}</div>
          </div>
          <div style={citySection}>
            <div style={cityStyle}>{depart.airport.city}</div>
            <div style={cityStyle}>{arrival.airport.city}</div>
          </div>
        </div>
        <div style={{ ...wrapStyles.base, ...wrapStyles.right }}>
          <div style={priceStyle}>{`$${price}`}</div>
          <div
            style={{
              ...buttonStyles.base,
              ...selectDisabled && buttonStyles.disabled,
            }}
            onClick={onClick}
          >
            <span style={buttonTextStyle}>Select</span>
          </div>
        </div>
      </div>
    );
  }
}

FlightItem.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['outbound', 'inbound']).isRequired,
  price: PropTypes.number.isRequired,
  depart: PropTypes.shape({
    airport: PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      iata: PropTypes.string.isRequired,
    }).isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
  arrival: PropTypes.shape({
    airport: PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      iata: PropTypes.string.isRequired,
    }).isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
  selectDisabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

// not using Radium here for animation performance.
export default FlightItem;
