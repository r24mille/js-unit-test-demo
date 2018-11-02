import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { configure, shallow } from 'enzyme';
import 'chai/register-expect';  // for BDD style assertions
import FormattedCarbonIntensity from '../../../src/components/presentational/formatted-carbon-intensity';

configure({ adapter: new Adapter() });  // could be moved to a test setup script

describe('Formatted Carbon Intensity Text', () => {
    /*
     * The enzyme selector makes this test a bit brittle. What if we re-style and switch id attributes around?
     * It does read clearer than the latter tests.
     * If the test is broken, mocha also gives a more meaningful error message.
     */
    it('should display "Unknown" if CO2 intensity is undefined (brittle)', () => {
        let formattedCarbonIntensity = shallow(<FormattedCarbonIntensity co2Intensity={false} />);
        expect(formattedCarbonIntensity.find('#formatted-co2-intensity').text()).to.equal('Unknown');
    });

    it('should display "Unknown" if CO2 intensity is undefined', () => {
        let formattedCarbonIntensity = shallow(<FormattedCarbonIntensity co2Intensity={undefined} />);
        expect(formattedCarbonIntensity.children().someWhere(n => n.text() === 'Unknown')).to.equal(true);
    });

    it('should display "Unknown" if CO2 intensity is falsy', () => {
        let formattedCarbonIntensity = shallow(<FormattedCarbonIntensity co2Intensity={false} />);
        expect(formattedCarbonIntensity.children().someWhere(n => n.text() === 'Unknown')).to.equal(true);
    });

    /*
     * The enzyme selector makes this test a bit brittle. What if we re-style and switch id attributes around?
     * It does read clearer than the latter tests.
     * If the test is broken, mocha also gives a more meaningful error message.
     */
    it('should append units-of-measure to numeric carbon intensity (brittle)', ()=> {
        let testIntensity = 133.7;
        let formattedCarbonIntensity = shallow(<FormattedCarbonIntensity co2Intensity={testIntensity} />);
        expect(formattedCarbonIntensity.find('#formatted-co2-intensity').text()).to.equal(testIntensity + ' gCO2/kWh');
    });

    /* ¯\_(ツ)_/¯
    it('should append units-of-measure to numeric carbon intensity', ()=> {
        let testIntensity = 133.7;
        let formattedCarbonIntensity = shallow(<FormattedCarbonIntensity co2Intensity={testIntensity} />);
        expect(formattedCarbonIntensity.children().someWhere(n => n.text() === testIntensity + ' gCO2/kWh')).to.equal(true);
    });
    */
});