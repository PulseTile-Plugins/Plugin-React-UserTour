import _ from 'lodash/fp';
import { createSelector } from 'reselect';

export const sidebarSelector = createSelector(
    ({ isSidebarVisible }) => isSidebarVisible,
    (state, props) => _.getOr(null, 'match.params.userId', props),
    (isSidebarVisible, userId) => {
        return isSidebarVisible;
    }
);