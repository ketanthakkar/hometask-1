import React from 'react';
import { shallow } from 'enzyme';
import Description from '../components/Description';


describe('<Description', () => {
    it('should lolololo', () => {
        const render = shallow(
            <Description desc = "description" />
        );
    
    expect(render.find('p').hasClass('desc')).toBe(true);
    expect(render).toMatchSnapshot();
    });

    it('should not modify props', () => {
      const desc = 'test';
      const render = shallow(
        <Description desc = {desc} />
      );
      expect(desc).toEqual('test');
      expect(render).toMatchSnapshot();
    })

});