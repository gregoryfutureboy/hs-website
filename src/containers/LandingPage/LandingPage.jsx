import React, { Component, Fragment } from 'react';

import HeroSection from './HeroSection/HeroSection';
import SeedSection from './SeedSection/SeedSection';
import WeeklyDoseSection from './WeeklyDoseSection/WeeklyDoseSection';

class LandingPage extends Component {
  render() {
    return (
      <Fragment>
        <HeroSection />
        {/* <SeedSection /> */}
        <WeeklyDoseSection />
      </Fragment>
    )
  }
}

export default LandingPage
