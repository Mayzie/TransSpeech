import React, { Component } from 'react';

import {
	Navigation,
} from 'react-native-navigation';

import {
	StyleSheet,
	View,
	Text,
	FlatList,
	//Button,
	ToastAndroid,
	Dimensions,
} from 'react-native';

import {
	CheckBox,
} from '../components/checkbox';

import {
	Button,
} from '../components/button';

import {
	exercisesChanged,
	exercises,
} from '../config.exercises';

export default class SelectExerciseScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selected: new Array(exercises.length),
		}

		this.state.selected.fill(true);
	}

	onItemCheckChange = (item, checked) => {
		let selected = this.state.selected;

		selected[item.position] = checked;

		this.setState({
			selected,
		});
	}

	onStartPress = () => {
		// Validate that at least one exercise from the list has been selected.
		for(let i = 0; i < this.state.selected.length; ++i) {
			if(this.state.selected[i]) {
				Navigation.push(this.props.componentId,
					{
						component: {
							name: 'transspeech.Exercise',
							passProps: {
								selectedExercises: this.state.selected,
							},
							options: {
								animated: false,
								topBar: {
									title: {
										text: 'Exercise',
									},
								},
							},
						},
					},
				);

				return;
			}
		}

		ToastAndroid.show('No exercises were selected', ToastAndroid.SHORT);
	}

	renderItem = ({item}) => {
		let checked = this.state.selected[item.position];

		return (
			<CheckBox
				checked={ checked ? true : false }
				title={ item.title + ' (' + item.minReps + ')'}
				onCheckedChange={ (isChecked) => this.onItemCheckChange(item, isChecked) }
				fontSize={ 18 }
				paddingLeft={ 90 }
			/>
		);
	}

	render() {
		var {height, width} = Dimensions.get('window');
		return (
			<View style={ style.rootStyle }>
				<FlatList
					style={ style.listStyle }
					data={ exercises }
					renderItem={ this.renderItem }
					extraData={ exercisesChanged }
				/>
				<Button
					title='Start Exercises'
					onPress={ this.onStartPress }
					backgroundColor='#9C27B0'
					color='white'
					style={{
						width: width - 20,
						height: 32,
					}}
				/>
			</View>
		);
	}
}

const style = StyleSheet.create({
	rootStyle: {
		flex: 1,
		flexDirection: 'column',
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 10,
		paddingTop: 10,
		backgroundColor: 'white',
	},
	listStyle: {
		flex: 1,
	},
});
