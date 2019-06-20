import React from 'react';
import ReactDOM from 'react-dom';
import CurrentWeather from '../CurrentWeather';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CurrentWeather />, div);
  ReactDOM.unmountComponentAtNode(div);
});
