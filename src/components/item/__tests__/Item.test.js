import React from 'react';
import Item from '..';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('should render an <Item />', () => {
  const component = mount(
      <Item id="first" template="my template" />
  );

  expect(component).toMatchSnapshot();
});
