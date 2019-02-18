import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import BookCard from './BookCard';

describe('Button', () => {
  it('should render a Card describing Book', () => {
    const tree = renderer.create(<BookCard Name="Harry" rating="4.2" likedData />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should check the value passes to props', () => {
    const wrapper = shallow(<BookCard Name="Harry" rating="4.2" likedData />);
    // console.log(wrapper.props().children[1].props.children);
    expect(wrapper.props().children[1].props.children).toEqual('Harry');
  });
});
