import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    /* color: white; */
    /* border: 1px solid white; */
    background-color: white;
  }

  6.67% {
    /* color: white; */
    /* border: 1px solid #FF8E8C; */
    background-color: #FFBDFC;
  }

  13.34% {
    /* color: white; */
    /* border: 1px solid #FFBDFC; */
    background-color: #B5B5FF;
  }

  20.01% {
    /* color: white; */
    /* border: 1px solid white; */
    background-color: white;
  }

  26.68% {
    /* color: white; */
    /* border: 1px solid #8CC1F7; */
    background-color: #8CC1F7;
  }  

  33.35% {
    /* color: white; */
    /* border: 1px solid #9BFDE8; */
    background-color: #9BFDE8;
    
  }

  40.02% {
    /* color: white; */
    /* border: 1px solid white; */
    background-color: white;
  }

  46.69% {
    /* color: white; */
    /* border: 1px solid #FCE88B; */
    background-color: #FCE88B;
  }

  53.36% {
    /* color: white; */
    /* border: 1px solid #FCC18B; */
    background-color: #FCC18B;
  }

  60.03% {
    /* color: white; */
    /* border: 1px solid white; */
    background-color: white;
  }

  66.7% {
    /* color: white; */
    /* border: 1px solid #FF8E8C; */
    background-color: #FF8E8C;
  }

  73.37% {
    /* color: white; */
    /* border: 1px solid #FFBDFC; */
    background-color: #FFBDFC;
  }

  80.04% {
    /* color: white; */
    /* border: 1px solid white; */
    background-color: white;
  }

  86.71% {
    /* color: white;   */
    /* border: 1px solid #B5B5FF; */
    background-color: #B5B5FF;
  }

  93.37% {
    /* color: white; */
    /* border: 1px solid #8CC1F7; */
    background-color: #8CC1F7;
  }

  100% {
    /* color: white; */
    /* border: 1px solid white; */
    background-color: white;
  }
`


const WeeklyDoseContainer = styled('div')`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rainbow} 42s linear infinite;
`

const WeeklyDoseButton = styled(Link)`
  padding: 2rem 4rem;
  color: white;
  text-decoration: none;
  animation: ${rainbow} 42s linear infinite;
  cursor: pointer;
  font-size: 5rem;
  letter-spacing: 0.04rem;
  margin: 0 0 2rem 0;
`

class WeeklyDoseSection extends Component {
  render() {
    return (
      <WeeklyDoseContainer>
        <WeeklyDoseButton to='/your-weekly-dose' exact>
          your weekly dose
        </WeeklyDoseButton>
      </WeeklyDoseContainer>
    )
  }
}

export default WeeklyDoseSection;