import React from 'react';
import PropTypes from 'prop-types';
import FormattedCarbonIntensity from './formatted-carbon-intensity';

const CarbonIntensityWidget = ({carbonIntensity}) => {
    let requestPending = (carbonIntensity && carbonIntensity.pending) ? 'true' : 'false';
    let actualIntensity = carbonIntensity && carbonIntensity.details && carbonIntensity.details.intensity && carbonIntensity.details.intensity.actual;
    let intensityIndex = carbonIntensity && carbonIntensity.details && carbonIntensity.details.intensity && carbonIntensity.details.intensity.index;
    let validFrom = carbonIntensity && carbonIntensity.details && carbonIntensity.details.from;
    let validTo = carbonIntensity && carbonIntensity.details && carbonIntensity.details.to;

    return (
        <ul>
            <li>Current Intensity: <FormattedCarbonIntensity co2Intensity={actualIntensity} /></li>
            <li>Request Pending: {requestPending}</li>
            <li>Index: {intensityIndex}</li>
            <li>Valid From: {validFrom} until {validTo}</li>
        </ul>
    );
}

CarbonIntensityWidget.propTypes = {
    carbonIntensity: PropTypes.object
}

export default CarbonIntensityWidget;