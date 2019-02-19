import React from 'react';
import renderer from 'react-test-renderer';
import GroupOfBooks from './GroupOfBooks';

describe('Button', () => {
  it('should render a div containing books of same author', () => {
    const tree = renderer.create(<GroupOfBooks />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
