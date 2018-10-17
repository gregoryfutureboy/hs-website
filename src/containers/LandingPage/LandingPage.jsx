import React, { Component, Fragment } from 'react';

import HeroSection from './HeroSection/HeroSection';
import WeeklyDoseSection from './WeeklyDoseSection/WeeklyDoseSection';

class LandingPage extends Component {
  render() {
    return (
      <Fragment>
        <HeroSection />
        <WeeklyDoseSection />
      </Fragment>
    )
  }
}

export default LandingPage
