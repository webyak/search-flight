// ==================================================
// FlightList
// ----
// NOTE: Bit hacky but does the job
// ==================================================

import React, { Component, PropTypes } from 'react';
import { getCitiesAndCountries, getDailyFlights } from '../data/';
import Loader from '../components/loader.js';
import TransitionList from '../components/transition_list.js';
import FlightItem from '../components/flight_item.js';

class FlightList extends Component {
  state = {
    airportLocations: getCitiesAndCountries(),
    loading: false,
    flights: [],
  }
  componentWillReceiveProps(nextProps) {
    const { type, origin, destination, date } = nextProps;

    if (this.shouldGetFlights(nextProps)) {
      const flights = this.getFlights({ type, origin, destination, date });
      const hasFlights = !!flights.length;

      // simulate loading.
      if (hasFlights) {
        this.setState({ loading: true, flights: [] });
        this.setFlightsDelayed(flights);
      } else {
        this.setState({ flights });
      }
    }
  }
  setFlightsDelayed = (flights) => {
    setTimeout(() => {
      this.setState({ loading: false, flights });
    }, 1200);
  }
  getFlights = ({ type, origin, destination, date }) => {
    let flight = [];

    if (!!origin && !!destination && !!date) {
      if (this.doesAirportExist(origin) && this.doesAirportExist(destination)) {
        flight = getDailyFlights({ type, origin, destination, date });
      }
    }

    return flight;
  }
  shouldGetFlights({ origin, destination, date, disabled }) {
    return !disabled && (
      origin !== this.props.origin ||
      destination !== this.props.destination ||
      date !== this.props.date ||
      disabled !== this.props.disabled
    );
  }
  doesAirportExist = (location) => {
    const { airportLocations } = this.state;
    return airportLocations.indexOf(location) !== -1;
  }
  render() {
    const {
      disabled,
      animationDisabled,
      flightClickDisabled,
      onFlightClick,
    } = this.props;
    const { loading, flights } = this.state;

    return (
      <div id="FlightList">
        <Loader hidden={!loading} />
        <TransitionList
          animationDisabled={animationDisabled}
          items={disabled ? [] : flights}
          Item={FlightItem}
          itemProps={{ selectDisabled: flightClickDisabled }}
          itemHeight={88}
          onItemClick={flightClickDisabled ? () => {} : onFlightClick}
        />
      </div>
    );
  }
}

FlightList.propTypes = {
  type: PropTypes.oneOf(['outbound', 'inbound']).isRequired,
  origin: PropTypes.string,
  destination: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  disabled: PropTypes.bool,
  animationDisabled: PropTypes.bool,
  flightClickDisabled: PropTypes.bool,
  onFlightClick: PropTypes.func,
};

export default FlightList;
