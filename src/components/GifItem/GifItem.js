import React, { Component } from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { faHeart } from '@fortawesome/fontawesome-free-solid';
import { faCopy } from '@fortawesome/fontawesome-free-solid';

const FaCopyStyle = {
  color: 'whitesmoke',
  width: '45px',
  fontSize: '23px',
  position: 'absolute',
  bottom: '12%',
  left: '57%',
};

const FaHeartStyle = {
  color: '#FF4136',
  width: '45px',
  fontSize: '23px',
  position: 'absolute',
  bottom: '12%',
  right: '3%',
  visibility: 'visible',
  opacity: 1
}

const FaHeartStyleClicked = {
  color: '#FF4136',
  width: '45px',
  fontSize: '23px',
  position: 'absolute',
  bottom: '12%',
  right: '3%',
}

const GifImages = styled.img`
  width: 100%;
`;

const Figure = styled.figure`
    box-sizing: border-box;
    display: inline-block;
    margin: 2% 0%;
    width: 100%;
    position: relative;
    .fa-heart, .fa-copy {
      opacity: 0;
      visibility: hidden;
    }
    &:hover {
      .fa-heart, .fa-copy {
        opacity: 1;
        visibility: visible;
      }
    }
`;

class GifItem extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      favorited: this.props.isFavorite 
    };
  }
 
  favoriteGif() {
    this.setState({ 
      favorited: true 
    });
    styled.figure`
    .fa-heart {
      opacity: 1;
      visibility: visible;
    }`
    this.props.onFavoriteSelect(this.props.gif);
  }

  unfavoriteGif() {
    this.setState({ 
      favorited: false 
    });
    this.props.onFavoriteDeselect(this.props.gif);
  }

  renderFavoriteHeart = () => {
    if (this.state.favorited) {
      return <FontAwesomeIcon icon={faHeart} style={FaHeartStyle} onClick={() => this.unfavoriteGif()} />;
    }
    return <FontAwesomeIcon icon={faHeart} style={FaHeartStyleClicked} onClick={() => this.favoriteGif()} />;
  };

  render() {
    return (
      <Figure >
        { this.renderFavoriteHeart() }
        <GifImages src={this.props.gif.images.downsized.url} alt="giphy"/>
        <CopyToClipboard text={this.props.gif.images.downsized.url} onCopy={() => this.setState({ copied: true })} >
          <FontAwesomeIcon icon={faCopy} style={FaCopyStyle} />
        </CopyToClipboard>
      </Figure>
    );
  }
}

export default GifItem;
