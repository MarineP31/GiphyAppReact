import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import GifFavourites from '../GifFavourites/GifFavourites';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path='/' component={Home}/>
        <Route path='/favorited' component={GifFavourites}/>
      </Switch>
    </main>
  )
}

export default Main;
