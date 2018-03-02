import React from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';

import SearchBar from '../Header/SearchBar/SearchBar';
import Navbar from '../Header/Navbar/Navbar';

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

const Header = () => (
    <div>
      <Wrapper>
        <Link to="/">
          <Logo src="https://tctechcrunch2011.files.wordpress.com/2016/02/giphyseriesc.gif?w=738" alt="Logo" />
        </Link>
        <Route path="/" component={SearchBar} />
      </Wrapper>
      <Navbar />
    </div>
)

export default Header;
