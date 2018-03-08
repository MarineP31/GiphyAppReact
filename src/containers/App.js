import React from 'react';
import Header from '../components/Header/Header';
import { Route } from 'react-router';
import Home from '../components/Home/Home';
import GifFavourites from '../components/GifFavourites/GifFavourites';


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Route path="/" component={Home} />
        <Route path='/favorited' component={GifFavourites}/>
        { this.props.children }
      </div>
    );
  }
}

export default App