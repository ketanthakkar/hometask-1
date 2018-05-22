import React from 'react';
import { shallow } from 'enzyme';
import MovieVote from '../components/MovieVote';

describe('MovieVote', () => {
  it('shoud render MovieVote component', () => {
    const render = shallow(
      <MovieVote vote = 'vote' />
    );
    expect(render.find('div').hasClass('movieVote')).toBe(true);
    expect(render).toMatchSnapshot();
  })

  it('should not modify props', () => {
    const vote = 'vote';
    const render = shallow(
      <MovieVote vote = 'vote' />
    );
    expect(vote).toEqual('vote');
    expect(render).toMatchSnapshot();
  })
})