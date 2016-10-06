import {combineReducers} from 'redux';
import SelectedTabReducer from './navbarSelectedTab.js';

const allReducers = combineReducers({
  selectedNavTab : SelectedTabReducer
});

export default allReducers;
