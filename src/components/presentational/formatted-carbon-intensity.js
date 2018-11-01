import React from 'react';
import PropTypes from 'prop-types';

const FormattedCarbonIntensity = ({co2Intensity}) => {
    if (co2Intensity && co2Intensity >= 0) {
        return (
            <span>{co2Intensity} gCO<sub>2</sub>/kWh</span>
        )
    } else {
        return <span>Unknown</span>
    }
}

FormattedCarbonIntensity.propTypes = {
    carbonIntensity: PropTypes.number
}

export default FormattedCarbonIntensity;