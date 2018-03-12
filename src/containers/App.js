import React from 'react';
import Header from '../components/Header/Header';
import { Route } from 'react-router';
import Home from '../components/Home/Home';
import GifFavourites from '../components/GifFavourites/GifFavourites';
import SearchGifs from '../components/SearchGifs/SearchGifs';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={SearchGifs} />
        <Route exact path='/favorited' component={GifFavourites}/>
        { this.props.children }
      </div>
    );
  }
}

export default App