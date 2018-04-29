/* tslint:disable-next-line  */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {SplashPage} from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<SplashPage />, div);
  unmountComponentAtNode(div)
});

Enzyme.configure({ adapter: new Adapter() });
it('shallow renders without crashing', () => {
  shallow(<SplashPage />);
});
