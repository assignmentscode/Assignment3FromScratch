import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import GroupOfBooks from './GroupOfBooks';

describe('Group Of Books', () => {
  const props1 = {
    author: 'J K ROWLING',
    listOfBooks: [{
      Author: 'Sidney Sheldon',
      id: 80,
      Name: 'If Tomorrow Comes (Tracy Whitney Series, #1)',
      rating: 4.02,
    },
    {
      Author: 'J K Rowling',
      id: 70,
      Name: 'Harry Potter and the Deathly Hallows (Harry Potter, #7)',
      rating: 4.62,
    }],
  };
  it('should render a div containing books of same author', () => {
    const tree = renderer.create(<GroupOfBooks {...props1} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should get the props passes to them', () => {
    const wrapper = shallow(<GroupOfBooks {...props1} />);
    // console.log(wrapper.instance().props);
    expect(wrapper.instance().props).toEqual(props1);
  });
});
