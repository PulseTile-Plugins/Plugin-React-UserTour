import React from 'react';
import PropTypes from 'prop-types';
import Joyride from 'react-joyride';

import { tourSteps, toursStyles, locale } from './TourSteps';

const UserTour = ({ run }) => {
  return (
    <Joyride
      continuous
      hideBackButton={true}
      showSkipButton={true}
      showProgress={true}
      locale={locale}
      steps={tourSteps}
      run={run}
      styles={toursStyles}
      />
    );
};

UserTour.propTypes = {
  run: PropTypes.bool,
};

UserTour.defaultProps = {
  run: false,
};

export default UserTour;
