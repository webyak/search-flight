// ==================================================
// SearchFlight
// ==================================================

import React, { PropTypes } from 'react';
import Radium from 'radium';
import moment from 'moment';
import Column from './column.js';
import Form from './form.js';
import RadioButton from './radio_button.js';
import PlaceInput from '../containers/place_input.js';
import DateInput from '../containers/date_input.js';
import SlidePanel from './slide_panel.js';
import FlightList from '../containers/flight_list.js';
import MobileOverlay from './mobile_overlay.js';

const SearchFlight = ({
  tripType,
  setTripType,
  origin,
  setOrigin,
  destination,
  setDestination,
  dateOutbound,
  setDateOutbound,
  dateInbound,
  setDateInbound,
  visibleFlights,
  showOutboundFlights,
  showInboundFlights,
}) => (
  <div id="SearchFlight">
    <Column color="gray" align="left">
      <Form title="Where do you want to go?">
        <RadioButton
          value="oneway"
          checked={tripType === 'oneway'}
          onChange={() => setTripType('oneway')}
          labelText="Oneway"
        />
        <RadioButton
          value="roundtrip"
          checked={tripType === 'roundtrip'}
          onChange={() => setTripType('roundtrip')}
          labelText="Roundtrip"
        />
        <PlaceInput
          name="From"
          zIndex={4}
          place={origin}
          setPlace={setOrigin}
        />
        <PlaceInput
          name="To"
          zIndex={3}
          place={destination}
          setPlace={setDestination}
        />
        <DateInput
          name="Depart"
          zIndex={2}
          date={dateOutbound}
          setDate={setDateOutbound}
        />
        <DateInput
          name="Return"
          zIndex={1}
          minDate={moment(dateOutbound)
            .startOf('day')
            .add(1, 'd')
            .toDate()
          }
          date={dateInbound}
          setDate={setDateInbound}
          hidden={tripType !== 'roundtrip'}
        />
      </Form>
    </Column>
    <Column color="white" align="right">
      <SlidePanel
        visiblePane={visibleFlights === 'outbound' ? 'left' : 'right'}
        onBackClick={showOutboundFlights}
        leftPane={
          <FlightList
            type="outbound"
            origin={origin}
            destination={destination}
            date={dateOutbound}
            disabled={tripType === 'roundtrip' && !dateInbound}
            animationDisabled={visibleFlights !== 'outbound'}
            flightClickDisabled={tripType === 'oneway'}
            onFlightClick={showInboundFlights}
          />
        }
        rightPane={
          <FlightList
            type="inbound"
            origin={destination}
            destination={origin}
            date={dateInbound}
            flightClickDisabled
            animationDisabled={visibleFlights !== 'inbound'}
          />
        }
      />
    </Column>
    <MobileOverlay />
  </div>
);

SearchFlight.propTypes = {
  tripType: PropTypes.oneOf(['roundtrip', 'oneway']).isRequired,
  setTripType: PropTypes.func.isRequired,
  origin: PropTypes.string.isRequired,
  setOrigin: PropTypes.func.isRequired,
  destination: PropTypes.string.isRequired,
  setDestination: PropTypes.func.isRequired,
  dateOutbound: PropTypes.instanceOf(Date),
  setDateOutbound: PropTypes.func.isRequired,
  dateInbound: PropTypes.instanceOf(Date),
  setDateInbound: PropTypes.func.isRequired,
  visibleFlights: PropTypes.oneOf(['outbound', 'inbound']).isRequired,
  showOutboundFlights: PropTypes.func.isRequired,
  showInboundFlights: PropTypes.func.isRequired,
};

export default Radium(SearchFlight);
