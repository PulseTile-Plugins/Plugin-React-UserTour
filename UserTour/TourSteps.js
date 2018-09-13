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
        lowTitle: 'Welcome to the tour by HelmPHR...',
        target: '#icon-tour',
        content: 'Please, click the "Next"...',
        placement: 'bottom',
    },
    {
        title: 'Guided Step 1',
        lowTitle: 'Select the home button at any time...',
        target: '#icon-home',
        content: 'Press the home button at any time to return to your Patient Dashboard.',
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
        lowTitle: 'Select Problems / Issues',
        target: '#summary-panel-problems .board',
        content: 'View Problems and Diagnosis from your personal health record.',
        placement: 'bottom',
    },
    {
        title: 'Guided Step 4',
        lowTitle: 'Select Medications...',
        target: '#summary-panel-medications .board',
        content: 'The Medications area displays all the registered medications....',
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


export const tourSteps = getStepsArray(steps);

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