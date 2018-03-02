import React, { Component } from 'react';
import styled from 'styled-components';
import GifItem from '../GifItem/GifItem';

const Wrapper = styled.div`
    margin: 0;
    padding: 0% 2%;
    column-count: 4;
`;

class GifFavourites extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      favourites: JSON.parse(localStorage.getItem('items'))
    };
  };

  render() {
    return (
      <Wrapper>
      {
        this.state.favourites.map(item => (
          <GifItem key={((Math.random() * 1000) + 1)} gif={item} />
        ))
      }
      </Wrapper>
    );
  }

};

export default GifFavourites;
