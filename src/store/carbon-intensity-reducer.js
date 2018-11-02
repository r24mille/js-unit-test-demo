import {
    RECEIVE_CARBON_INTENSITY,
    REQUEST_CARBON_INTENSITY
} from './actions';
import * as carbonIntensityService from '../services/carbon-intensity-service';

const initialState = {
    pending: false
}

// Action Creators
const requestIntensity = () => {
    return {
        type: REQUEST_CARBON_INTENSITY
    }
}

const receiveIntensity = carbonIntensityDetails => {
    return {
        type: RECEIVE_CARBON_INTENSITY,
        payload: carbonIntensityDetails
    }
}

export const fetchIntensity = () => {
    return (dispatch) => {
        /*
         * Dispatch an action (i.e. the result of an action creator) for 
         * the reducer to use when mutating the Redux state.
         */
        dispatch(requestIntensity());
        carbonIntensityService.getCarbonIntensityDetailsAsync()
                              .then(details => dispatch(receiveIntensity(details)));
    }
}

const intesityReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_CARBON_INTENSITY:
            return {
                ...state,
                pending: false,
                details: action.payload
            };
        case REQUEST_CARBON_INTENSITY:
            return {
                ...state,
                pending: true
            };
        default:
            return state;
    }
}

export default intesityReducer;