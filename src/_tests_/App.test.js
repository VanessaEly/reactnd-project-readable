import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

/**
 * Example test, to make sure that the page can be randered without crashing
 */
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
