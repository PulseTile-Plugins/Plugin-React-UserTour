import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Joyride from 'react-joyride';

import { tourSteps, toursStyles, locale } from './TourSteps';

export default class UserTour extends Component {

    static propTypes = {
        run: PropTypes.bool,
    };

    static defaultProps = {
        run: false,
    };

    /**
     * This function add info to Cookie that user tour was passed
     *
     * @param tour
     */
    callback = (tour) => {
      const { type } = tour;
      if (type === 'tour:end') {
        document.cookie = 'userTour=passed';
        document.getElementById('icon-tour').style.display = 'none';
        document.getElementById('icon-link').style.display = 'block';
      }
    };

    /**
     * This function check that UserTour was passed
     *
     * @return {boolean}
     */
    checkIsPassed = () => {
        const decodedCookie = decodeURIComponent(document.cookie).split(';');
        return !(-1 !== decodedCookie.indexOf('userTour=passed') || -1 !== decodedCookie.indexOf(' userTour=passed'));
    };

    render() {
        const { run } = this.props;
        const isPassed = (this.checkIsPassed() || run);
        return (
            <Joyride
                continuous
                disableOverlayClose={true}
                showSkipButton={true}
                showProgress={true}
                locale={locale}
                steps={tourSteps}
                run={isPassed}
                styles={toursStyles}
                callback={this.callback}
            />
        );
    }
};


