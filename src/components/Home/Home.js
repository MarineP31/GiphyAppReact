import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/index';
import GifList from '../GifList/GifList';

class Home extends Component {
  render() {
    return (
      <div>
        <GifList gifs={ this.props.gifs } />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
