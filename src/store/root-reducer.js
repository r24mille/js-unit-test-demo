import { combineReducers } from 'redux';
import carbonIntensityReducer from './carbon-intensity-reducer';

const rootReducer = combineReducers({
    carbonIntensity: carbonIntensityReducer
});

export default rootReducer;