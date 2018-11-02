import sinon from 'sinon';
import { after } from 'mocha';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import 'chai/register-expect';  // for BDD style assertions
import * as actions from '../../src/store/actions';
import * as carbonIntensityReducer from '../../src/store/carbon-intensity-reducer';
import * as carbonIntensityService from '../../src/services/carbon-intensity-service';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Carbon Intensity Reducer', () => {
    after(() => {
        sinon.restore(); // Unwraps the spy
    });

    it('fetching carbon intensity dispatches request and receipt actions', (done) => {
        // Stub out getCarbonIntensityDetailsAsync function with realistic returned JSON.
        let details = {
            'from': '2018-12-31T23:00Z',
            'to': '2018-12-31T23:30Z',
            'intensity': {
                'forecast': 133.7,
                'actual': 42,
                'index': 'high'
            }
        };
        sinon.stub(carbonIntensityService, 'getCarbonIntensityDetailsAsync')
             .resolves(details);

        const expectedActions = [
            { type: actions.REQUEST_CARBON_INTENSITY },
            { type: actions.RECEIVE_CARBON_INTENSITY, payload: details }
        ];
        const store = mockStore({});

        store.dispatch(carbonIntensityReducer.fetchIntensity())
             .then(() => {
                 expect(store.getActions()).to.equal(expectedActions);
             })
             .finally(done());
    });
});