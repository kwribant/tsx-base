/* tslint:disable-next-line  */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App message="Hello" />, div);
  unmountComponentAtNode(div)
});

Enzyme.configure({ adapter: new Adapter() });
it('shallow renders without crashing', () => {
  shallow(<App message="Hello" />);
});
