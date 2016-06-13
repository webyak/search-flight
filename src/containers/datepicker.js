// ==================================================
// DatepickerContainer
// ==================================================

import React, { Component, PropTypes } from 'react';
import OnClickOutside from 'react-onclickoutside';
import Datepicker from '../components/datepicker/';

class DatepickerContainer extends Component {
  constructor(props) {
    super();
    const { activeDate } = props;
    const dateNow = new Date();

    this.state = activeDate
      ? {
        selectedMonth: activeDate.getMonth(),
        selectedYear: activeDate.getFullYear(),
      }
      : {
        selectedMonth: dateNow.getMonth(),
        selectedYear: dateNow.getFullYear(),
      };
  }
  setSelectedMonth = (selectedMonth) => {
    const { selectedYear } = this.state;
    let nextState = { selectedMonth };

    // jump years from December to January and back.
    if (selectedMonth < 0) {
      nextState = {
        selectedYear: selectedYear - 1,
        selectedMonth: 11,
      };
    } else if (selectedMonth > 11) {
      nextState = {
        selectedYear: selectedYear + 1,
        selectedMonth: 0,
      };
    }

    this.setState(nextState);
  }
  setSelectedYear = (selectedYear) => {
    const { minDate, maxDate } = this.props;
    const { selectedMonth } = this.state;
    const minYear = minDate.getFullYear();
    const minMonth = minDate.getMonth();
    const maxYear = maxDate.getFullYear();
    const maxMonth = maxDate.getMonth();
    let nextState = { selectedYear };

    // make sure we don't jump outside date range by accident.
    if (selectedYear === minYear && selectedMonth < minMonth) {
      nextState = { selectedYear, selectedMonth: minMonth };
    }
    if (selectedYear === maxYear && selectedMonth > maxMonth) {
      nextState = { selectedYear, selectedMonth: maxMonth };
    }

    this.setState(nextState);
  }
  getMonthOptions() {
    const { selectedYear } = this.state;
    const { minDate, maxDate } = this.props;
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const minMonth = selectedYear === minDate.getFullYear()
      ? minDate.getMonth()
      : 0;
    const maxMonth = selectedYear === maxDate.getFullYear()
      ? maxDate.getMonth()
      : 11;

    const options = [];
    for (let month = minMonth; month <= maxMonth; month++) {
      options.push({ value: month, label: monthNames[month] });
    }

    return options;
  }
  getYearOptions = () => {
    const { minDate, maxDate } = this.props;
    const minYear = minDate.getFullYear();
    const maxYear = maxDate.getFullYear();

    const options = [];
    for (let year = minYear; year <= maxYear; year++) {
      options.push({ value: year, label: String(year) });
    }

    return options;
  }
  getDaysInMonth({ year, month }) {
    return new Date(year, month - 1, 0).getDate();
  }
  getCalendarDays = () => {
    const { selectedMonth, selectedYear } = this.state;
    const { activeDate } = this.props;

    const daysInMonth = this.getDaysInMonth({
      year: selectedYear,
      month: selectedMonth,
    });

    const days = [];
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(selectedYear, selectedMonth, day);

      days.push({
        day,
        inactive: !this.isDatePossible(date),
        selected: Number(date) === Number(activeDate),
      });
    }

    return days;
  }
  isDatePossible = (date) => {
    const { minDate, maxDate } = this.props;
    return !!minDate && !!maxDate && date >= minDate && date <= maxDate;
  }
  handleClickOutside = () => {
    const { onClickOutside } = this.props;
    if (onClickOutside) onClickOutside();
  }
  render() {
    const { selectedMonth, selectedYear } = this.state;
    const { onChange } = this.props;

    return (
      <Datepicker
        isDatePossible={this.isDatePossible}
        selectedMonth={selectedMonth}
        selectedYear={selectedYear}
        setSelectedMonth={this.setSelectedMonth}
        setSelectedYear={this.setSelectedYear}
        monthOptions={this.getMonthOptions()}
        yearOptions={this.getYearOptions()}
        calendarDays={this.getCalendarDays()}
        onChange={onChange}
      />
    );
  }
}

DatepickerContainer.propTypes = {
  activeDate: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  onChange: PropTypes.func.isRequired,
  onClickOutside: PropTypes.func,
};

export default OnClickOutside(DatepickerContainer);
