import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it('should render a header', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  const wrapper = shallow(<Header />);
  it('should have 3 listed items in nav bar', () => {
    expect(wrapper.find('div').getElements().length).toEqual(4);
  });
});
