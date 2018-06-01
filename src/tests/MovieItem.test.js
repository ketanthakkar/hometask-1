import React from 'react';
import { shallow } from 'enzyme';
import MovieItem from '../components/MovieItem';

describe('MovieItem', () => {
  it('shoud render MovieItem component', () => {
    const render = shallow(
      <MovieItem 
        url = 'url' 
        name = 'name' 
        date = 'date' 
        genre = {['genre']}
      />
    );
    expect(render.find('div').hasClass('movieItem-wrapper')).toBe(true);
    expect(render).toMatchSnapshot();
  })

  it('should not modify props', () => {
    const  url = 'url', name = 'name', date = 'date', genre = ['genre'];
    const render = shallow(
      <MovieItem 
      url = {url} 
      name = {name} 
      date = {date} 
      genre = {genre}
    />
    );
    expect(url).toEqual('url');
    expect(name).toEqual('name');
    expect(date).toEqual('date');
    expect(genre[0]).toEqual('genre');
    expect(render).toMatchSnapshot();
  })
})