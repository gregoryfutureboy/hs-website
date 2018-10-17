import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'react-emotion';


const rainbow = keyframes`
  /* background-color: #FF8E8C;
  background-color: #FCC18B;  
  background-color: #FCE88B;
  background-color: #9BFDE8;
  background-color: #8CC1F7;
  background-color: #B5B5FF;
  background-color: #FFBDFC;
  background-color: white; */


  0% {
    color: white;
    /* border: 1px solid white; */
    background-color: white;
  }

  6.67% {
    color: white;
    /* border: 1px solid #FFBDFC; */
    background-color: #FFBDFC;
  }

  13.34% {
    color: white;
    /* border: 1px solid #B5B5FF; */
    background-color: #B5B5FF;
  }

  20.01% {
    color: white;
    /* border: 1px solid white; */
    background-color: white;
  }

  26.68% {
    color: white;
    /* border: 1px solid #8CC1F7; */
    background-color: #8CC1F7;
  }  

  33.35% {
    color: white;
    /* border: 1px solid #9BFDE8; */
    background-color: #9BFDE8;
    
  }

  40.02% {
    color: white;
    /* border: 1px solid white; */
    background-color: white;
  }

  46.69% {
    color: white;
    /* border: 1px solid #FCE88B; */
    background-color: #FCE88B;
  }

  53.36% {
    color: white;
    /* border: 1px solid #FCC18B; */
    background-color: #FCC18B;
  }

  60.03% {
    color: white;
    /* border: 1px solid white; */
    background-color: white;
  }

  66.7% {
    color: white;
    /* border: 1px solid #FF8E8C; */
    background-color: #FF8E8C;
  }

  73.37% {
    color: white;
    /* border: 1px solid #FFBDFC; */
    background-color: #FFBDFC;
  }

  80.04% {
    color: white;
    /* border: 1px solid white; */
    background-color: white;
  }

  86.71% {
    color: white;  
    /* border: 1px solid #B5B5FF; */
    background-color: #B5B5FF;
  }

  93.37% {
    color: white;
    /* border: 1px solid #8CC1F7; */
    background-color: #8CC1F7;
  }

  100% {
    color: white;
    /* border: 1px solid white; */
    background-color: white;
  }
`

const StyledNav = styled('nav')`
  height: 6rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 2.5rem;
  /* animation: ${rainbow} 42s linear infinite; */
  color: white;
`

const StyledNavLink = styled(NavLink)`
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  animation: ${rainbow} 42s linear infinite;
  font-family: 'futura-pt-bold', sans-serif;
  font-weight: 700;
  font-style: normal;
  letter-spacing: 0.04rem;
`


class Header extends Component {
  render() {
    return (
      <StyledNav>
        <StyledNavLink active to='/your-weekly-dose' exact>
          your weekly dose
        </StyledNavLink>
      </StyledNav>
    )
  }
}

export default Header;
