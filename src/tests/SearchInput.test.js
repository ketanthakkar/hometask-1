import React from 'react';
import { shallow } from 'enzyme';
import SearchInput from '../components/SearchInput';

describe('SearchInput', () => {
  it('shoud render SearchInput component', () => {
    const render = shallow(
      <SearchInput />
    );
    expect(render.find('input').hasClass('searchInput')).toBe(true);
    expect(render).toMatchSnapshot();
  })

})