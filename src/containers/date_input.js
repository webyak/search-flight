// ==================================================
// DateInput
// ==================================================

import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import InputSection from '../components/input_section.js';
import TextInput from '../components/text_input.js';
import Datepicker from './datepicker.js';

class DateInput extends Component {
  state = {
    datepickerVisible: false,
  }
  showDatepicker = () => {
    this.setState({ datepickerVisible: true });
  }
  hideDatepicker = () => {
    this.setState({ datepickerVisible: false });
  }
  render() {
    const { name, zIndex, minDate, date, setDate, hidden } = this.props;
    const { datepickerVisible } = this.state;

    return (
      <InputSection
        zIndex={zIndex}
        expanded={!!date}
        labelText={name}
        hidden={hidden}
      >
        <TextInput
          value={date ? moment(date).format('MMMM D, YYYY') : ''}
          placeholder={name}
          onClick={this.showDatepicker}
          readOnly
        />
        {datepickerVisible &&
          <Datepicker
            selectedDate={date}
            minDate={minDate || moment().startOf('day').toDate()}
            maxDate={moment()
              .startOf('day')
              .add(1, 'y')
              .toDate()
            }
            onChange={(d) => { this.hideDatepicker(); setDate(d); }}
            onClickOutside={this.hideDatepicker}
          />
        }
      </InputSection>
    );
  }
}

DateInput.propTypes = {
  name: PropTypes.oneOf(['Depart', 'Return']),
  zIndex: PropTypes.number.isRequired,
  minDate: PropTypes.instanceOf(Date),
  date: PropTypes.instanceOf(Date),
  setDate: PropTypes.func.isRequired,
  hidden: PropTypes.bool,
};

export default DateInput;
