import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/index';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/fontawesome-free-solid';

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #18181A;
`;

const Logo = styled.img`
  display: block;
  height: 250px;
`
const FaHeartStyle = {
  width: '45px',
  fontSize: '23px',
  color: '#FF4136'
}

const Menu = styled.ul`
    display: flex;
    justify-content: space-between;
    padding: 2% 4%;
    li {
        list-style: none;
        a {
          text-decoration: none;
          color: #18181a;
          &:hover {
            border-bottom: 1px solid #18181a;
          }
        }
    }
`

class Header extends Component {  
  render() {
    return (
      <div>
      <Wrapper>
        <Link to="/">
          <Logo src="https://tctechcrunch2011.files.wordpress.com/2016/02/giphyseriesc.gif?w=738" alt="Logo" />
        </Link>
        <SearchBar onTermChange={this.props.actions.requestGifs} />
      </Wrapper>
      <Menu>
        <li> gifs found</li>
        <li>
          <FontAwesomeIcon icon={faHeart} style={FaHeartStyle}/>
          <NavLink to="/favorited">Mes favoris</NavLink>
        </li>
      </Menu>
    </div>
    ) 
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Header);

