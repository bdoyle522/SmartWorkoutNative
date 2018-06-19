
import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { bindActionCreators, createStore } from 'redux';
import { StyleSheet, Text, View, TabBarIOS } from 'react-native';

import rootReducer from './src/Redux/Reducers/main';
import Main from "./src/components/main";

import * as Actions from "./src/Redux/Actions/main";


export const store = createStore(rootReducer);



const mapStateToProps = (state) => {

	return state.main.toObject();
}

const mapDispatchToProps = (dispatch) => {

	return {
		actions: bindActionCreators(Actions, dispatch)
	}
}

const App = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Main);

export default class WorkoutLogger extends Component {

	render() {
    	return (
    		<Provider store={store}>
	    		<App />
	    	</Provider>
    	);
	}
}
