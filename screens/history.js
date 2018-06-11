import React, { Component } from 'react';

import {
	StyleSheet,
	View,
	Text,
	FlatList,
} from 'react-native';

import {
	exercises,
} from '../config.exercises';

export default class HistoryScreen extends Component {
	constructor(props) {
		super(props);
	}

	componentDidAppear() {
	}

	componentDidDisappear() {
	}

	render() {
		return (
			<View style={ style.rootStyle }>
				<Text style={{ fontSize: 16 }}>To be implemented...</Text>
			</View>
		);
	}
}

const style = StyleSheet.create({
	rootStyle: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
