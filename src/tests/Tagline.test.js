import React from 'react';
import { shallow } from 'enzyme';
import Tagline from '../components/Tagline';

describe('Tagline', () => {
  it('shoud render Tagline component', () => {
    const render = shallow(
      <Tagline tagline = 'test' />
    );
    expect(render.find('p').hasClass('tagline')).toBe(true);
    expect(render).toMatchSnapshot();
  })

  it('should not modify props', () => {
    const tagline = 'test';
    const render = shallow(
      <Tagline tagline = {tagline} />
    );
    expect(tagline).toEqual('test');
    expect(render).toMatchSnapshot();
  })
})