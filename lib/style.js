/**
 * Created by michaelmalura on 30/07/16.
 */

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import Constants from 'react-native-basic-constants';

export default StyleSheet.create({
	navigator    : {
		flex           : 1,
		backgroundColor: 'white'
	},
	navigationBar: {
		backgroundColor: '#333'
	},
	titleBarText : {
		color     : 'white',
		fontWeight: 'bold'
	},
	page         : {
		flex           : 1,
		marginTop      : Constants.NavigationBarHeight,
		backgroundColor: 'white'
	}
});