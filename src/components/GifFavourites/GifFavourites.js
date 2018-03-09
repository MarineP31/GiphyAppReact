import React, { Component } from 'react';
import styled from 'styled-components';
import GifList from '../GifList/GifList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/index';

class GifFavourites extends Component {
  componentWillMount() {
    this.props.actions.fetchFavoritedGifs();
  }

  render() {
    console.log(this.props.gifs)
    return (
      <div>
        <GifList 
          gifs = { this.props.gifs } 
          onFavoriteSelect = { selectedGif => this.props.actions.favoriteGif({selectedGif}) }
          onFavoriteDeselect = { selectedGif => this.props.actions.unfavoriteGif({selectedGif}) }
          isFavorite = { true }
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gifs: state.gifs.favorites,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GifFavourites);