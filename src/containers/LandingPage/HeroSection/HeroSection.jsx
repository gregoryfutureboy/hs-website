import React, { Component } from 'react';
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
    color: white;
  }

  6.67% {
    /* color: white; */
    /* border: 1px solid #FF8E8C; */
    color: #FFBDFC;
  }

  13.34% {
    /* color: white; */
    /* border: 1px solid #FFBDFC; */
    color: #B5B5FF;
  }

  20.01% {
    /* color: white; */
    /* border: 1px solid white; */
    color: white;
  }

  26.68% {
    /* color: white; */
    /* border: 1px solid #8CC1F7; */
    color: #8CC1F7;
  }  

  33.35% {
    /* color: white; */
    /* border: 1px solid #9BFDE8; */
    color: #9BFDE8;
    
  }

  40.02% {
    /* color: white; */
    /* border: 1px solid white; */
    color: white;
  }

  46.69% {
    /* color: white; */
    /* border: 1px solid #FCE88B; */
    color: #FCE88B;
  }

  53.36% {
    /* color: white; */
    /* border: 1px solid #FCC18B; */
    color: #FCC18B;
  }

  60.03% {
    /* color: white; */
    /* border: 1px solid white; */
    color: white;
  }

  66.7% {
    /* color: white; */
    /* border: 1px solid #FF8E8C; */
    color: #FF8E8C;
  }

  73.37% {
    /* color: white; */
    /* border: 1px solid #FFBDFC; */
    color: #FFBDFC;
  }

  80.04% {
    /* color: white; */
    /* border: 1px solid white; */
    color: white;
  }

  86.71% {
    /* color: white;   */
    /* border: 1px solid #B5B5FF; */
    color: #B5B5FF;
  }

  93.37% {
    /* color: white; */
    /* border: 1px solid #8CC1F7; */
    color: #8CC1F7;
  }

  100% {
    /* color: white; */
    /* border: 1px solid white; */
    color: white;
  }
`

const StyledHeroContainer = styled('div') `
  /* margin-top: 6rem; */
  /* height: calc(100vh - 24rem); */
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`

const StyledHeroTextBox = styled('div') `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -6rem;
  animation: ${rainbow} 42s linear infinite;
`

const StyledHeroTitle = styled('h1') `
  font-size: 5rem;
  letter-spacing: 0.04rem;
  margin: 0 0 2rem 0;
`

const StyledHeroSubtitle = styled('h3') `
  font-size: 1.5rem;
  letter-spacing: 0.06rem;
  margin: 0;
`

class HeroSection extends Component {
  render() {
    return (
      <StyledHeroContainer>
        <StyledHeroTextBox>
          <StyledHeroTitle>human.space</StyledHeroTitle>
          <StyledHeroSubtitle>home of the new earth</StyledHeroSubtitle>
        </StyledHeroTextBox>
      </StyledHeroContainer> 
    )
  }
}

export default HeroSection;
