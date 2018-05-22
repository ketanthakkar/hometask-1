import React from 'react';
import { shallow } from 'enzyme';
import Button from '../components/Button';


describe('Button', () => {
    it('should render unactive button', () => {
      const render = shallow(
          <Button name = 'test' />
      );
    
      expect(render.find('button').hasClass('button--unactive')).toBe(true);
      expect(render).toMatchSnapshot();
    });

    it('should render active button', () => {
      const render = shallow(
        <Button name = 'test' active/>
      );
      expect(render.find('button').hasClass('button--active')).toBe(true);
      expect(render).toMatchSnapshot();
    })
    it('should not modify props', () => {
      const name = 'name';
      const active = false;
      const render = shallow(
        <Button name = {name} active = {active} />
      );
      expect(name).toEqual('name')
      expect(active).toEqual(false);
      expect(render).toMatchSnapshot();
    })
});