
import { combineReducers } from 'redux';

import Immutable from 'immutable';

const initialState = Immutable.Map({
	selectedTab: "favorites"
})




const main = (state = initialState, action) => {


	switch(action) {

		default:

			return state;
	}
}


export default combineReducers({
	main
})