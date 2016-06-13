// ==================================================
// Datepicker Calendar
// ==================================================

import React, { PropTypes } from 'react';
import Radium from 'radium';
import color from 'color';
import em from 'to-em';
import { BLUE } from '../../styling/colors.js';

const weekdayRowStyle = {
  paddingBottom: em(3.25),
};
const cellStyle = {
  display: 'inline-block',
  width: '14.285%',
  textAlign: 'center',
};
const weekdayCellStyle = {
  ...cellStyle,
  fontWeight: 700,
};
const weekdayCellTextStyle = {
  fontSize: em(13),
};
const dayCellWrapStyle = {
  borderTop: `${em(1)} solid #f7f7f7`,
  borderLeft: `${em(1)} solid #f7f7f7`,
};
const dayCellStyles = {
  base: {
    ...cellStyle,
    padding: em('6 0'),
    cursor: 'pointer',
    borderRight: `${em(1)} solid #f7f7f7`,
    borderBottom: `${em(1)} solid #f7f7f7`,
    ':hover': {
      color: '#fff',
      background: color(BLUE).clearer(0.1).rgbString(),
    },
  },
  inactive: {
    color: 'rgba(0, 0, 0, .2)',
    cursor: 'default',
    background: 'none',
    ':hover': {
      color: 'rgba(0, 0, 0, .2)',
      background: 'none',
    },
  },
  selected: {
    color: '#fff',
    background: color(BLUE).clearer(0.1).rgbString(),
  },
};
const dayCellTextStyle = {
  fontSize: em(14),
};

const Calendar = ({ days, onDayClick }) => (
  <div id="DatepickerCalendar">
    <div style={weekdayRowStyle}>
      {['So', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((weekday, i) =>
        <div key={i} style={weekdayCellStyle}>
          <span style={weekdayCellTextStyle}>{weekday}</span>
        </div>
      )}
    </div>
    <div style={dayCellWrapStyle}>
      {days.map(({ day, inactive, selected }, i) =>
        <div
          key={i}
          style={[
            dayCellStyles.base,
            inactive && dayCellStyles.inactive,
            selected && dayCellStyles.selected,
          ]}
          onClick={() => onDayClick(day)}
        >
          <span style={dayCellTextStyle}>{day}</span>
        </div>
      )}
    </div>
  </div>
);

Calendar.propTypes = {
  onDayClick: PropTypes.func.isRequired,
  days: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.number.isRequired,
    inactive: PropTypes.bool.isRequired,
    selected: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
};

export default Radium(Calendar);
