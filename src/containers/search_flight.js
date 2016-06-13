// ==================================================
// SearchFlightContainer
// ==================================================

import React, { Component } from 'react';
import SearchFlight from '../components/search_flight.js';
import moment from 'moment';

class SearchFlightContainer extends Component {
  state = {
    tripType: 'roundtrip',
    origin: '',
    destination: '',
    dateOutbound: moment()
      .startOf('day')
      .toDate(),
    dateInbound: moment()
      .startOf('day')
      .add(1, 'w')
      .toDate(),
    flightOutbound: null,
    flightInbound: null,
    visibleFlights: 'outbound',
  }
  setTripType = (tripType) => {
    let state = { tripType };
    if (tripType === 'oneway') {
      state = { tripType, visibleFlights: 'outbound' };
    }

    this.setState(state);
  }
  setOrigin = (origin) => {
    this.setState({ origin });
  }
  setDestination = (destination) => {
    this.setState({ destination });
  }
  setDateOutbound = (dateOutbound) => {
    const { dateInbound } = this.state;
    let state = { dateOutbound };

    if (dateOutbound && dateOutbound >= dateInbound) {
      state = {
        dateOutbound,
        // make sure the inbound date is always after the outbound date.
        dateInbound: moment(dateOutbound).add(1, 'd').toDate(),
      };
    }

    this.setState(state);
  }
  setDateInbound = (dateInbound) => {
    this.setState({ dateInbound });
  }
  showOutboundFlights = () => {
    this.setState({ visibleFlights: 'outbound' });
  }
  showInboundFlights = () => {
    this.setState({ visibleFlights: 'inbound' });
  }
  render() {
    const {
      tripType,
      origin,
      destination,
      dateOutbound,
      dateInbound,
      visibleFlights,
    } = this.state;

    return (
      <SearchFlight
        tripType={tripType}
        origin={origin}
        destination={destination}
        dateOutbound={dateOutbound}
        dateInbound={dateInbound}
        setTripType={this.setTripType}
        setOrigin={this.setOrigin}
        setDestination={this.setDestination}
        setDateOutbound={this.setDateOutbound}
        setDateInbound={this.setDateInbound}
        visibleFlights={visibleFlights}
        showOutboundFlights={this.showOutboundFlights}
        showInboundFlights={this.showInboundFlights}
      />
    );
  }
}

export default SearchFlightContainer;
