import React from 'react';
import ReactDOM from 'react-dom';
import FiveDayForecast from '../FiveDayForecast';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FiveDayForecast />, div);
  ReactDOM.unmountComponentAtNode(div);
});
