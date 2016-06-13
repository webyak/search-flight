import React from 'react';
import ReactDOM from 'react-dom';

const rootEl = document.getElementById('react-root');

let render = () => {
  const EntryComponent = require('./entry_component.js').default;

  ReactDOM.render(
    <EntryComponent />,
    rootEl
  );
};

// manually hot reload and show errors in development.
if (module.hot) {
  const renderApp = render;

  const renderError = (error) => {
    const RedBox = require('redbox-react');
    ReactDOM.render(
      <RedBox error={error} />,
      rootEl
    );
  };

  render = () => {
    try {
      renderApp();
    } catch (error) {
      renderError(error);
    }
  };


  // rerender entire app on hot reloads.
  module.hot.accept('./entry_component.js', () => {
    render();
  });
}

render();
