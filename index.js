import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Joyride from 'react-joyride';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { clientUrls } from '../../../../../config/client-urls.constants';
import UserPanelItem from '../../../../containers/UserPanel/UserPanelItem';
import PTButton from '../../../../ui-elements/PTButton/PTButton';
import { setSidebarVisibility } from '../../../../../ducks/set-sidebar-visibility';
import { sidebarSelector } from './selector';
import { tourSteps, toursStyles, locale, homepage, themeStyles } from './content';
import './style.scss';

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        setSidebarVisibility,
    }, dispatch)
});
@compose(connect(sidebarSelector, mapDispatchToProps))
export default class UserTour extends Component {

  state = {
    isTourRun: false,
    isTourMode: true,
  };

  /**
   * This function add info to Cookie that user tour was passed
   *
   * @param tour
   */
  callback = (tour) => {
    const { type } = tour;
    const { actions } = this.props;

    if (type === 'tour:end') {
      document.cookie = 'userTour=passed';
      this.setState({
        isTourMode: !this.state.isTourMode,
      })
    }

    if (type === 'tooltip' && window.innerWidth < 768) {
        actions.setSidebarVisibility(false);
    }
  };

  /**
   * This function runs User Tour
   */
  runTour = () => {
    this.setState({
      isTourRun: !this.state.isTourRun,
    });
  };

  /**
   * This function toggles User Tour mode
   */
  toggleMode = () => {
    this.setState({
      isTourMode: true,
    })
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
    const { pageUrl, homepageLink } = this.props;
    const homepageLocation = {
      pathname: homepageLink,
      hash: '',
    };
    const { isTourRun, isTourMode } = this.state;
    const isPassed = (this.checkIsPassed() || isTourRun);
    return (
      <UserPanelItem className="user-panel-item">
        {(clientUrls.PATIENTS_SUMMARY === pageUrl)
          ?
          (isTourMode ?
            <div>
              <UserTourButton runTour={this.runTour} />
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
            </div>
              :
            <LinkToCustomer />)
            :
          <Link to={homepageLocation}>
            <PTButton title="Home" className="btn-header" aria-label="Home" onClick={this.toggleMode}>
              <i className="fa fa-question-circle" />
            </PTButton>
          </Link>
        }
      </UserPanelItem>
    );
  }
};

const UserTourButton = ({ runTour }) => {
  return (
    <PTButton title="User Tour" id="icon-tour" className="btn-header" aria-label="User Tour" onClick={() => runTour()}>
      <i className="fa fa-question-circle" />
    </PTButton>
  );
};
UserTourButton.propTypes = {
  runTour: PropTypes.func,
};
UserTourButton.defaultProps = {
  runTour: function () { },
};

/**
 * Link to the Customer homepage
 *
 * @return {XML}
 */
const LinkToCustomer = () => {
  return (
    <a href={homepage.link} target="_blank">
      <PTButton title={homepage.title} id="icon-link" className="btn-header" aria-label={homepage.title}>
        <i className="fa fa-question-circle" />
      </PTButton>
    </a>
  );
};
