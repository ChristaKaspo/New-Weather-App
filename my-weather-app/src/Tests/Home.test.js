import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Home from '../Home';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders welcome message', () => {
  const wrapper = shallow(<Home />);
  const welcome = <div>Welcome to Christa's Weather App!</div>;
  expect(wrapper.contains(welcome)).toBe(true);
  expect(wrapper.contains(welcome)).toEqual(true);
});
