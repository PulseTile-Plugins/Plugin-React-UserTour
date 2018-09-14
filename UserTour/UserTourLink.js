import React from 'react';

import UserPanelItem from '../UserPanel/UserPanelItem';
import PTButton from '../../ui-elements/PTButton/PTButton';

/**
 * This component renders the button with "?"
 * It occurs when user has passed the Tour and overwrite button which run the Tour
 * This button is a link to MyHelm.org
 */
const UserTourLink = () => {
    return (
        <UserPanelItem className="user-panel-item">
            <a href="http://myhelm.org" target="_blank">
                <PTButton title="MyHelm.org" id="icon-link" className="btn-header">
                    <i className="fa fa-question-circle" />
                </PTButton>
            </a>
        </UserPanelItem>
    );
};

export default UserTourLink;
