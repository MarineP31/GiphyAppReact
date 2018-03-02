import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/fontawesome-free-solid';

const FaHeartStyle = {
  width: '45px',
  fontSize: '23px',
  color: '#FF4136'
};

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
`;

const Navbar = () => {
  return (
    <Menu>
      <li> gifs found</li>
      <li>
        <FontAwesomeIcon icon={faHeart} style={FaHeartStyle}/>
        <NavLink to="/favorited">Mes favoris</NavLink>
      </li>
    </Menu>
  );
};

export default Navbar;
