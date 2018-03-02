import React from 'react';
import { Route } from 'react-router-dom';
import GifList from '../GifList/GifList';

const Home = () => {
  return (
    <div>
      <Route exact path="/" component={GifList} />
    </div>
  );
};

export default Home;
