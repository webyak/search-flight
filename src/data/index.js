import airports from './airports.json';

const getRandomItem = (array) =>
  array[Math.floor(Math.random() * array.length)];

const getRandomNumber = ({ min, max }) =>
  Math.floor(Math.random() * (max - min + 1) + min);

/**
 * Generates a unique list of the cities and countries
 * that have a top international airport.
 * @returns {Array} Mixed with cities and countries.
 */
const getCitiesAndCountries = () => {
  const citiesAndCountries = [];

  for (const { city, country } of airports) {
    // only add city/country if it hasn't been added yet.
    if (citiesAndCountries.indexOf(city) === -1) {
      citiesAndCountries.push(city);
    }
    if (citiesAndCountries.indexOf(country) === -1) {
      citiesAndCountries.push(country);
    }
  }

  return citiesAndCountries;
};

/**
 * Get airports based on city/country.
 * @param {String} location Location with an international airport.
 * @returns {Object}        List of airports.
 */
const getAirportMatches = (location) => {
  const lowerLocation = location.toLowerCase();
  const matchedAirports = [];

  for (const airport of airports) {
    const lowerCity = airport.city.toLowerCase();
    const lowerCountry = airport.country.toLowerCase();

    if (lowerCity === lowerLocation || lowerCountry === lowerLocation) {
      matchedAirports.push(airport);
    }
  }

  return matchedAirports;
};

/**
 * Generates random flight times within max. 24 hours.
 * @param {Date} dayDate Date instance, precise to the day.
 * @returns {Object}     Depart & arrival dates.
 */
const getRandomFlightTimes = (dayDate) => {
  const departDate = new Date(dayDate);
  const arrivalDate = new Date(dayDate);
  const offsetHours = getRandomNumber({ min: 1, max: 12 });

  departDate.setHours(offsetHours);
  arrivalDate.setHours(offsetHours + getRandomNumber({ min: 1, max: 12 }));

  departDate.setMinutes(5 * getRandomNumber({ min: 0, max: 11 }));
  arrivalDate.setMinutes(5 * getRandomNumber({ min: 0, max: 11 }));

  return { departDate, arrivalDate };
};

/**
 * Generates a fictional number of flights for a certain day.
 * @param  {Date} date
 * @return {Number}    Amount of flights.
 */
const getFlightsCount = (day) =>
  33 - 3 * Math.floor((31 - day) / 3) - day;

/**
 * Generate a fictional list of flights.
 * @param {String} type        Type of flight. Either 'outbound' / 'inbound'.
 * @param {String} origin      Location with an international airport to fly from.
 * @param {String} destination Location with an international airport to fly to.
 * @param {Date} date          Date to get the flights for.
 * @returns {Array}            List with flights.
 */
const getDailyFlights = ({ type, origin, destination, date }) => {
  const originAirports = getAirportMatches(origin);
  const destinationAirports = getAirportMatches(destination);
  const flightsCount = getFlightsCount(date.getDate());

  const flights = [];

  // generate data for every flight.
  for (let i = 0; i < flightsCount; i++) {
    const { departDate, arrivalDate } = getRandomFlightTimes(date);

    flights.push({
      id: Math.random().toString(36).substr(2, 9),
      type,
      price: getRandomNumber({ min: 80, max: 600 }),
      depart: {
        airport: getRandomItem(originAirports),
        date: departDate,
      },
      arrival: {
        airport: getRandomItem(destinationAirports),
        date: arrivalDate,
      },
    });
  }

  // sort flights by origin date.
  flights.sort((a, b) => a.depart.date - b.depart.date);

  return flights;
};

export { getCitiesAndCountries, getDailyFlights };
