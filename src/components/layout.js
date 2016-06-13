// ==================================================
// Layout
// ==================================================

import React from 'react';
import Radium, { StyleRoot, Style } from 'radium';
import Helmet from 'react-helmet';
import color from 'color';
import MenuBar from './menu_bar.js';
import SearchFlight from '../containers/search_flight.js';
import { DARK_GRAY, LIGHT_GRAY } from '../styling/colors.js';
import { resetFontSmooth } from '../styling/common_styles.js';

const selectionStyle = {
  color: '#fff',
  background: DARK_GRAY,
};
const placeholderStyle = {
  color: color(DARK_GRAY).clearer(0.35).rgbString(),
  opacity: 1,
};

const Layout = () => (
  <StyleRoot id="Layout">
    <Helmet
      title="Flight Search Demo"
      meta={[
        {
          name: 'description',
          content: 'A flight search experience with react-motion.',
        },
      ]}
      link={[
        {
          href: 'https://fonts.googleapis.com/css?family=Asap:400,700',
          rel: 'stylesheet',
          type: 'text/css',
        },
      ]}
    />
    <Style
      rules={{
        'html, body': {
          width: '100%',
          height: '100%',
        },
        body: {
          ...resetFontSmooth,
          fontFamily: '"Asap", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontWeight: 400,
          lineHeight: 1.4,
          color: DARK_GRAY,
          background: LIGHT_GRAY,
        },
        '*': {
          WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
        },
        '*, *:before, *:after': {
          boxSizing: 'border-box',
        },
        '::-moz-selection': {
          ...selectionStyle,
        },
        '::selection': {
          ...selectionStyle,
        },
        '::-webkit-input-placeholder': {
          ...placeholderStyle,
        },
        ':-moz-placeholder': {
          ...placeholderStyle,
        },
        '::-moz-placeholder': {
          ...placeholderStyle,
        },
        ':-ms-input-placeholder': {
          ...placeholderStyle,
        },
        'input:-webkit-autofill': {
          WebkitBoxShadow: '0 0 0 1000px #fff inset',
        },
      }}
    />
    <MenuBar />
    <SearchFlight />
  </StyleRoot>
);

export default Radium(Layout);
