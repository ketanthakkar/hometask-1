import React from 'react';
import { shallow } from 'enzyme';
import Image from '../components/Image';

describe('Image', () => {
  it('shoud render image component', () => {
    const render = shallow(
      <Image src = 'src' alt = 'alt' />
    );
    expect(render.find('img').hasClass('image__small')).toBe(true);
    expect(render).toMatchSnapshot();
  })

  it('should not modify props', () => {
    const src = 'src', alt = 'alt';
    const render = shallow(
      <Image src = {src} alt = {alt} />
    );
    expect(src).toEqual('src');
    expect(alt).toEqual('alt');
    expect(render).toMatchSnapshot();
  })
})