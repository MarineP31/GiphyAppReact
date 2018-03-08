import React, { Component } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
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
  // constructor() {
  //   super();
  //   this.state = {
  //     visible: false
  //   }
  // }

  // handleClickHeart = () => {
  //   const localGif = JSON.parse(localStorage.getItem('items')) || [];

  //   if (localGif.indexOf(this.props.gif) === -1) {
  //     localGif.push(this.props.gif);
  //     localStorage.setItem('items', JSON.stringify(localGif));
  //     this.setState({ 
  //       visible: true
  //     })

  //   } else if (localGif.indexOf(this.props.gif) > -1){
  //     const gifIndex = localGif.indexOf(this.props.gif);
  //     localGif.splice(gifIndex, 1);
  //     localStorage.setItem('items', JSON.stringify(localGif));
  //     this.setState({
  //       visible: false
  //     })
  //   }
  // }

  render() {
    // const heartVisible = classNames({
    //   'visible': this.state.visible,
    // })

    return (
      <Figure >
        <FontAwesomeIcon 
          icon={faHeart} 
          style={FaHeartStyle} 
          onClick={this.handleClickHeart} 
          // classnames={heartVisible}
        />
        <GifImages 
          src={this.props.gif.images.downsized.url} 
          alt="giphy"/>
        <CopyToClipboard
          text={this.props.gif.images.downsized.url}
          // onCopy={() => this.setState({ copied: true })}
        >
          <FontAwesomeIcon 
            icon={faCopy} 
            style={FaCopyStyle} />
        </CopyToClipboard>
      </Figure>
    );
  }
}

export default GifItem;
