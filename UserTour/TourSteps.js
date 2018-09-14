import React from 'react';
import './style.scss';

function getStepsArray(steps) {
    let result = [];
    for (let i = 0, n = steps.length; i < n; i++) {
        let item = steps[i];
        result[i] = {
            title: item.title,
            target: item.target,
            content: (
                <div className="tour-body">
                    <h4 className="tour-body-title">{item.lowTitle}</h4>
                    <p className="tour-body-content">{item.content}</p>
                </div>
            ),
            placement: item.placement,
            disableOverlayClicks: true,
            showSkipButton: true,
        }
    }
    return result;
}

const steps = [
    {
        title: 'Hello!',
        lowTitle: 'Welcome to the quick tour of Helm',
        target: '#icon-tour',
        content: '',
        placement: 'bottom',
    },
    {
        title: 'Guided Step 1',
        lowTitle: 'Select the home button at any time...',
        target: '#icon-home',
        content: 'Press the home button at any time to return to your dashboard.',
        placement: 'bottom',
    },
    {
        title: 'Guided Step 2',
        lowTitle: 'Select the profile icon...',
        target: '#icon-profile',
        content: 'The profile allows you to view your personal information.',
        placement: 'bottom',
    },
    {
        title: 'Guided Step 3',
        lowTitle: 'Click on a heading or icon for further information',
        target: '#summary-panel-problems .board',
        content: 'Click on the icon, or heading to view the detailed information within.',
        placement: 'bottom',
    },
    {
        title: 'Guided Step 4',
        lowTitle: '',
        target: '#summary-panel-medications .board',
        content: 'Or you can click on a specific individual item to discover relevant detail',
        placement: 'right',
    },
    {
        title: 'Guided Step 5',
        lowTitle: 'Select Settings...',
        target: '#icon-settings',
        content: 'Use the settings cog to change the view of your dashboard.',
        placement: 'right',
    },
];

const lastStep = {
    title: 'End of tour',
    target: '#logo-image',
    content: (
        <div className="tour-body">
            <p className="tour-body-content">
                For more information and a guide on how to use Helm , please go to <a className="link" href="http://myhelm.org" title="MyHelm" target="_blank">
                    www.myhelm.org
                </a>
            </p>
        </div>
    ),
    placement: 'bottom',
    disableOverlayClicks: true,
    showSkipButton: true,
};

const stepsArray = getStepsArray(steps);

export const tourSteps = stepsArray.concat(lastStep);

export const toursStyles = {
    options: {
        beaconSize: 36,
        overlayColor: 'rgba(0, 0, 0, 0.5)',
        primaryColor: '#f04',
        spotlightShadow: 'none',
        textColor: '#333',
        width: 400,
        zIndex: 999999,
    }
};

export const locale = {
    next: 'Next',
    skip: 'Cancel',
    last: 'Last',
    back: 'Back',
};