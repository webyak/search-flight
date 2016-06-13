(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("radium"), require("react-helmet"), require("color"), require("to-em"), require("moment"), require("react-motion"), require("react-onclickoutside"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "radium", "react-helmet", "color", "to-em", "moment", "react-motion", "react-onclickoutside"], factory);
	else if(typeof exports === 'object')
		exports["SearchFlight"] = factory(require("react"), require("radium"), require("react-helmet"), require("color"), require("to-em"), require("moment"), require("react-motion"), require("react-onclickoutside"));
	else
		root["SearchFlight"] = factory(root["React"], root["Radium"], root["Helmet"], root["color"], root["em"], root["moment"], root["ReactMotion"], root["onClickOutside"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_26__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _layout = __webpack_require__(1);
	
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_layout).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // ==================================================
	// Layout
	// ==================================================
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _radium = __webpack_require__(3);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _reactHelmet = __webpack_require__(4);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _color = __webpack_require__(5);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _menu_bar = __webpack_require__(6);
	
	var _menu_bar2 = _interopRequireDefault(_menu_bar);
	
	var _search_flight = __webpack_require__(9);
	
	var _search_flight2 = _interopRequireDefault(_search_flight);
	
	var _colors = __webpack_require__(8);
	
	var _common_styles = __webpack_require__(21);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var selectionStyle = {
	  color: '#fff',
	  background: _colors.DARK_GRAY
	};
	var placeholderStyle = {
	  color: (0, _color2.default)(_colors.DARK_GRAY).clearer(0.35).rgbString(),
	  opacity: 1
	};
	
	var Layout = function Layout() {
	  return _react2.default.createElement(
	    _radium.StyleRoot,
	    { id: 'Layout' },
	    _react2.default.createElement(_reactHelmet2.default, {
	      title: 'Flight Search Demo',
	      meta: [{
	        name: 'description',
	        content: 'A flight search experience with react-motion.'
	      }],
	      link: [{
	        href: 'https://fonts.googleapis.com/css?family=Asap:400,700',
	        rel: 'stylesheet',
	        type: 'text/css'
	      }]
	    }),
	    _react2.default.createElement(_radium.Style, {
	      rules: {
	        'html, body': {
	          width: '100%',
	          height: '100%'
	        },
	        body: _extends({}, _common_styles.resetFontSmooth, {
	          fontFamily: '"Asap", "Helvetica Neue", Helvetica, Arial, sans-serif',
	          fontWeight: 400,
	          lineHeight: 1.4,
	          color: _colors.DARK_GRAY,
	          background: _colors.LIGHT_GRAY
	        }),
	        '*': {
	          WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'
	        },
	        '*, *:before, *:after': {
	          boxSizing: 'border-box'
	        },
	        '::-moz-selection': _extends({}, selectionStyle),
	        '::selection': _extends({}, selectionStyle),
	        '::-webkit-input-placeholder': _extends({}, placeholderStyle),
	        ':-moz-placeholder': _extends({}, placeholderStyle),
	        '::-moz-placeholder': _extends({}, placeholderStyle),
	        ':-ms-input-placeholder': _extends({}, placeholderStyle),
	        'input:-webkit-autofill': {
	          WebkitBoxShadow: '0 0 0 1000px #fff inset'
	        }
	      }
	    }),
	    _react2.default.createElement(_menu_bar2.default, null),
	    _react2.default.createElement(_search_flight2.default, null)
	  );
	};
	
	exports.default = (0, _radium2.default)(Layout);

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _radium = __webpack_require__(3);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _color = __webpack_require__(5);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _toEm = __webpack_require__(7);
	
	var _toEm2 = _interopRequireDefault(_toEm);
	
	var _colors = __webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var menuStyle = {
	  position: 'relative',
	  zIndex: 7,
	  padding: (0, _toEm2.default)(21),
	  background: _colors.BLUE + ' padding-box',
	  borderBottom: (0, _toEm2.default)(2) + ' solid ' + (0, _color2.default)(_colors.BLUE).clearer(0.9).rgbString()
	}; // ==================================================
	// MenuBar
	// ==================================================
	
	var placeholderStyle = {
	  width: (0, _toEm2.default)(80),
	  height: (0, _toEm2.default)(18),
	  background: 'rgba(255, 255, 255, 0.07)',
	  borderRadius: (0, _toEm2.default)(1)
	};
	
	var MenuBar = function MenuBar() {
	  return _react2.default.createElement(
	    'header',
	    { id: 'MenuBar', style: menuStyle },
	    _react2.default.createElement('div', { style: placeholderStyle })
	  );
	};
	
	exports.default = (0, _radium2.default)(MenuBar);

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var DARK_GRAY = exports.DARK_GRAY = '#454545';
	var LIGHT_GRAY = exports.LIGHT_GRAY = '#f7f7f7';
	var BLUE = exports.BLUE = '#3438ad';

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _search_flight = __webpack_require__(10);
	
	var _search_flight2 = _interopRequireDefault(_search_flight);
	
	var _moment = __webpack_require__(11);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ==================================================
	// SearchFlightContainer
	// ==================================================
	
	var SearchFlightContainer = function (_Component) {
	  _inherits(SearchFlightContainer, _Component);
	
	  function SearchFlightContainer() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, SearchFlightContainer);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SearchFlightContainer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      tripType: 'roundtrip',
	      origin: '',
	      destination: '',
	      dateOutbound: (0, _moment2.default)().startOf('day').toDate(),
	      dateInbound: (0, _moment2.default)().startOf('day').add(1, 'w').toDate(),
	      flightOutbound: null,
	      flightInbound: null,
	      visibleFlights: 'outbound'
	    }, _this.setTripType = function (tripType) {
	      var state = { tripType: tripType };
	      if (tripType === 'oneway') {
	        state = { tripType: tripType, visibleFlights: 'outbound' };
	      }
	
	      _this.setState(state);
	    }, _this.setOrigin = function (origin) {
	      _this.setState({ origin: origin });
	    }, _this.setDestination = function (destination) {
	      _this.setState({ destination: destination });
	    }, _this.setDateOutbound = function (dateOutbound) {
	      var dateInbound = _this.state.dateInbound;
	
	      var state = { dateOutbound: dateOutbound };
	
	      if (dateOutbound && dateOutbound >= dateInbound) {
	        state = {
	          dateOutbound: dateOutbound,
	          // make sure the inbound date is always after the outbound date.
	          dateInbound: (0, _moment2.default)(dateOutbound).add(1, 'd').toDate()
	        };
	      }
	
	      _this.setState(state);
	    }, _this.setDateInbound = function (dateInbound) {
	      _this.setState({ dateInbound: dateInbound });
	    }, _this.showOutboundFlights = function () {
	      _this.setState({ visibleFlights: 'outbound' });
	    }, _this.showInboundFlights = function () {
	      _this.setState({ visibleFlights: 'inbound' });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(SearchFlightContainer, [{
	    key: 'render',
	    value: function render() {
	      var _state = this.state;
	      var tripType = _state.tripType;
	      var origin = _state.origin;
	      var destination = _state.destination;
	      var dateOutbound = _state.dateOutbound;
	      var dateInbound = _state.dateInbound;
	      var visibleFlights = _state.visibleFlights;
	
	
	      return _react2.default.createElement(_search_flight2.default, {
	        tripType: tripType,
	        origin: origin,
	        destination: destination,
	        dateOutbound: dateOutbound,
	        dateInbound: dateInbound,
	        setTripType: this.setTripType,
	        setOrigin: this.setOrigin,
	        setDestination: this.setDestination,
	        setDateOutbound: this.setDateOutbound,
	        setDateInbound: this.setDateInbound,
	        visibleFlights: visibleFlights,
	        showOutboundFlights: this.showOutboundFlights,
	        showInboundFlights: this.showInboundFlights
	      });
	    }
	  }]);
	
	  return SearchFlightContainer;
	}(_react.Component);
	
	exports.default = SearchFlightContainer;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _radium = __webpack_require__(3);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _moment = __webpack_require__(11);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _column = __webpack_require__(12);
	
	var _column2 = _interopRequireDefault(_column);
	
	var _form = __webpack_require__(13);
	
	var _form2 = _interopRequireDefault(_form);
	
	var _radio_button = __webpack_require__(14);
	
	var _radio_button2 = _interopRequireDefault(_radio_button);
	
	var _place_input = __webpack_require__(16);
	
	var _place_input2 = _interopRequireDefault(_place_input);
	
	var _date_input = __webpack_require__(24);
	
	var _date_input2 = _interopRequireDefault(_date_input);
	
	var _slide_panel = __webpack_require__(31);
	
	var _slide_panel2 = _interopRequireDefault(_slide_panel);
	
	var _flight_list = __webpack_require__(32);
	
	var _flight_list2 = _interopRequireDefault(_flight_list);
	
	var _mobile_overlay = __webpack_require__(37);
	
	var _mobile_overlay2 = _interopRequireDefault(_mobile_overlay);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SearchFlight = function SearchFlight(_ref) {
	  var tripType = _ref.tripType;
	  var setTripType = _ref.setTripType;
	  var origin = _ref.origin;
	  var setOrigin = _ref.setOrigin;
	  var destination = _ref.destination;
	  var setDestination = _ref.setDestination;
	  var dateOutbound = _ref.dateOutbound;
	  var setDateOutbound = _ref.setDateOutbound;
	  var dateInbound = _ref.dateInbound;
	  var setDateInbound = _ref.setDateInbound;
	  var visibleFlights = _ref.visibleFlights;
	  var showOutboundFlights = _ref.showOutboundFlights;
	  var showInboundFlights = _ref.showInboundFlights;
	  return _react2.default.createElement(
	    'div',
	    { id: 'SearchFlight' },
	    _react2.default.createElement(
	      _column2.default,
	      { color: 'gray', align: 'left' },
	      _react2.default.createElement(
	        _form2.default,
	        { title: 'Where do you want to go?' },
	        _react2.default.createElement(_radio_button2.default, {
	          value: 'oneway',
	          checked: tripType === 'oneway',
	          onChange: function onChange() {
	            return setTripType('oneway');
	          },
	          labelText: 'Oneway'
	        }),
	        _react2.default.createElement(_radio_button2.default, {
	          value: 'roundtrip',
	          checked: tripType === 'roundtrip',
	          onChange: function onChange() {
	            return setTripType('roundtrip');
	          },
	          labelText: 'Roundtrip'
	        }),
	        _react2.default.createElement(_place_input2.default, {
	          name: 'From',
	          zIndex: 4,
	          place: origin,
	          setPlace: setOrigin
	        }),
	        _react2.default.createElement(_place_input2.default, {
	          name: 'To',
	          zIndex: 3,
	          place: destination,
	          setPlace: setDestination
	        }),
	        _react2.default.createElement(_date_input2.default, {
	          name: 'Depart',
	          zIndex: 2,
	          date: dateOutbound,
	          setDate: setDateOutbound
	        }),
	        _react2.default.createElement(_date_input2.default, {
	          name: 'Return',
	          zIndex: 1,
	          minDate: (0, _moment2.default)(dateOutbound).startOf('day').add(1, 'd').toDate(),
	          date: dateInbound,
	          setDate: setDateInbound,
	          hidden: tripType !== 'roundtrip'
	        })
	      )
	    ),
	    _react2.default.createElement(
	      _column2.default,
	      { color: 'white', align: 'right' },
	      _react2.default.createElement(_slide_panel2.default, {
	        visiblePane: visibleFlights === 'outbound' ? 'left' : 'right',
	        onBackClick: showOutboundFlights,
	        leftPane: _react2.default.createElement(_flight_list2.default, {
	          type: 'outbound',
	          origin: origin,
	          destination: destination,
	          date: dateOutbound,
	          disabled: tripType === 'roundtrip' && !dateInbound,
	          animationDisabled: visibleFlights !== 'outbound',
	          flightClickDisabled: tripType === 'oneway',
	          onFlightClick: showInboundFlights
	        }),
	        rightPane: _react2.default.createElement(_flight_list2.default, {
	          type: 'inbound',
	          origin: destination,
	          destination: origin,
	          date: dateInbound,
	          flightClickDisabled: true,
	          animationDisabled: visibleFlights !== 'inbound'
	        })
	      })
	    ),
	    _react2.default.createElement(_mobile_overlay2.default, null)
	  );
	}; // ==================================================
	// SearchFlight
	// ==================================================
	
	SearchFlight.propTypes = {
	  tripType: _react.PropTypes.oneOf(['roundtrip', 'oneway']).isRequired,
	  setTripType: _react.PropTypes.func.isRequired,
	  origin: _react.PropTypes.string.isRequired,
	  setOrigin: _react.PropTypes.func.isRequired,
	  destination: _react.PropTypes.string.isRequired,
	  setDestination: _react.PropTypes.func.isRequired,
	  dateOutbound: _react.PropTypes.instanceOf(Date),
	  setDateOutbound: _react.PropTypes.func.isRequired,
	  dateInbound: _react.PropTypes.instanceOf(Date),
	  setDateInbound: _react.PropTypes.func.isRequired,
	  visibleFlights: _react.PropTypes.oneOf(['outbound', 'inbound']).isRequired,
	  showOutboundFlights: _react.PropTypes.func.isRequired,
	  showInboundFlights: _react.PropTypes.func.isRequired
	};
	
	exports.default = (0, _radium2.default)(SearchFlight);

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _radium = __webpack_require__(3);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _colors = __webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var columnStyles = {
	  base: {
	    display: 'inline-block',
	    minHeight: 'calc(100vh - 3.375em)',
	    width: '50%',
	    verticalAlign: 'top',
	    overflowX: 'hidden'
	  },
	  gray: {
	    background: _colors.LIGHT_GRAY,
	    boxShadow: 'inset -1px 1px 2px rgba(0, 0, 0, 0.03)'
	  },
	  white: { background: '#fff' }
	}; // ==================================================
	// Column
	// ==================================================
	
	var wrapStyles = {
	  left: { padding: '14% 10% 0 14%' },
	  right: { padding: '14% 14% 0 10%' }
	};
	
	var Column = function Column(_ref) {
	  var color = _ref.color;
	  var align = _ref.align;
	  var children = _ref.children;
	  return _react2.default.createElement(
	    'div',
	    {
	      id: 'Column',
	      style: [columnStyles.base, color === 'gray' && columnStyles.gray, color === 'white' && columnStyles.white]
	    },
	    _react2.default.createElement(
	      'div',
	      {
	        style: [align === 'left' && wrapStyles.left, align === 'right' && wrapStyles.right]
	      },
	      _react2.default.createElement(
	        'div',
	        { style: { position: 'relative' } },
	        children
	      )
	    )
	  );
	};
	
	Column.propTypes = {
	  color: _react.PropTypes.oneOf(['gray', 'white']),
	  align: _react.PropTypes.oneOf(['left', 'right']),
	  children: _react.PropTypes.node
	};
	
	exports.default = (0, _radium2.default)(Column);

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _radium = __webpack_require__(3);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _toEm = __webpack_require__(7);
	
	var _toEm2 = _interopRequireDefault(_toEm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var titleStyle = {
	  paddingBottom: (0, _toEm2.default)(44)
	}; // ==================================================
	// Form
	// ==================================================
	
	var titleTextStyle = {
	  fontSize: (0, _toEm2.default)(28)
	};
	
	var Form = function Form(_ref) {
	  var title = _ref.title;
	  var children = _ref.children;
	  return _react2.default.createElement(
	    'div',
	    { id: 'Form' },
	    _react2.default.createElement(
	      'div',
	      { style: titleStyle },
	      _react2.default.createElement(
	        'span',
	        { style: titleTextStyle },
	        title
	      )
	    ),
	    children
	  );
	};
	
	Form.propTypes = {
	  title: _react.PropTypes.string.isRequired,
	  children: _react.PropTypes.node.isRequired
	};
	
	exports.default = (0, _radium2.default)(Form);

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // ==================================================
	// RadioButton
	// ==================================================
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _radium = __webpack_require__(3);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _color = __webpack_require__(5);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _reactMotion = __webpack_require__(15);
	
	var _toEm = __webpack_require__(7);
	
	var _toEm2 = _interopRequireDefault(_toEm);
	
	var _colors = __webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var buttonStyle = {
	  display: 'inline-block',
	  paddingRight: (0, _toEm2.default)(12),
	  marginBottom: (0, _toEm2.default)(24)
	};
	var boxStyle = {
	  display: 'inline-block',
	  width: (0, _toEm2.default)(20),
	  height: (0, _toEm2.default)(20),
	  marginRight: (0, _toEm2.default)(8),
	  background: '#f2f2f2',
	  borderRadius: (0, _toEm2.default)(8),
	  boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.03)'
	};
	var dotStyle = {
	  width: '100%',
	  height: '100%',
	  background: (0, _color2.default)(_colors.DARK_GRAY).clearer(0.1).rgbString(),
	  borderRadius: '50%'
	};
	// transform: scale3d(0, 0, 1);
	var labelTextStyle = {
	  position: 'relative',
	  top: '-0.3em',
	  fontSize: (0, _toEm2.default)(14),
	  fontWeight: 700
	};
	
	var RadioButton = function RadioButton(_ref) {
	  var value = _ref.value;
	  var checked = _ref.checked;
	  var onChange = _ref.onChange;
	  var labelText = _ref.labelText;
	  return _react2.default.createElement(
	    'div',
	    { id: 'RadioButton', style: buttonStyle },
	    _react2.default.createElement('input', {
	      id: value,
	      style: { display: 'none' },
	      type: 'radio',
	      value: value,
	      checked: checked,
	      onChange: onChange
	    }),
	    _react2.default.createElement(
	      'label',
	      { htmlFor: value },
	      _react2.default.createElement(
	        'div',
	        { style: boxStyle },
	        _react2.default.createElement(
	          _reactMotion.Motion,
	          {
	            style: {
	              opacity: (0, _reactMotion.spring)(checked ? 1 : 0, [300, 24]),
	              size: (0, _reactMotion.spring)(checked ? 0.42 : 0, [300, 17])
	            }
	          },
	          function (_ref2) {
	            var opacity = _ref2.opacity;
	            var size = _ref2.size;
	            return _react2.default.createElement('div', {
	              style: _extends({}, dotStyle, {
	                opacity: opacity,
	                transform: 'scale3d(' + size + ', ' + size + ', 1)'
	              })
	            });
	          }
	        )
	      ),
	      _react2.default.createElement(
	        'span',
	        { style: labelTextStyle },
	        labelText
	      )
	    )
	  );
	};
	
	RadioButton.propTypes = {
	  value: _react.PropTypes.string.isRequired,
	  checked: _react.PropTypes.bool.isRequired,
	  onChange: _react.PropTypes.func.isRequired,
	  labelText: _react.PropTypes.string.isRequired
	};
	
	exports.default = (0, _radium2.default)(RadioButton);

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _data = __webpack_require__(17);
	
	var _input_section = __webpack_require__(19);
	
	var _input_section2 = _interopRequireDefault(_input_section);
	
	var _text_input = __webpack_require__(20);
	
	var _text_input2 = _interopRequireDefault(_text_input);
	
	var _suggestion_list = __webpack_require__(22);
	
	var _suggestion_list2 = _interopRequireDefault(_suggestion_list);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ==================================================
	// PlaceInput
	// ==================================================
	
	var PlaceInput = function (_Component) {
	  _inherits(PlaceInput, _Component);
	
	  function PlaceInput() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, PlaceInput);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(PlaceInput)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      airportLocations: (0, _data.getCitiesAndCountries)(),
	      suggestionsVisible: false
	    }, _this.getSuggestions = function () {
	      var airportLocations = _this.state.airportLocations;
	      var place = _this.props.place;
	
	      place = place.toLowerCase().trim();
	
	      var suggestions = [];
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = airportLocations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var location = _step.value;
	
	          var i = location.toLowerCase().indexOf(place);
	
	          if (i !== -1) {
	            // make sure the locations that begin with the query come first.
	            if (i === 0) suggestions.unshift(location);else suggestions.push(location);
	          }
	        }
	
	        // max 5 suggestions.
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	
	      return suggestions.slice(0, 6);
	    }, _this.showSuggestions = function () {
	      _this.setState({ suggestionsVisible: true });
	    }, _this.hideSuggestions = function () {
	      _this.setState({ suggestionsVisible: false });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(PlaceInput, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var name = _props.name;
	      var zIndex = _props.zIndex;
	      var place = _props.place;
	      var setPlace = _props.setPlace;
	      var suggestionsVisible = this.state.suggestionsVisible;
	
	
	      return _react2.default.createElement(
	        _input_section2.default,
	        { zIndex: zIndex, expanded: !!place, labelText: name },
	        _react2.default.createElement(_text_input2.default, {
	          value: place,
	          placeholder: name,
	          onChange: function onChange(p) {
	            return setPlace(p);
	          },
	          onFocus: this.showSuggestions,
	          onBlur: this.hideSuggestions
	        }),
	        suggestionsVisible && _react2.default.createElement(_suggestion_list2.default, {
	          suggestions: this.getSuggestions(),
	          onSuggestionClick: function onSuggestionClick(p) {
	            return setPlace(p);
	          }
	        })
	      );
	    }
	  }]);
	
	  return PlaceInput;
	}(_react.Component);
	
	PlaceInput.propTypes = {
	  name: _react.PropTypes.oneOf(['From', 'To']),
	  zIndex: _react.PropTypes.number.isRequired,
	  place: _react.PropTypes.string.isRequired,
	  setPlace: _react.PropTypes.func.isRequired
	};
	
	exports.default = PlaceInput;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getDailyFlights = exports.getCitiesAndCountries = undefined;
	
	var _airports = __webpack_require__(18);
	
	var _airports2 = _interopRequireDefault(_airports);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getRandomItem = function getRandomItem(array) {
	  return array[Math.floor(Math.random() * array.length)];
	};
	
	var getRandomNumber = function getRandomNumber(_ref) {
	  var min = _ref.min;
	  var max = _ref.max;
	  return Math.floor(Math.random() * (max - min + 1) + min);
	};
	
	/**
	 * Generates a unique list of the cities and countries
	 * that have a top international airport.
	 * @returns {Array} Mixed with cities and countries.
	 */
	var getCitiesAndCountries = function getCitiesAndCountries() {
	  var citiesAndCountries = [];
	
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = _airports2.default[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var _step$value = _step.value;
	      var city = _step$value.city;
	      var country = _step$value.country;
	
	      // only add city/country if it hasn't been added yet.
	      if (citiesAndCountries.indexOf(city) === -1) {
	        citiesAndCountries.push(city);
	      }
	      if (citiesAndCountries.indexOf(country) === -1) {
	        citiesAndCountries.push(country);
	      }
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	
	  return citiesAndCountries;
	};
	
	/**
	 * Get airports based on city/country.
	 * @param {String} location Location with an international airport.
	 * @returns {Object}        List of airports.
	 */
	var getAirportMatches = function getAirportMatches(location) {
	  var lowerLocation = location.toLowerCase();
	  var matchedAirports = [];
	
	  var _iteratorNormalCompletion2 = true;
	  var _didIteratorError2 = false;
	  var _iteratorError2 = undefined;
	
	  try {
	    for (var _iterator2 = _airports2.default[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	      var airport = _step2.value;
	
	      var lowerCity = airport.city.toLowerCase();
	      var lowerCountry = airport.country.toLowerCase();
	
	      if (lowerCity === lowerLocation || lowerCountry === lowerLocation) {
	        matchedAirports.push(airport);
	      }
	    }
	  } catch (err) {
	    _didIteratorError2 = true;
	    _iteratorError2 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion2 && _iterator2.return) {
	        _iterator2.return();
	      }
	    } finally {
	      if (_didIteratorError2) {
	        throw _iteratorError2;
	      }
	    }
	  }
	
	  return matchedAirports;
	};
	
	/**
	 * Generates random flight times within max. 24 hours.
	 * @param {Date} dayDate Date instance, precise to the day.
	 * @returns {Object}     Depart & arrival dates.
	 */
	var getRandomFlightTimes = function getRandomFlightTimes(dayDate) {
	  var departDate = new Date(dayDate);
	  var arrivalDate = new Date(dayDate);
	  var offsetHours = getRandomNumber({ min: 1, max: 12 });
	
	  departDate.setHours(offsetHours);
	  arrivalDate.setHours(offsetHours + getRandomNumber({ min: 1, max: 12 }));
	
	  departDate.setMinutes(5 * getRandomNumber({ min: 0, max: 11 }));
	  arrivalDate.setMinutes(5 * getRandomNumber({ min: 0, max: 11 }));
	
	  return { departDate: departDate, arrivalDate: arrivalDate };
	};
	
	/**
	 * Generates a fictional number of flights for a certain day.
	 * @param  {Date} date
	 * @return {Number}    Amount of flights.
	 */
	var getFlightsCount = function getFlightsCount(day) {
	  return 33 - 3 * Math.floor((31 - day) / 3) - day;
	};
	
	/**
	 * Generate a fictional list of flights.
	 * @param {String} type        Type of flight. Either 'outbound' / 'inbound'.
	 * @param {String} origin      Location with an international airport to fly from.
	 * @param {String} destination Location with an international airport to fly to.
	 * @param {Date} date          Date to get the flights for.
	 * @returns {Array}            List with flights.
	 */
	var getDailyFlights = function getDailyFlights(_ref2) {
	  var type = _ref2.type;
	  var origin = _ref2.origin;
	  var destination = _ref2.destination;
	  var date = _ref2.date;
	
	  var originAirports = getAirportMatches(origin);
	  var destinationAirports = getAirportMatches(destination);
	  var flightsCount = getFlightsCount(date.getDate());
	
	  var flights = [];
	
	  // generate data for every flight.
	  for (var i = 0; i < flightsCount; i++) {
	    var _getRandomFlightTimes = getRandomFlightTimes(date);
	
	    var departDate = _getRandomFlightTimes.departDate;
	    var arrivalDate = _getRandomFlightTimes.arrivalDate;
	
	
	    flights.push({
	      id: Math.random().toString(36).substr(2, 9),
	      type: type,
	      price: getRandomNumber({ min: 80, max: 600 }),
	      depart: {
	        airport: getRandomItem(originAirports),
	        date: departDate
	      },
	      arrival: {
	        airport: getRandomItem(destinationAirports),
	        date: arrivalDate
	      }
	    });
	  }
	
	  // sort flights by origin date.
	  flights.sort(function (a, b) {
	    return a.depart.date - b.depart.date;
	  });
	
	  return flights;
	};
	
	exports.getCitiesAndCountries = getCitiesAndCountries;
	exports.getDailyFlights = getDailyFlights;

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = [
		{
			"city": "Vancouver",
			"country": "Canada",
			"iata": "YVR"
		},
		{
			"city": "Toronto",
			"country": "Canada",
			"iata": "YYZ"
		},
		{
			"city": "Brussels",
			"country": "Belgium",
			"iata": "BRU"
		},
		{
			"city": "Frankfurt",
			"country": "Germany",
			"iata": "FRA"
		},
		{
			"city": "Duesseldorf",
			"country": "Germany",
			"iata": "DUS"
		},
		{
			"city": "Munich",
			"country": "Germany",
			"iata": "MUC"
		},
		{
			"city": "Berlin",
			"country": "Germany",
			"iata": "TXL"
		},
		{
			"city": "Helsinki",
			"country": "Finland",
			"iata": "HEL"
		},
		{
			"city": "Manchester",
			"country": "United Kingdom",
			"iata": "MAN"
		},
		{
			"city": "London",
			"country": "United Kingdom",
			"iata": "LGW"
		},
		{
			"city": "London",
			"country": "United Kingdom",
			"iata": "LHR"
		},
		{
			"city": "London",
			"country": "United Kingdom",
			"iata": "STN"
		},
		{
			"city": "Amsterdam",
			"country": "Netherlands",
			"iata": "AMS"
		},
		{
			"city": "Dublin",
			"country": "Ireland",
			"iata": "DUB"
		},
		{
			"city": "Copenhagen",
			"country": "Denmark",
			"iata": "CPH"
		},
		{
			"city": "Oslo",
			"country": "Norway",
			"iata": "OSL"
		},
		{
			"city": "Stockholm",
			"country": "Sweden",
			"iata": "ARN"
		},
		{
			"city": "Johannesburg",
			"country": "South Africa",
			"iata": "JNB"
		},
		{
			"city": "Barcelona",
			"country": "Spain",
			"iata": "BCN"
		},
		{
			"city": "Madrid",
			"country": "Spain",
			"iata": "MAD"
		},
		{
			"city": "Paris",
			"country": "France",
			"iata": "CDG"
		},
		{
			"city": "Paris",
			"country": "France",
			"iata": "ORY"
		},
		{
			"city": "Milano",
			"country": "Italy",
			"iata": "MXP"
		},
		{
			"city": "Rome",
			"country": "Italy",
			"iata": "FCO"
		},
		{
			"city": "Vienna",
			"country": "Austria",
			"iata": "VIE"
		},
		{
			"city": "Lisbon",
			"country": "Portugal",
			"iata": "LIS"
		},
		{
			"city": "Zurich",
			"country": "Switzerland",
			"iata": "ZRH"
		},
		{
			"city": "Antalya",
			"country": "Turkey",
			"iata": "AYT"
		},
		{
			"city": "Istanbul",
			"country": "Turkey",
			"iata": "IST"
		},
		{
			"city": "Mexico City",
			"country": "Mexico",
			"iata": "MEX"
		},
		{
			"city": "Auckland",
			"country": "New Zealand",
			"iata": "AKL"
		},
		{
			"city": "Jeddah",
			"country": "Saudi Arabia",
			"iata": "JED"
		},
		{
			"city": "Riyadh",
			"country": "Saudi Arabia",
			"iata": "RUH"
		},
		{
			"city": "Dubai",
			"country": "United Arab Emirates",
			"iata": "DXB"
		},
		{
			"city": "Doha",
			"country": "Qatar",
			"iata": "DOH"
		},
		{
			"city": "Taipei",
			"country": "Taiwan",
			"iata": "TPE"
		},
		{
			"city": "Tokyo",
			"country": "Japan",
			"iata": "NRT"
		},
		{
			"city": "Sapporo",
			"country": "Japan",
			"iata": "CTS"
		},
		{
			"city": "Fukuoka",
			"country": "Japan",
			"iata": "FUK"
		},
		{
			"city": "Tokyo",
			"country": "Japan",
			"iata": "HND"
		},
		{
			"city": "Cheju",
			"country": "South Korea",
			"iata": "CJU"
		},
		{
			"city": "Seoul",
			"country": "South Korea",
			"iata": "GMP"
		},
		{
			"city": "Manila",
			"country": "Philippines",
			"iata": "MNL"
		},
		{
			"city": "Brasilia",
			"country": "Brazil",
			"iata": "BSB"
		},
		{
			"city": "Rio De Janeiro",
			"country": "Brazil",
			"iata": "GIG"
		},
		{
			"city": "Sao Paulo",
			"country": "Brazil",
			"iata": "GRU"
		},
		{
			"city": "Sao Paulo",
			"country": "Brazil",
			"iata": "CGH"
		},
		{
			"city": "Bogota",
			"country": "Colombia",
			"iata": "BOG"
		},
		{
			"city": "Moscow",
			"country": "Russia",
			"iata": "SVO"
		},
		{
			"city": "Mumbai",
			"country": "India",
			"iata": "BOM"
		},
		{
			"city": "Hong Kong",
			"country": "Hong Kong",
			"iata": "HKG"
		},
		{
			"city": "Delhi",
			"country": "India",
			"iata": "DEL"
		},
		{
			"city": "Seoul",
			"country": "South Korea",
			"iata": "ICN"
		},
		{
			"city": "Jakarta",
			"country": "Indonesia",
			"iata": "CGK"
		},
		{
			"city": "Kuala Lumpur",
			"country": "Malaysia",
			"iata": "KUL"
		},
		{
			"city": "Singapore",
			"country": "Singapore",
			"iata": "SIN"
		},
		{
			"city": "Brisbane",
			"country": "Australia",
			"iata": "BNE"
		},
		{
			"city": "Melbourne",
			"country": "Australia",
			"iata": "MEL"
		},
		{
			"city": "Sydney",
			"country": "Australia",
			"iata": "SYD"
		},
		{
			"city": "Beijing",
			"country": "China",
			"iata": "PEK"
		},
		{
			"city": "Guangzhou",
			"country": "China",
			"iata": "CAN"
		},
		{
			"city": "Shenzhen",
			"country": "China",
			"iata": "SZX"
		},
		{
			"city": "Kunming",
			"country": "China",
			"iata": "KMG"
		},
		{
			"city": "Xiamen",
			"country": "China",
			"iata": "XMN"
		},
		{
			"city": "Hangzhou",
			"country": "China",
			"iata": "HGH"
		},
		{
			"city": "Shanghai",
			"country": "China",
			"iata": "SHA"
		},
		{
			"city": "Chengdu",
			"country": "China",
			"iata": "CTU"
		},
		{
			"city": "Shanghai",
			"country": "China",
			"iata": "PVG"
		},
		{
			"city": "Boston",
			"country": "United States",
			"iata": "BOS"
		},
		{
			"city": "Phoenix",
			"country": "United States",
			"iata": "PHX"
		},
		{
			"city": "San Francisco",
			"country": "United States",
			"iata": "SFO"
		},
		{
			"city": "Los Angeles",
			"country": "United States",
			"iata": "LAX"
		},
		{
			"city": "Newark",
			"country": "United States",
			"iata": "EWR"
		},
		{
			"city": "Washington",
			"country": "United States",
			"iata": "DCA"
		},
		{
			"city": "Fort Lauderdale",
			"country": "United States",
			"iata": "FLL"
		},
		{
			"city": "Salt Lake City",
			"country": "United States",
			"iata": "SLC"
		},
		{
			"city": "Houston",
			"country": "United States",
			"iata": "IAH"
		},
		{
			"city": "Miami",
			"country": "United States",
			"iata": "MIA"
		},
		{
			"city": "Seattle",
			"country": "United States",
			"iata": "SEA"
		},
		{
			"city": "Detroit",
			"country": "United States",
			"iata": "DTW"
		},
		{
			"city": "Tampa",
			"country": "United States",
			"iata": "TPA"
		},
		{
			"city": "Dallas-Fort Worth",
			"country": "United States",
			"iata": "DFW"
		},
		{
			"city": "Atlanta",
			"country": "United States",
			"iata": "ATL"
		},
		{
			"city": "New York",
			"country": "United States",
			"iata": "LGA"
		},
		{
			"city": "Washington",
			"country": "United States",
			"iata": "IAD"
		},
		{
			"city": "San Diego",
			"country": "United States",
			"iata": "SAN"
		},
		{
			"city": "Chicago",
			"country": "United States",
			"iata": "MDW"
		},
		{
			"city": "Denver",
			"country": "United States",
			"iata": "DEN"
		},
		{
			"city": "Philadelphia",
			"country": "United States",
			"iata": "PHL"
		},
		{
			"city": "New York",
			"country": "United States",
			"iata": "JFK"
		},
		{
			"city": "Chicago",
			"country": "United States",
			"iata": "ORD"
		},
		{
			"city": "Baltimore",
			"country": "United States",
			"iata": "BWI"
		},
		{
			"city": "Minneapolis",
			"country": "United States",
			"iata": "MSP"
		},
		{
			"city": "Charlotte",
			"country": "United States",
			"iata": "CLT"
		},
		{
			"city": "Las Vegas",
			"country": "United States",
			"iata": "LAS"
		},
		{
			"city": "Orlando",
			"country": "United States",
			"iata": "MCO"
		},
		{
			"city": "Bangkok",
			"country": "Thailand",
			"iata": "BKK"
		},
		{
			"city": "Athens",
			"country": "Greece",
			"iata": "ATH"
		},
		{
			"city": "Palma de Mallorca",
			"country": "Spain",
			"iata": "PMI"
		},
		{
			"city": "Moscow",
			"country": "Russia",
			"iata": "DME"
		}
	];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _radium = __webpack_require__(3);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _reactMotion = __webpack_require__(15);
	
	var _toEm = __webpack_require__(7);
	
	var _toEm2 = _interopRequireDefault(_toEm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// ==================================================
	// InputSection
	// ==================================================
	
	var getSectionMotionStyle = function getSectionMotionStyle(hidden) {
	  return {
	    scaleY: (0, _reactMotion.spring)(hidden ? 0 : 1, { stiffness: 300, damping: 17 }),
	    opacity: (0, _reactMotion.spring)(hidden ? 0 : 1, { stiffness: 300, damping: 24 })
	  };
	};
	var getSectionStyle = function getSectionStyle(_ref) {
	  var zIndex = _ref.zIndex;
	  var scaleY = _ref.scaleY;
	  var opacity = _ref.opacity;
	  return {
	    zIndex: zIndex,
	    position: 'relative',
	    marginBottom: (0, _toEm2.default)(24),
	    transform: 'scale3d(1, ' + Math.max(0, scaleY) + ', 1)',
	    transformOrigin: 'center top',
	    opacity: opacity
	  };
	};
	var labelStyle = {
	  position: 'absolute',
	  top: 0,
	  left: 0,
	  paddingLeft: '0.4em',
	  fontSize: (0, _toEm2.default)(14),
	  fontWeight: 700
	};
	var getWrapMotionStyle = function getWrapMotionStyle(expanded) {
	  return {
	    y: (0, _reactMotion.spring)(expanded ? 20 : 0, { stiffness: 300, damping: 17 })
	  };
	};
	var getWrapStyle = function getWrapStyle(y) {
	  return {
	    position: 'relative',
	    transform: 'translate3d(0, ' + y + 'px, 0)'
	  };
	};
	
	var InputSection = function InputSection(_ref2) {
	  var zIndex = _ref2.zIndex;
	  var expanded = _ref2.expanded;
	  var labelText = _ref2.labelText;
	  var hidden = _ref2.hidden;
	  var children = _ref2.children;
	  return _react2.default.createElement(
	    _reactMotion.Motion,
	    { style: getSectionMotionStyle(hidden) },
	    function (_ref3) {
	      var scaleY = _ref3.scaleY;
	      var opacity = _ref3.opacity;
	      return _react2.default.createElement(
	        'div',
	        {
	          id: 'InputSection',
	          style: getSectionStyle({ zIndex: zIndex, scaleY: scaleY, opacity: opacity })
	        },
	        _react2.default.createElement(
	          'div',
	          { style: labelStyle },
	          labelText
	        ),
	        _react2.default.createElement(
	          _reactMotion.Motion,
	          { style: getWrapMotionStyle(expanded) },
	          function (_ref4) {
	            var y = _ref4.y;
	            return _react2.default.createElement(
	              'div',
	              { style: getWrapStyle(y) },
	              children
	            );
	          }
	        )
	      );
	    }
	  );
	};
	
	InputSection.propTypes = {
	  zIndex: _react.PropTypes.number,
	  expanded: _react.PropTypes.bool,
	  labelText: _react.PropTypes.string,
	  hidden: _react.PropTypes.bool,
	  children: _react.PropTypes.node.isRequired
	};
	
	exports.default = (0, _radium2.default)(InputSection);

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // ==================================================
	// TextInput
	// ==================================================
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _radium = __webpack_require__(3);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _common_styles = __webpack_require__(21);
	
	var _toEm = __webpack_require__(7);
	
	var _toEm2 = _interopRequireDefault(_toEm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = {
	  base: _extends({}, _common_styles.resetInput, {
	    padding: '1.2em 1.1em 1em',
	    fontSize: (0, _toEm2.default)(17),
	    background: '#f2f2f2',
	    borderRadius: '1px',
	    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.03)'
	  }),
	  clickable: {
	    cursor: 'pointer'
	  }
	};
	
	var TextInput = function TextInput(_ref) {
	  var value = _ref.value;
	  var placeholder = _ref.placeholder;
	  var _onChange = _ref.onChange;
	  var onFocus = _ref.onFocus;
	  var onBlur = _ref.onBlur;
	  var onClick = _ref.onClick;
	  var readOnly = _ref.readOnly;
	  return _react2.default.createElement('input', {
	    id: 'TextInput',
	    style: [styles.base, !!onClick && styles.clickable],
	    type: 'text',
	    value: value,
	    placeholder: placeholder,
	    onChange: function onChange(e) {
	      return _onChange(e.target.value);
	    },
	    onFocus: onFocus,
	    onBlur: onBlur,
	    onClick: onClick,
	    readOnly: readOnly,
	    autoComplete: 'off'
	  });
	};
	
	TextInput.propTypes = {
	  value: _react.PropTypes.string,
	  placeholder: _react.PropTypes.string,
	  onChange: _react.PropTypes.func,
	  onFocus: _react.PropTypes.func,
	  onBlur: _react.PropTypes.func,
	  onClick: _react.PropTypes.func,
	  readOnly: _react.PropTypes.bool
	};
	
	exports.default = (0, _radium2.default)(TextInput);

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var resetHeading = exports.resetHeading = {
	  padding: 0,
	  margin: 0,
	  fontWeight: 400,
	  lineHeight: 1.4
	};
	var resetList = exports.resetList = resetHeading;
	var resetAnchor = exports.resetAnchor = {
	  color: 'inherit',
	  textDecoration: 'none',
	  ':hover': {
	    color: 'inherit',
	    opacity: 1
	  }
	};
	var resetFontSmooth = exports.resetFontSmooth = {
	  textRendering: 'optimizeLegibility',
	  WebkitFontSmoothing: 'antialiased',
	  MozMacOsxFontSmoothing: 'grayscale'
	};
	var resetInput = exports.resetInput = {
	  display: 'block',
	  width: '100%',
	  padding: 0,
	  margin: 0,
	  border: 0,
	  outline: 'none',
	  resize: 'none'
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // ==================================================
	// SuggestionList
	// ==================================================
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _radium = __webpack_require__(3);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _common_styles = __webpack_require__(21);
	
	var _suggestion_item = __webpack_require__(23);
	
	var _suggestion_item2 = _interopRequireDefault(_suggestion_item);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var listStyle = _extends({}, _common_styles.resetList, {
	  position: 'absolute',
	  top: 0,
	  left: 0,
	  width: '100%'
	});
	
	var SuggestionList = function SuggestionList(_ref) {
	  var suggestions = _ref.suggestions;
	  var onSuggestionClick = _ref.onSuggestionClick;
	  return _react2.default.createElement(
	    'div',
	    { id: 'SuggestionList', style: { position: 'relative' } },
	    _react2.default.createElement(
	      'ul',
	      { style: listStyle },
	      suggestions.map(function (suggestion, i) {
	        return _react2.default.createElement(_suggestion_item2.default, {
	          key: i,
	          suggestion: suggestion,
	          onClick: function onClick() {
	            return onSuggestionClick(suggestion);
	          }
	        });
	      })
	    )
	  );
	};
	
	SuggestionList.propTypes = {
	  suggestions: _react.PropTypes.arrayOf(_react.PropTypes.string.isRequired).isRequired,
	  onSuggestionClick: _react.PropTypes.func.isRequired
	};
	
	exports.default = (0, _radium2.default)(SuggestionList);

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _radium = __webpack_require__(3);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _toEm = __webpack_require__(7);
	
	var _toEm2 = _interopRequireDefault(_toEm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var style = {
	  padding: (0, _toEm2.default)('8 16'),
	  listStyle: 'none',
	  cursor: 'pointer',
	  background: '#fff',
	  ':hover': {
	    background: '#fbfbfb'
	  }
	}; // ==================================================
	// SuggestionItem
	// ==================================================
	
	var SuggestionItem = function SuggestionItem(_ref) {
	  var suggestion = _ref.suggestion;
	  var onClick = _ref.onClick;
	  return _react2.default.createElement(
	    'li',
	    {
	      id: 'SuggestionItem',
	      style: style,
	      onMouseDown: onClick
	    },
	    suggestion
	  );
	};
	
	SuggestionItem.propTypes = {
	  suggestion: _react.PropTypes.string.isRequired,
	  onClick: _react.PropTypes.func.isRequired
	
	};
	
	exports.default = (0, _radium2.default)(SuggestionItem);

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _moment = __webpack_require__(11);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _input_section = __webpack_require__(19);
	
	var _input_section2 = _interopRequireDefault(_input_section);
	
	var _text_input = __webpack_require__(20);
	
	var _text_input2 = _interopRequireDefault(_text_input);
	
	var _datepicker = __webpack_require__(25);
	
	var _datepicker2 = _interopRequireDefault(_datepicker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ==================================================
	// DateInput
	// ==================================================
	
	var DateInput = function (_Component) {
	  _inherits(DateInput, _Component);
	
	  function DateInput() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, DateInput);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(DateInput)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      datepickerVisible: false
	    }, _this.showDatepicker = function () {
	      _this.setState({ datepickerVisible: true });
	    }, _this.hideDatepicker = function () {
	      _this.setState({ datepickerVisible: false });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(DateInput, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props;
	      var name = _props.name;
	      var zIndex = _props.zIndex;
	      var minDate = _props.minDate;
	      var date = _props.date;
	      var setDate = _props.setDate;
	      var hidden = _props.hidden;
	      var datepickerVisible = this.state.datepickerVisible;
	
	
	      return _react2.default.createElement(
	        _input_section2.default,
	        {
	          zIndex: zIndex,
	          expanded: !!date,
	          labelText: name,
	          hidden: hidden
	        },
	        _react2.default.createElement(_text_input2.default, {
	          value: date ? (0, _moment2.default)(date).format('MMMM D, YYYY') : '',
	          placeholder: name,
	          onClick: this.showDatepicker,
	          readOnly: true
	        }),
	        datepickerVisible && _react2.default.createElement(_datepicker2.default, {
	          selectedDate: date,
	          minDate: minDate || (0, _moment2.default)().startOf('day').toDate(),
	          maxDate: (0, _moment2.default)().startOf('day').add(1, 'y').toDate(),
	          onChange: function onChange(d) {
	            _this2.hideDatepicker();setDate(d);
	          },
	          onClickOutside: this.hideDatepicker
	        })
	      );
	    }
	  }]);
	
	  return DateInput;
	}(_react.Component);
	
	DateInput.propTypes = {
	  name: _react.PropTypes.oneOf(['Depart', 'Return']),
	  zIndex: _react.PropTypes.number.isRequired,
	  minDate: _react.PropTypes.instanceOf(Date),
	  date: _react.PropTypes.instanceOf(Date),
	  setDate: _react.PropTypes.func.isRequired,
	  hidden: _react.PropTypes.bool
	};
	
	exports.default = DateInput;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactOnclickoutside = __webpack_require__(26);
	
	var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);
	
	var _datepicker = __webpack_require__(27);
	
	var _datepicker2 = _interopRequireDefault(_datepicker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ==================================================
	// DatepickerContainer
	// ==================================================
	
	var DatepickerContainer = function (_Component) {
	  _inherits(DatepickerContainer, _Component);
	
	  function DatepickerContainer(props) {
	    _classCallCheck(this, DatepickerContainer);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DatepickerContainer).call(this));
	
	    _initialiseProps.call(_this);
	
	    var activeDate = props.activeDate;
	
	    var dateNow = new Date();
	
	    _this.state = activeDate ? {
	      selectedMonth: activeDate.getMonth(),
	      selectedYear: activeDate.getFullYear()
	    } : {
	      selectedMonth: dateNow.getMonth(),
	      selectedYear: dateNow.getFullYear()
	    };
	    return _this;
	  }
	
	  _createClass(DatepickerContainer, [{
	    key: 'getMonthOptions',
	    value: function getMonthOptions() {
	      var selectedYear = this.state.selectedYear;
	      var _props = this.props;
	      var minDate = _props.minDate;
	      var maxDate = _props.maxDate;
	
	      var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	
	      var minMonth = selectedYear === minDate.getFullYear() ? minDate.getMonth() : 0;
	      var maxMonth = selectedYear === maxDate.getFullYear() ? maxDate.getMonth() : 11;
	
	      var options = [];
	      for (var month = minMonth; month <= maxMonth; month++) {
	        options.push({ value: month, label: monthNames[month] });
	      }
	
	      return options;
	    }
	  }, {
	    key: 'getDaysInMonth',
	    value: function getDaysInMonth(_ref) {
	      var year = _ref.year;
	      var month = _ref.month;
	
	      return new Date(year, month - 1, 0).getDate();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _state = this.state;
	      var selectedMonth = _state.selectedMonth;
	      var selectedYear = _state.selectedYear;
	      var onChange = this.props.onChange;
	
	
	      return _react2.default.createElement(_datepicker2.default, {
	        isDatePossible: this.isDatePossible,
	        selectedMonth: selectedMonth,
	        selectedYear: selectedYear,
	        setSelectedMonth: this.setSelectedMonth,
	        setSelectedYear: this.setSelectedYear,
	        monthOptions: this.getMonthOptions(),
	        yearOptions: this.getYearOptions(),
	        calendarDays: this.getCalendarDays(),
	        onChange: onChange
	      });
	    }
	  }]);
	
	  return DatepickerContainer;
	}(_react.Component);
	
	var _initialiseProps = function _initialiseProps() {
	  var _this2 = this;
	
	  this.setSelectedMonth = function (selectedMonth) {
	    var selectedYear = _this2.state.selectedYear;
	
	    var nextState = { selectedMonth: selectedMonth };
	
	    // jump years from December to January and back.
	    if (selectedMonth < 0) {
	      nextState = {
	        selectedYear: selectedYear - 1,
	        selectedMonth: 11
	      };
	    } else if (selectedMonth > 11) {
	      nextState = {
	        selectedYear: selectedYear + 1,
	        selectedMonth: 0
	      };
	    }
	
	    _this2.setState(nextState);
	  };
	
	  this.setSelectedYear = function (selectedYear) {
	    var _props2 = _this2.props;
	    var minDate = _props2.minDate;
	    var maxDate = _props2.maxDate;
	    var selectedMonth = _this2.state.selectedMonth;
	
	    var minYear = minDate.getFullYear();
	    var minMonth = minDate.getMonth();
	    var maxYear = maxDate.getFullYear();
	    var maxMonth = maxDate.getMonth();
	    var nextState = { selectedYear: selectedYear };
	
	    // make sure we don't jump outside date range by accident.
	    if (selectedYear === minYear && selectedMonth < minMonth) {
	      nextState = { selectedYear: selectedYear, selectedMonth: minMonth };
	    }
	    if (selectedYear === maxYear && selectedMonth > maxMonth) {
	      nextState = { selectedYear: selectedYear, selectedMonth: maxMonth };
	    }
	
	    _this2.setState(nextState);
	  };
	
	  this.getYearOptions = function () {
	    var _props3 = _this2.props;
	    var minDate = _props3.minDate;
	    var maxDate = _props3.maxDate;
	
	    var minYear = minDate.getFullYear();
	    var maxYear = maxDate.getFullYear();
	
	    var options = [];
	    for (var year = minYear; year <= maxYear; year++) {
	      options.push({ value: year, label: String(year) });
	    }
	
	    return options;
	  };
	
	  this.getCalendarDays = function () {
	    var _state2 = _this2.state;
	    var selectedMonth = _state2.selectedMonth;
	    var selectedYear = _state2.selectedYear;
	    var activeDate = _this2.props.activeDate;
	
	
	    var daysInMonth = _this2.getDaysInMonth({
	      year: selectedYear,
	      month: selectedMonth
	    });
	
	    var days = [];
	    for (var day = 1; day <= daysInMonth; day++) {
	      var date = new Date(selectedYear, selectedMonth, day);
	
	      days.push({
	        day: day,
	        inactive: !_this2.isDatePossible(date),
	        selected: Number(date) === Number(activeDate)
	      });
	    }
	
	    return days;
	  };
	
	  this.isDatePossible = function (date) {
	    var _props4 = _this2.props;
	    var minDate = _props4.minDate;
	    var maxDate = _props4.maxDate;
	
	    return !!minDate && !!maxDate && date >= minDate && date <= maxDate;
	  };
	
	  this.handleClickOutside = function () {
	    var onClickOutside = _this2.props.onClickOutside;
	
	    if (onClickOutside) onClickOutside();
	  };
	};
	
	DatepickerContainer.propTypes = {
	  activeDate: _react.PropTypes.instanceOf(Date),
	  minDate: _react.PropTypes.instanceOf(Date),
	  maxDate: _react.PropTypes.instanceOf(Date),
	  onChange: _react.PropTypes.func.isRequired,
	  onClickOutside: _react.PropTypes.func
	};
	
	exports.default = (0, _reactOnclickoutside2.default)(DatepickerContainer);

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_26__;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _radium = __webpack_require__(3);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _toEm = __webpack_require__(7);
	
	var _toEm2 = _interopRequireDefault(_toEm);
	
	var _header = __webpack_require__(28);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _calendar = __webpack_require__(30);
	
	var _calendar2 = _interopRequireDefault(_calendar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var pickerStyle = {
	  position: 'absolute',
	  top: 0,
	  left: 0,
	  // zIndex: 1,
	  maxWidth: (0, _toEm2.default)(276),
	  width: '100%',
	  padding: (0, _toEm2.default)(12),
	  overflow: 'hidden',
	  background: '#fff',
	  borderRadius: (0, _toEm2.default)(2),
	  userSelect: 'none'
	}; // ==================================================
	// Datepicker
	// ==================================================
	
	var Datepicker = function Datepicker(_ref) {
	  var isDatePossible = _ref.isDatePossible;
	  var selectedMonth = _ref.selectedMonth;
	  var setSelectedMonth = _ref.setSelectedMonth;
	  var selectedYear = _ref.selectedYear;
	  var setSelectedYear = _ref.setSelectedYear;
	  var monthOptions = _ref.monthOptions;
	  var yearOptions = _ref.yearOptions;
	  var calendarDays = _ref.calendarDays;
	  var onChange = _ref.onChange;
	  return _react2.default.createElement(
	    'div',
	    { id: 'Datepicker', style: { position: 'relative' } },
	    _react2.default.createElement(
	      'div',
	      { style: pickerStyle },
	      _react2.default.createElement(_header2.default, {
	        buttonLeftDisabled: !isDatePossible(new Date(selectedYear, selectedMonth, 0)),
	        buttonRightDisabled: !isDatePossible(new Date(selectedYear, selectedMonth + 1, 1)),
	        onButtonLeftClick: function onButtonLeftClick() {
	          return setSelectedMonth(selectedMonth - 1);
	        },
	        onButtonRightClick: function onButtonRightClick() {
	          return setSelectedMonth(selectedMonth + 1);
	        },
	        selectLeftValue: selectedMonth,
	        selectLeftOptions: monthOptions,
	        selectLeftOnChange: function selectLeftOnChange(month) {
	          return setSelectedMonth(Number(month));
	        },
	        selectRightValue: selectedYear,
	        selectRightOptions: yearOptions,
	        selectRightOnChange: function selectRightOnChange(year) {
	          return setSelectedYear(Number(year));
	        }
	      }),
	      _react2.default.createElement(_calendar2.default, {
	        days: calendarDays,
	        onDayClick: function onDayClick(day) {
	          return onChange(new Date(selectedYear, selectedMonth, day));
	        }
	      })
	    )
	  );
	};
	
	Datepicker.propTypes = {
	  isDatePossible: _react.PropTypes.func.isRequired,
	  selectedMonth: _react.PropTypes.number.isRequired,
	  setSelectedMonth: _react.PropTypes.func.isRequired,
	  selectedYear: _react.PropTypes.number.isRequired,
	  setSelectedYear: _react.PropTypes.func.isRequired,
	  monthOptions: _react.PropTypes.array.isRequired,
	  yearOptions: _react.PropTypes.array.isRequired,
	  calendarDays: _react.PropTypes.array.isRequired,
	  onChange: _react.PropTypes.func.isRequired
	};
	
	exports.default = (0, _radium2.default)(Datepicker);

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _radium = __webpack_require__(3);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _toEm = __webpack_require__(7);
	
	var _toEm2 = _interopRequireDefault(_toEm);
	
	var _select = __webpack_require__(29);
	
	var _select2 = _interopRequireDefault(_select);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// ==================================================
	// Datepicker Header
	// ==================================================
	
	var headerStyle = {
	  position: 'relative',
	  textAlign: 'center'
	};
	var buttonStyles = {
	  base: {
	    position: 'absolute',
	    top: 0,
	    padding: (0, _toEm2.default)('10 8'),
	    cursor: 'pointer'
	  },
	  left: {
	    left: 0
	  },
	  right: {
	    right: 0
	  }
	};
	var arrowStyles = {
	  base: {
	    width: 0,
	    borderTop: (0, _toEm2.default)(8) + ' solid transparent',
	    borderRight: (0, _toEm2.default)(8) + ' solid transparent',
	    borderBottom: (0, _toEm2.default)(8) + ' solid transparent',
	    borderLeft: (0, _toEm2.default)(8) + ' solid transparent'
	  },
	  previous: {
	    borderRight: (0, _toEm2.default)(8) + ' solid #f2f2f2'
	  },
	  next: {
	    borderLeft: (0, _toEm2.default)(8) + ' solid #f2f2f2'
	  },
	  disabled: {
	    borderLeft: 'none',
	    borderRight: 'none'
	  }
	};
	
	var Header = function Header(_ref) {
	  var buttonLeftDisabled = _ref.buttonLeftDisabled;
	  var buttonRightDisabled = _ref.buttonRightDisabled;
	  var onButtonLeftClick = _ref.onButtonLeftClick;
	  var onButtonRightClick = _ref.onButtonRightClick;
	  var selectLeftValue = _ref.selectLeftValue;
	  var selectLeftOptions = _ref.selectLeftOptions;
	  var selectLeftOnChange = _ref.selectLeftOnChange;
	  var selectRightValue = _ref.selectRightValue;
	  var selectRightOptions = _ref.selectRightOptions;
	  var selectRightOnChange = _ref.selectRightOnChange;
	  return _react2.default.createElement(
	    'div',
	    { id: 'DatepickerHeader', style: headerStyle },
	    _react2.default.createElement(
	      'div',
	      {
	        style: [buttonStyles.base, buttonStyles.left],
	        onClick: !buttonLeftDisabled && onButtonLeftClick
	      },
	      _react2.default.createElement('div', {
	        style: [arrowStyles.base, arrowStyles.previous, buttonLeftDisabled && arrowStyles.disabled]
	      })
	    ),
	    _react2.default.createElement(
	      'div',
	      {
	        style: [buttonStyles.base, buttonStyles.right],
	        onClick: !buttonRightDisabled && onButtonRightClick
	      },
	      _react2.default.createElement('div', {
	        style: [arrowStyles.base, arrowStyles.next, buttonRightDisabled && arrowStyles.disabled]
	      })
	    ),
	    _react2.default.createElement(
	      'div',
	      { style: { padding: (0, _toEm2.default)('6 0 14') } },
	      _react2.default.createElement(_select2.default, {
	        value: selectLeftValue,
	        options: selectLeftOptions,
	        onChange: selectLeftOnChange
	      }),
	      _react2.default.createElement(_select2.default, {
	        value: selectRightValue,
	        options: selectRightOptions,
	        onChange: selectRightOnChange
	      })
	    )
	  );
	};
	
	Header.propTypes = {
	  buttonLeftDisabled: _react.PropTypes.bool,
	  buttonRightDisabled: _react.PropTypes.bool,
	  onButtonLeftClick: _react.PropTypes.func.isRequired,
	  onButtonRightClick: _react.PropTypes.func.isRequired,
	  selectLeftValue: _react.PropTypes.number.isRequired,
	  selectLeftOptions: _react.PropTypes.array.isRequired,
	  selectLeftOnChange: _react.PropTypes.func.isRequired,
	  selectRightValue: _react.PropTypes.number.isRequired,
	  selectRightOptions: _react.PropTypes.array.isRequired,
	  selectRightOnChange: _react.PropTypes.func.isRequired
	};
	
	exports.default = (0, _radium2.default)(Header);

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _radium = __webpack_require__(3);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _toEm = __webpack_require__(7);
	
	var _toEm2 = _interopRequireDefault(_toEm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var wrapStyle = {
	  position: 'relative',
	  display: 'inline-block',
	  paddingRight: '0.5em',
	  marginRight: '0.43em'
	}; // ==================================================
	// Datepicker Select
	// ==================================================
	
	var arrowStyle = {
	  position: 'absolute',
	  top: '0.68em',
	  right: 0,
	  width: 0,
	  pointerEvents: 'none',
	  borderTop: (0, _toEm2.default)(4) + ' solid #000',
	  borderRight: (0, _toEm2.default)(4) + ' solid transparent',
	  borderBottom: (0, _toEm2.default)(4) + ' solid transparent',
	  borderLeft: (0, _toEm2.default)(4) + ' solid transparent'
	};
	var selectStyle = {
	  padding: '0 .25em',
	  fontSize: (0, _toEm2.default)(15),
	  background: 'none',
	  border: 0,
	  outline: 'none',
	  appearance: 'none'
	};
	
	var id = 'DatepickerSelect';
	var Select = function Select(_ref) {
	  var value = _ref.value;
	  var options = _ref.options;
	  var _onChange = _ref.onChange;
	  return _react2.default.createElement(
	    'div',
	    { id: id, style: wrapStyle },
	    _react2.default.createElement(_radium.Style, {
	      scopeSelector: '#' + id + '::-ms-expand',
	      rules: { display: 'none' }
	    }),
	    _react2.default.createElement('div', { style: arrowStyle }),
	    _react2.default.createElement(
	      'select',
	      {
	        style: selectStyle,
	        value: value,
	        onChange: function onChange(e) {
	          return _onChange(e.target.value);
	        }
	      },
	      options.map(function (option, i) {
	        return _react2.default.createElement(
	          'option',
	          { key: i, value: option.value },
	          option.label
	        );
	      })
	    )
	  );
	};
	
	Select.propTypes = {
	  value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]).isRequired,
	  options: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]).isRequired,
	    label: _react.PropTypes.string.isRequired
	  }).isRequired).isRequired,
	  onChange: _react.PropTypes.func.isRequired
	};
	
	exports.default = (0, _radium2.default)(Select);

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // ==================================================
	// Datepicker Calendar
	// ==================================================
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _radium = __webpack_require__(3);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _color = __webpack_require__(5);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _toEm = __webpack_require__(7);
	
	var _toEm2 = _interopRequireDefault(_toEm);
	
	var _colors = __webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var weekdayRowStyle = {
	  paddingBottom: (0, _toEm2.default)(3.25)
	};
	var cellStyle = {
	  display: 'inline-block',
	  width: '14.285%',
	  textAlign: 'center'
	};
	var weekdayCellStyle = _extends({}, cellStyle, {
	  fontWeight: 700
	});
	var weekdayCellTextStyle = {
	  fontSize: (0, _toEm2.default)(13)
	};
	var dayCellWrapStyle = {
	  borderTop: (0, _toEm2.default)(1) + ' solid #f7f7f7',
	  borderLeft: (0, _toEm2.default)(1) + ' solid #f7f7f7'
	};
	var dayCellStyles = {
	  base: _extends({}, cellStyle, {
	    padding: (0, _toEm2.default)('6 0'),
	    cursor: 'pointer',
	    borderRight: (0, _toEm2.default)(1) + ' solid #f7f7f7',
	    borderBottom: (0, _toEm2.default)(1) + ' solid #f7f7f7',
	    ':hover': {
	      color: '#fff',
	      background: (0, _color2.default)(_colors.BLUE).clearer(0.1).rgbString()
	    }
	  }),
	  inactive: {
	    color: 'rgba(0, 0, 0, .2)',
	    cursor: 'default',
	    background: 'none',
	    ':hover': {
	      color: 'rgba(0, 0, 0, .2)',
	      background: 'none'
	    }
	  },
	  selected: {
	    color: '#fff',
	    background: (0, _color2.default)(_colors.BLUE).clearer(0.1).rgbString()
	  }
	};
	var dayCellTextStyle = {
	  fontSize: (0, _toEm2.default)(14)
	};
	
	var Calendar = function Calendar(_ref) {
	  var days = _ref.days;
	  var onDayClick = _ref.onDayClick;
	  return _react2.default.createElement(
	    'div',
	    { id: 'DatepickerCalendar' },
	    _react2.default.createElement(
	      'div',
	      { style: weekdayRowStyle },
	      ['So', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(function (weekday, i) {
	        return _react2.default.createElement(
	          'div',
	          { key: i, style: weekdayCellStyle },
	          _react2.default.createElement(
	            'span',
	            { style: weekdayCellTextStyle },
	            weekday
	          )
	        );
	      })
	    ),
	    _react2.default.createElement(
	      'div',
	      { style: dayCellWrapStyle },
	      days.map(function (_ref2, i) {
	        var day = _ref2.day;
	        var inactive = _ref2.inactive;
	        var selected = _ref2.selected;
	        return _react2.default.createElement(
	          'div',
	          {
	            key: i,
	            style: [dayCellStyles.base, inactive && dayCellStyles.inactive, selected && dayCellStyles.selected],
	            onClick: function onClick() {
	              return onDayClick(day);
	            }
	          },
	          _react2.default.createElement(
	            'span',
	            { style: dayCellTextStyle },
	            day
	          )
	        );
	      })
	    )
	  );
	};
	
	Calendar.propTypes = {
	  onDayClick: _react.PropTypes.func.isRequired,
	  days: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    day: _react.PropTypes.number.isRequired,
	    inactive: _react.PropTypes.bool.isRequired,
	    selected: _react.PropTypes.bool.isRequired
	  }).isRequired).isRequired
	};
	
	exports.default = (0, _radium2.default)(Calendar);

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // ==================================================
	// SlidePanel
	// ==================================================
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _color = __webpack_require__(5);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _reactMotion = __webpack_require__(15);
	
	var _toEm = __webpack_require__(7);
	
	var _toEm2 = _interopRequireDefault(_toEm);
	
	var _colors = __webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getSlideStyle = function getSlideStyle(x) {
	  return {
	    transform: 'translate3d(' + x + '%, 0, 0)',
	    WebkitTransform: 'translate3d(' + x + '%, 0, 0)'
	  };
	};
	var navStyle = {
	  position: 'relative',
	  height: (0, _toEm2.default)(42)
	};
	var navItemStyles = {
	  base: {
	    width: '100%',
	    paddingBottom: (0, _toEm2.default)(10)
	  },
	  back: {
	    position: 'absolute',
	    top: 0,
	    left: '138%'
	  }
	};
	var navButtonStyle = {
	  padding: (0, _toEm2.default)(4),
	  cursor: 'pointer'
	};
	var navButtonTextStyle = {
	  fontSize: (0, _toEm2.default)(17),
	  color: (0, _color2.default)(_colors.DARK_GRAY).clearer(0.75).rgbString(),
	  userSelect: 'none'
	};
	var paneWrapStyle = {
	  position: 'relative'
	};
	var paneStyles = {
	  base: {
	    position: 'absolute',
	    top: 0,
	    width: '100%'
	  },
	  left: {
	    left: 0
	  },
	  right: {
	    left: '138%'
	  }
	};
	
	var SlidePanel = function SlidePanel(_ref) {
	  var visiblePane = _ref.visiblePane;
	  var onBackClick = _ref.onBackClick;
	  var rightPane = _ref.rightPane;
	  var leftPane = _ref.leftPane;
	  return _react2.default.createElement(
	    'div',
	    { id: 'SlidePanel' },
	    _react2.default.createElement(
	      _reactMotion.Motion,
	      {
	        style: {
	          x: (0, _reactMotion.spring)(visiblePane === 'right' ? -138 : 0)
	        }
	      },
	      function (_ref2) {
	        var x = _ref2.x;
	        return _react2.default.createElement(
	          'div',
	          { style: getSlideStyle(x) },
	          _react2.default.createElement(
	            'div',
	            { style: navStyle },
	            _react2.default.createElement(
	              'div',
	              { style: _extends({}, navItemStyles.base, navItemStyles.back) },
	              _react2.default.createElement(
	                'div',
	                { style: navButtonStyle, onClick: onBackClick },
	                _react2.default.createElement(
	                  'span',
	                  { style: navButtonTextStyle },
	                  'Back'
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: paneWrapStyle },
	            _react2.default.createElement(
	              'div',
	              { style: _extends({}, paneStyles.base, paneStyles.left) },
	              leftPane
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: _extends({}, paneStyles.base, paneStyles.right) },
	              rightPane
	            )
	          )
	        );
	      }
	    )
	  );
	};
	
	SlidePanel.propTypes = {
	  visiblePane: _react.PropTypes.oneOf(['left', 'right']).isRequired,
	  onBackClick: _react.PropTypes.func.isRequired,
	  rightPane: _react.PropTypes.node.isRequired,
	  leftPane: _react.PropTypes.node.isRequired
	};
	
	// not using Radium here for animation performance.
	exports.default = SlidePanel;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _data = __webpack_require__(17);
	
	var _loader = __webpack_require__(33);
	
	var _loader2 = _interopRequireDefault(_loader);
	
	var _transition_list = __webpack_require__(34);
	
	var _transition_list2 = _interopRequireDefault(_transition_list);
	
	var _flight_item = __webpack_require__(35);
	
	var _flight_item2 = _interopRequireDefault(_flight_item);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ==================================================
	// FlightList
	// ----
	// NOTE: Bit hacky but does the job
	// ==================================================
	
	var FlightList = function (_Component) {
	  _inherits(FlightList, _Component);
	
	  function FlightList() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, FlightList);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(FlightList)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      airportLocations: (0, _data.getCitiesAndCountries)(),
	      loading: false,
	      flights: []
	    }, _this.setFlightsDelayed = function (flights) {
	      setTimeout(function () {
	        _this.setState({ loading: false, flights: flights });
	      }, 1200);
	    }, _this.getFlights = function (_ref) {
	      var type = _ref.type;
	      var origin = _ref.origin;
	      var destination = _ref.destination;
	      var date = _ref.date;
	
	      var flight = [];
	
	      if (!!origin && !!destination && !!date) {
	        if (_this.doesAirportExist(origin) && _this.doesAirportExist(destination)) {
	          flight = (0, _data.getDailyFlights)({ type: type, origin: origin, destination: destination, date: date });
	        }
	      }
	
	      return flight;
	    }, _this.doesAirportExist = function (location) {
	      var airportLocations = _this.state.airportLocations;
	
	      return airportLocations.indexOf(location) !== -1;
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(FlightList, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var type = nextProps.type;
	      var origin = nextProps.origin;
	      var destination = nextProps.destination;
	      var date = nextProps.date;
	
	
	      if (this.shouldGetFlights(nextProps)) {
	        var flights = this.getFlights({ type: type, origin: origin, destination: destination, date: date });
	        var hasFlights = !!flights.length;
	
	        // simulate loading.
	        if (hasFlights) {
	          this.setState({ loading: true, flights: [] });
	          this.setFlightsDelayed(flights);
	        } else {
	          this.setState({ flights: flights });
	        }
	      }
	    }
	  }, {
	    key: 'shouldGetFlights',
	    value: function shouldGetFlights(_ref2) {
	      var origin = _ref2.origin;
	      var destination = _ref2.destination;
	      var date = _ref2.date;
	      var disabled = _ref2.disabled;
	
	      return !disabled && (origin !== this.props.origin || destination !== this.props.destination || date !== this.props.date || disabled !== this.props.disabled);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var disabled = _props.disabled;
	      var animationDisabled = _props.animationDisabled;
	      var flightClickDisabled = _props.flightClickDisabled;
	      var onFlightClick = _props.onFlightClick;
	      var _state = this.state;
	      var loading = _state.loading;
	      var flights = _state.flights;
	
	
	      return _react2.default.createElement(
	        'div',
	        { id: 'FlightList' },
	        _react2.default.createElement(_loader2.default, { hidden: !loading }),
	        _react2.default.createElement(_transition_list2.default, {
	          animationDisabled: animationDisabled,
	          items: disabled ? [] : flights,
	          Item: _flight_item2.default,
	          itemProps: { selectDisabled: flightClickDisabled },
	          itemHeight: 88,
	          onItemClick: flightClickDisabled ? function () {} : onFlightClick
	        })
	      );
	    }
	  }]);
	
	  return FlightList;
	}(_react.Component);
	
	FlightList.propTypes = {
	  type: _react.PropTypes.oneOf(['outbound', 'inbound']).isRequired,
	  origin: _react.PropTypes.string,
	  destination: _react.PropTypes.string,
	  date: _react.PropTypes.instanceOf(Date),
	  disabled: _react.PropTypes.bool,
	  animationDisabled: _react.PropTypes.bool,
	  flightClickDisabled: _react.PropTypes.bool,
	  onFlightClick: _react.PropTypes.func
	};
	
	exports.default = FlightList;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _radium = __webpack_require__(3);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _reactMotion = __webpack_require__(15);
	
	var _toEm = __webpack_require__(7);
	
	var _toEm2 = _interopRequireDefault(_toEm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// ==================================================
	// Loader
	// ==================================================
	
	var getWrapStyle = function getWrapStyle(opacity) {
	  return {
	    position: 'absolute',
	    top: 0,
	    left: 0,
	    width: '100%',
	    opacity: opacity
	  };
	};
	var centerWrap = {
	  width: (0, _toEm2.default)(15),
	  margin: '0 auto'
	};
	var ballScaleKeyframes = _radium2.default.keyframes({
	  '0%': { opacity: 0, transform: 'scale(0)' },
	  '5%': { opacity: 1 },
	  '100%': { opacity: 0, transform: 'scale(1)' }
	}, 'ballScale');
	var ballScaleWrapStyle = {
	  position: 'relative'
	};
	var ballScaleStyles = {
	  base: {
	    position: 'absolute',
	    left: '-30px',
	    top: 0,
	    margin: 0,
	    width: '60px',
	    height: '60px',
	    opacity: 0,
	    backgroundColor: 'rgba(0, 0, 0, .12)',
	    borderRadius: '100%',
	    animation: 'x 1s 0s linear infinite',
	    animationName: ballScaleKeyframes,
	    animationFillMode: 'both'
	  },
	  second: {
	    animationDelay: '-0.4s'
	  },
	  third: {
	    animationDelay: '-0.2s'
	  }
	};
	
	var Loader = function Loader(_ref) {
	  var hidden = _ref.hidden;
	  return _react2.default.createElement(
	    'div',
	    { id: 'Loader', style: { position: 'relative' } },
	    _react2.default.createElement(
	      _reactMotion.Motion,
	      { style: { opacity: (0, _reactMotion.spring)(hidden ? 0 : 1) } },
	      function (_ref2) {
	        var opacity = _ref2.opacity;
	        return _react2.default.createElement(
	          'div',
	          { style: getWrapStyle(opacity) },
	          _react2.default.createElement(
	            'div',
	            { style: centerWrap },
	            _react2.default.createElement(
	              'div',
	              { style: ballScaleWrapStyle },
	              _react2.default.createElement('div', { style: [ballScaleStyles.base, ballScaleStyles.second] }),
	              _react2.default.createElement('div', { style: [ballScaleStyles.base, ballScaleStyles.third] }),
	              _react2.default.createElement('div', { style: [ballScaleStyles.base] })
	            )
	          )
	        );
	      }
	    )
	  );
	};
	
	Loader.propTypes = {
	  hidden: _react.PropTypes.bool
	};
	
	exports.default = (0, _radium2.default)(Loader);

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMotion = __webpack_require__(15);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ==================================================
	// TransitionList
	// ==================================================
	
	var wrapStyle = {
	  position: 'relative'
	};
	var getMotionItemStyle = function getMotionItemStyle(_ref) {
	  var opacity = _ref.opacity;
	  var y = _ref.y;
	  return {
	    position: 'absolute',
	    top: 0,
	    left: 0,
	    width: '100%',
	    opacity: opacity,
	    transform: 'translate3d(0, ' + y + 'px, 0)',
	    WebkitTransform: 'translate3d(0, ' + y + 'px, 0)'
	  };
	};
	
	var TransitionList = function (_Component) {
	  _inherits(TransitionList, _Component);
	
	  function TransitionList() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, TransitionList);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(TransitionList)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.getDefaultStyles = function () {
	      var items = _this.props.items;
	
	      return items.map(function (item) {
	        return {
	          key: item.id,
	          style: {
	            opacity: 0,
	            y: 800
	          },
	          data: item
	        };
	      });
	    }, _this.getStyles = function (prevStyles) {
	      var _this$props = _this.props;
	      var animationDisabled = _this$props.animationDisabled;
	      var items = _this$props.items;
	      var itemHeight = _this$props.itemHeight;
	
	      var opacityConfig = { stiffness: 210, damping: 24 };
	      var yConfig = { stiffness: 140, damping: 19 };
	
	      return items.map(function (item, i) {
	        var precedentStyle = prevStyles[i - 1];
	        var style = !precedentStyle ? {
	          opacity: (0, _reactMotion.spring)(1, opacityConfig),
	          y: (0, _reactMotion.spring)(0, yConfig)
	        } : {
	          opacity: (0, _reactMotion.spring)(precedentStyle.style.opacity, opacityConfig),
	          y: (0, _reactMotion.spring)(precedentStyle.style.y + itemHeight, yConfig)
	        };
	
	        if (animationDisabled) {
	          style = { opacity: 1, y: i * itemHeight };
	        }
	
	        return {
	          key: item.id,
	          style: style,
	          data: item
	        };
	      });
	    }, _this.willLeave = function () {
	      return {
	        opacity: (0, _reactMotion.spring)(0, { stiffness: 210, damping: 24 })
	      };
	    }, _this.willEnter = function () {
	      return {
	        opacity: 0,
	        y: 800
	      };
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(TransitionList, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var Item = _props.Item;
	      var itemProps = _props.itemProps;
	      var onItemClick = _props.onItemClick;
	
	
	      return _react2.default.createElement(
	        _reactMotion.TransitionMotion,
	        {
	          defaultStyles: this.getDefaultStyles(),
	          styles: this.getStyles,
	          willEnter: this.willEnter,
	          willLeave: this.willLeave
	        },
	        function (interpolatedStyles) {
	          return _react2.default.createElement(
	            'div',
	            { id: 'TransitionList', style: wrapStyle },
	            interpolatedStyles.map(function (_ref2) {
	              var key = _ref2.key;
	              var _ref2$style = _ref2.style;
	              var opacity = _ref2$style.opacity;
	              var y = _ref2$style.y;
	              var data = _ref2.data;
	              return _react2.default.createElement(
	                'div',
	                {
	                  key: key,
	                  style: getMotionItemStyle({ opacity: opacity, y: y })
	                },
	                _react2.default.createElement(Item, _extends({
	                  onClick: function onClick() {
	                    if (onItemClick) onItemClick(data);
	                  }
	                }, itemProps, data))
	              );
	            })
	          );
	        }
	      );
	    }
	  }]);
	
	  return TransitionList;
	}(_react.Component);
	
	TransitionList.propTypes = {
	  animationDisabled: _react.PropTypes.bool,
	  items: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    id: _react.PropTypes.string.isRequired
	  }).isRequired).isRequired,
	  Item: _react.PropTypes.func.isRequired,
	  itemProps: _react.PropTypes.object,
	  itemHeight: _react.PropTypes.number.isRequired,
	  onItemClick: _react.PropTypes.func
	};
	
	// not using Radium here for animation performance.
	exports.default = TransitionList;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _color = __webpack_require__(5);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _moment = __webpack_require__(11);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _arrow_icon = __webpack_require__(36);
	
	var _arrow_icon2 = _interopRequireDefault(_arrow_icon);
	
	var _toEm = __webpack_require__(7);
	
	var _toEm2 = _interopRequireDefault(_toEm);
	
	var _colors = __webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ==================================================
	// FlightItem
	// ==================================================
	
	var cardStyle = {
	  position: 'relative',
	  background: '#fff',
	  borderRadius: (0, _toEm2.default)(2),
	  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
	};
	var underlayStyles = {
	  base: {
	    position: 'absolute',
	    top: 0,
	    left: 0,
	    width: '100%',
	    height: '100%',
	    pointerEvents: 'none',
	    background: 'rgba(0, 0, 0, .03)',
	    opacity: 0,
	    transition: 'opacity 100ms cubic-bezier(0.22, 0.61, 0.36, 1)'
	  },
	  visible: {
	    opacity: 1
	  }
	};
	var wrapStyles = {
	  base: {
	    display: 'inline-block',
	    textAlign: 'center'
	  },
	  left: {
	    width: '75%',
	    padding: (0, _toEm2.default)('6 0 10')
	  },
	  right: {
	    width: '25%',
	    padding: (0, _toEm2.default)('12 0 10')
	  }
	};
	var timeSection = {
	  padding: '0 10%'
	};
	var timeStyle = {
	  display: 'inline-block',
	  width: '33%',
	  fontSize: (0, _toEm2.default)(13),
	  fontWeight: 700,
	  color: (0, _color2.default)(_colors.DARK_GRAY).clearer(0.75).rgbString()
	};
	var iataSection = {
	  position: 'relative'
	};
	var iconWrap = {
	  position: 'absolute',
	  right: 0,
	  bottom: (0, _toEm2.default)(-6),
	  left: (0, _toEm2.default)(-6),
	  width: '24px',
	  height: '24px',
	  margin: '0 auto'
	};
	var iataStyle = {
	  display: 'inline-block',
	  width: '50%',
	  fontWeight: 700,
	  letterSpacing: '1.8px'
	};
	var citySection = {
	  marginTop: (0, _toEm2.default)(-4)
	};
	var cityStyle = {
	  display: 'inline-block',
	  width: '50%',
	  fontSize: (0, _toEm2.default)(13)
	};
	var priceStyle = {
	  left: (0, _toEm2.default)(-3), // ?
	  fontSize: (0, _toEm2.default)(15),
	  fontWeight: 700
	};
	var buttonStyles = {
	  base: {
	    display: 'inline-block',
	    marginTop: (0, _toEm2.default)(6),
	    padding: (0, _toEm2.default)('0 12 2'),
	    color: '#fff',
	    cursor: 'pointer',
	    background: (0, _color2.default)(_colors.BLUE).clearer(0.06).rgbString(),
	    borderRadius: (0, _toEm2.default)(2),
	    userSelect: 'none'
	  },
	  disabled: {
	    cursor: 'not-allowed',
	    background: 'rgba(0, 0, 0, 0.2)'
	  }
	};
	var buttonTextStyle = {
	  fontSize: (0, _toEm2.default)(14)
	};
	
	var FlightItem = function (_Component) {
	  _inherits(FlightItem, _Component);
	
	  function FlightItem() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, FlightItem);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(FlightItem)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      underlayVisible: false
	    }, _this.showUnderlay = function () {
	      _this.setState({ underlayVisible: true });
	    }, _this.hideUnderlay = function () {
	      _this.setState({ underlayVisible: false });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(FlightItem, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      var _props = this.props;
	      var id = _props.id;
	      var selectDisabled = _props.selectDisabled;
	
	      return id !== nextProps.id || selectDisabled !== nextProps;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var type = _props2.type;
	      var price = _props2.price;
	      var depart = _props2.depart;
	      var arrival = _props2.arrival;
	      var selectDisabled = _props2.selectDisabled;
	      var onClick = _props2.onClick;
	      var underlayVisible = this.state.underlayVisible;
	
	
	      return _react2.default.createElement(
	        'div',
	        {
	          id: 'FlightItem',
	          style: cardStyle,
	          onMouseEnter: this.showUnderlay,
	          onMouseLeave: this.hideUnderlay
	        },
	        _react2.default.createElement('div', {
	          style: _extends({}, underlayStyles.base, underlayVisible && underlayStyles.visible)
	        }),
	        _react2.default.createElement(
	          'div',
	          { style: _extends({}, wrapStyles.base, wrapStyles.left) },
	          _react2.default.createElement(
	            'div',
	            { style: timeSection },
	            _react2.default.createElement(
	              'div',
	              { style: timeStyle },
	              (0, _moment2.default)(depart.date).format('h:mm a')
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: timeStyle },
	              (0, _moment2.default)((0, _moment2.default)(depart.date).diff((0, _moment2.default)(arrival.date))).format('h[h] m[m]')
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: timeStyle },
	              (0, _moment2.default)(arrival.date).format('h:mm a')
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: iataSection },
	            _react2.default.createElement(
	              'div',
	              { style: iconWrap },
	              _react2.default.createElement(_arrow_icon2.default, { type: type === 'outbound' ? 'right' : 'left' })
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: iataStyle },
	              depart.airport.iata
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: iataStyle },
	              arrival.airport.iata
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: citySection },
	            _react2.default.createElement(
	              'div',
	              { style: cityStyle },
	              depart.airport.city
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: cityStyle },
	              arrival.airport.city
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: _extends({}, wrapStyles.base, wrapStyles.right) },
	          _react2.default.createElement(
	            'div',
	            { style: priceStyle },
	            '$' + price
	          ),
	          _react2.default.createElement(
	            'div',
	            {
	              style: _extends({}, buttonStyles.base, selectDisabled && buttonStyles.disabled),
	              onClick: onClick
	            },
	            _react2.default.createElement(
	              'span',
	              { style: buttonTextStyle },
	              'Select'
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return FlightItem;
	}(_react.Component);
	
	FlightItem.propTypes = {
	  id: _react.PropTypes.string.isRequired,
	  type: _react.PropTypes.oneOf(['outbound', 'inbound']).isRequired,
	  price: _react.PropTypes.number.isRequired,
	  depart: _react.PropTypes.shape({
	    airport: _react.PropTypes.shape({
	      city: _react.PropTypes.string.isRequired,
	      country: _react.PropTypes.string.isRequired,
	      iata: _react.PropTypes.string.isRequired
	    }).isRequired,
	    date: _react.PropTypes.instanceOf(Date).isRequired
	  }).isRequired,
	  arrival: _react.PropTypes.shape({
	    airport: _react.PropTypes.shape({
	      city: _react.PropTypes.string.isRequired,
	      country: _react.PropTypes.string.isRequired,
	      iata: _react.PropTypes.string.isRequired
	    }).isRequired,
	    date: _react.PropTypes.instanceOf(Date).isRequired
	  }).isRequired,
	  selectDisabled: _react.PropTypes.bool,
	  onClick: _react.PropTypes.func.isRequired
	};
	
	// not using Radium here for animation performance.
	exports.default = FlightItem;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ArrowIcon = function ArrowIcon(_ref) {
	  var type = _ref.type;
	  return _react2.default.createElement(
	    "svg",
	    {
	      id: "ArrowIcon",
	      x: "0px",
	      y: "0px",
	      width: "32px",
	      height: "32px",
	      viewBox: "0 0 32 32"
	    },
	    _react2.default.createElement(
	      "g",
	      { transform: "translate(0, 0)" },
	      _react2.default.createElement("line", {
	        fill: "none",
	        stroke: "#d9d9d9",
	        strokeWidth: "1",
	        strokeMiterlimit: "10",
	        x1: type === 'right' ? 0 : 2,
	        y1: "16",
	        x2: "30",
	        y2: "16",
	        strokeLinejoin: "miter",
	        strokeLinecap: "butt"
	      }),
	      _react2.default.createElement("polyline", {
	        fill: "none",
	        stroke: "#d9d9d9",
	        strokeWidth: "1",
	        strokeLinecap: "square",
	        "stroke-miterlimit": "10",
	        points: type === 'right' ? '21,7 30,16 21,25' : '11,25 2,16 11,7',
	        strokeLinejoin: "miter"
	      })
	    )
	  );
	}; // ==================================================
	// ArrowIcon
	// ==================================================
	
	ArrowIcon.propTypes = {
	  type: _react.PropTypes.oneOf(['right', 'left'])
	};
	
	exports.default = ArrowIcon;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _radium = __webpack_require__(3);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _colors = __webpack_require__(8);
	
	var _toEm = __webpack_require__(7);
	
	var _toEm2 = _interopRequireDefault(_toEm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// ==================================================
	// MobileOverlay
	// ==================================================
	
	var overlayStyle = {
	  zIndex: 99,
	  position: 'fixed',
	  top: 0,
	  left: 0,
	  padding: '20% 0',
	  width: '100%',
	  height: '100vh',
	  background: _colors.BLUE,
	  textAlign: 'center',
	  '@media (min-width: 850px)': {
	    display: 'none'
	  }
	};
	var paragraphStyle = {
	  padding: '0 ' + (0, _toEm2.default)(8),
	  color: '#fff'
	};
	var anchorStyle = {
	  color: '#fff'
	};
	
	var link = 'mailto:my@mail.com?subject=Yannik.io%20Flight%20Search&body=' + 'https://yannik.io/flights/';
	var MobileOverlay = function MobileOverlay() {
	  return _react2.default.createElement(
	    'div',
	    { id: 'MobileOverlay', style: overlayStyle },
	    _react2.default.createElement(
	      'p',
	      { style: paragraphStyle },
	      'Sorry, this demo isn\'t mobile optimized yet.',
	      _react2.default.createElement('br', null),
	      'Send an ',
	      _react2.default.createElement(
	        'a',
	        { href: link, style: anchorStyle },
	        'email'
	      ),
	      ' as a reminder to check it on your pc.'
	    )
	  );
	};
	
	exports.default = (0, _radium2.default)(MobileOverlay);

/***/ }
/******/ ])
});
;
//# sourceMappingURL=search-flight.js.map