import React from 'react';
import styled from 'styled-components';
import GifItem from '../GifItem/GifItem';

const Wrapper = styled.div`
    margin: 0;
    padding: 0% 2%;
    column-count: 4;
`;

const GifList = (props) => {
  const gifItems = props.gifs.map((item) => {
    return <GifItem key={item.id} gif={item} />
  });

  return (
    <Wrapper>{gifItems}</Wrapper>
  );
};

export default GifList;