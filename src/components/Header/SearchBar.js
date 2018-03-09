import React, { Component } from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';

const FaSearchStyle = {
  fontSize: '23px',
  marginRight: '1%',
  height: '1.5em',
  color: 'white'
};

const Form = styled.form`
    width: 100%;
    background-color: #18181A;
    padding: 1%;
    display: flex;
    justify-content: center;
    align-items: end;
    color: #FFFAFA;
`;

const Input = styled.input`
    position: relative;
    width: 33%;
    height: 30px;
    font-size: 16px;
    box-sizing: border-box;
    padding-left: 15px;
    margin-bottom: 3%;
    background: #18181a;
    color: #FFFAFA;
    border: none;
    border-bottom: 1px solid #FFFAFA;
`;

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    this.props.onTermChange(this.state.value);
    event.preventDefault();

  }

  // handleSubmit = (e) => {
  //   if (e.key === 'Enter') {
  //     e.preventDefault();
  //     const currentSearch = this.props.onTermChange(term);
  //     currentSearch.set('q', this.state.term);
  //     this.props.history.push(`${this.props.location.pathname}?${currentSearch}`)
  //   }
  // }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FontAwesomeIcon icon={faSearch} style={FaSearchStyle} />
        <Input
          type='search'
          name='q'
          placeholder='Search a gif...'
          onChange={this.handleChange}
          value={this.state.value}
        />
      </Form>
    )
  }
}

export default SearchBar;
