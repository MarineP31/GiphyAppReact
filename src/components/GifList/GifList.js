import React, { Component } from 'react';
import styled from 'styled-components';
import GifItem from '../GifItem/GifItem';

const Wrapper = styled.div`
    margin: 0;
    padding: 0% 2%;
    column-count: 4;
`;

class GifList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      gifs: []
    };
  };

  componentWillReceiveProps(nextProps) {
    const currentSearch = new URLSearchParams(this.props.location.search).get('q');
    const nextSearch = new URLSearchParams(nextProps.location.search).get('q');

    if (currentSearch !== nextSearch) {
      this.fetchGifs(nextSearch);
    }
  }

  componentDidMount() {
    const currentSearch = new URLSearchParams(this.props.location.search).get('q');

    this.fetchGifs(currentSearch);
  }

  fetchGifs(terms) {
    return fetch(`http://api.giphy.com/v1/gifs/search?q=${terms}&api_key=m85aKxATBh273ah984X5Jlq3k7bGAkBO`)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          gifs: data.data,
          result: data.pagination.total_count
        });
      });
  }

  render() {
    return (
      <Wrapper>
      {
        this.state.gifs.map(item => (
          <GifItem key={item.id} gif={item.images.downsized.url} />
        ))
      }
      </Wrapper>
    );
  }

};

export default GifList;