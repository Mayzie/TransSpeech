import React, { Component } from 'react';

import {
	StyleSheet,
	View,
	Text,
	FlatList,
	TouchableWithoutFeedback,
	ToastAndroid,
} from 'react-native';

import DialogAndroid from 'react-native-dialogs';

import {
	changeExercises,
	exercisesChanged,
	exercises,
} from '../config.exercises';

export default class SettingsScreen extends Component {
	static get options() {
		return {
			topBar: {
				visible: false,
				drawBehind: true,
				animate: false,
			},
		}
	}

	constructor(props) {
		super(props);

		this.state = {
			refresh: false,
		}
	}

	renderItem = ({item}) => {
		return (
			<View style={ style.itemView }>
				<View style={{ flex: 1 }}>
					<Text style={{ fontSize: 18 }}>{ item.title }</Text>
				</View>
				<TouchableWithoutFeedback
					onPress={ async () => await this.onPress(item) }
				>
					<View style={{ width: 50 }}>
						<Text style={{ fontSize: 18, textAlign: 'right', textDecorationLine: 'underline' }}>{ item.minReps }</Text>
					</View>
				</TouchableWithoutFeedback>
			</View>
		);
	}

	onPress = async (item) => {
		const { action, text } = await DialogAndroid.prompt(
			item.title, 'Enter a new minimum required number.');

		if(text && action === DialogAndroid.actionPositive) {
			if(isNaN(text)) {
				ToastAndroid.show('That\'s not a number!', ToastAndroid.SHORT);
			} else {
				exercises[item.position].minReps = parseInt(text);

				changeExercises();
				this.setState({
					refresh: !this.state.refresh,
				});
			}
		}
	}

	render() {
		return (
			<View style={ style.rootStyle }>
				<FlatList
					style={ style.listStyle }
					data={ exercises }
					renderItem={ this.renderItem }
					extraData={ exercisesChanged }
				/>
			</View>
		);
	}
}

const style = StyleSheet.create({
	rootStyle: {
		flex: 1,
		flexDirection: 'column',
	},
	listStyle: {
		flex: 1,
	},
	itemView: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10,
	},
});
