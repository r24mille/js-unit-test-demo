import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { configure, shallow } from 'enzyme';
import 'chai/register-expect';  // for BDD style assertions
import FormattedCarbonIntensity from '../../../src/components/presentational/formatted-carbon-intensity';

configure({ adapter: new Adapter() });  // could be moved to a test setup script

describe('Formatted Carbon Intensity Text', () => {
    /*
     * The enzyme selector makes this test a bit brittle. What if we re-style and switch id attributes around?
     * It does read clearer than the latter tests though.
     */
    it('should display "Unknown" if CO2 intensity is undefined (brittle).', () => {
        let formattedCarbonIntensity = shallow(<FormattedCarbonIntensity co2Intensity={false} />);
        expect(formattedCarbonIntensity.find('#formatted-co2-intensity').text()).to.equal('Unknown');
    });

    it('should display "Unknown" if CO2 intensity is undefined.', () => {
        let formattedCarbonIntensity = shallow(<FormattedCarbonIntensity co2Intensity={undefined} />);
        expect(formattedCarbonIntensity.children().someWhere(n => n.text() === 'Unknown')).to.equal(true);
    });

    it('should display "Unknown" if CO2 intensity is falsy.', () => {
        let formattedCarbonIntensity = shallow(<FormattedCarbonIntensity co2Intensity={false} />);
        expect(formattedCarbonIntensity.children().someWhere(n => n.text() === 'Unknown')).to.equal(true);
    });
});