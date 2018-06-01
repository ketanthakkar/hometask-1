import React from 'react';
import { shallow } from 'enzyme';
import Title from '../components/Title';

describe('Title', () => {
  it('shoud render Title component', () => {
    const render = shallow(
      <Title title = 'test' />
    );
    expect(render.find('p').hasClass('title')).toBe(true);
    expect(render).toMatchSnapshot();
  })

  it('should not modify props', () => {
    const title = 'test';
    const render = shallow(
      <Title title = {title} />
    );
    expect(title).toEqual('test');
    expect(render).toMatchSnapshot();
  })
})