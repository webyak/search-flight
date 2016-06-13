// ==================================================
// Datepicker
// ==================================================

import React, { PropTypes } from 'react';
import Radium from 'radium';
import em from 'to-em';
import Header from './header.js';
import Calendar from './calendar.js';

const pickerStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  // zIndex: 1,
  maxWidth: em(276),
  width: '100%',
  padding: em(12),
  overflow: 'hidden',
  background: '#fff',
  borderRadius: em(2),
  userSelect: 'none',
};

const Datepicker = ({
  isDatePossible,
  selectedMonth,
  setSelectedMonth,
  selectedYear,
  setSelectedYear,
  monthOptions,
  yearOptions,
  calendarDays,
  onChange,
}) => (
  <div id="Datepicker" style={{ position: 'relative' }}>
    <div style={pickerStyle}>
      <Header
        buttonLeftDisabled={!isDatePossible(
          new Date(selectedYear, selectedMonth, 0)
        )}
        buttonRightDisabled={!isDatePossible(
          new Date(selectedYear, selectedMonth + 1, 1)
        )}
        onButtonLeftClick={() => setSelectedMonth(selectedMonth - 1)}
        onButtonRightClick={() => setSelectedMonth(selectedMonth + 1)}
        selectLeftValue={selectedMonth}
        selectLeftOptions={monthOptions}
        selectLeftOnChange={(month) => setSelectedMonth(Number(month))}
        selectRightValue={selectedYear}
        selectRightOptions={yearOptions}
        selectRightOnChange={(year) => setSelectedYear(Number(year))}
      />
      <Calendar
        days={calendarDays}
        onDayClick={(day) => onChange(
          new Date(selectedYear, selectedMonth, day)
        )}
      />
    </div>
  </div>
);

Datepicker.propTypes = {
  isDatePossible: PropTypes.func.isRequired,
  selectedMonth: PropTypes.number.isRequired,
  setSelectedMonth: PropTypes.func.isRequired,
  selectedYear: PropTypes.number.isRequired,
  setSelectedYear: PropTypes.func.isRequired,
  monthOptions: PropTypes.array.isRequired,
  yearOptions: PropTypes.array.isRequired,
  calendarDays: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Radium(Datepicker);
