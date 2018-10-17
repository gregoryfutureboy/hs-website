import React, { Component } from 'react'
import styled from 'react-emotion';

const StyledTopContainer = styled('div')`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledTopTitle = styled('h1') `
  letter-spacing: 0.04rem;
  color: black;
  
  @media (min-width: 320px) {
    font-size: 2rem;
  }

  @media (min-width: 400px) {
    font-size: 3rem;
  }

  @media (min-width: 768px) {
    font-size: 4rem;
  }
  @media (min-width: 1200px) {
    font-size: 5rem;
  }
`

class TopSection extends Component {
  render() {
    return (
      <StyledTopContainer>
        <StyledTopTitle>
          Welcome to the future
        </StyledTopTitle>
      </StyledTopContainer>
    )
  }
}

export default TopSection;
