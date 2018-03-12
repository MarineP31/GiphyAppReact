import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/index';
import GifList from '../GifList/GifList';

class SearchGifs extends Component {
  componentWillMount() {
    const term = new URLSearchParams(this.props.location.search).get('q')
    this.props.actions.requestGifs(term);
  }

  render() {
    return (
      <div>
        <GifList 
          gifs = { this.props.gifs } 
          onFavoriteSelect = { selectedGif => this.props.actions.favoriteGif({selectedGif}) }
          onFavoriteDeselect = { selectedGif => this.props.actions.unfavoriteGif({selectedGif}) }
        />
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    gifs: state.gifs.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchGifs);
