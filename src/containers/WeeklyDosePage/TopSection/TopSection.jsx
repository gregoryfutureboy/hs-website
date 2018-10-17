import React, { Component } from 'react'
import styled from 'react-emotion';

const StyledTopContainer = styled('div')`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledTopTitle = styled('h1') `
  font-size: 5rem;
  letter-spacing: 0.04rem;
  margin: 0 0 2rem 0;
  color: black;
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
