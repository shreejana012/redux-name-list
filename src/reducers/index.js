import {combineReducers} from 'redux';
import FormReducer from './form-reducer';

const allReducers = combineReducers({
    name: FormReducer,
});
export default allReducers;
