import React, { Component } from 'react';

import {
	Navigation,
} from 'react-native-navigation';

import {
	StyleSheet,
	View,
	Text,
	//Button,
	ToastAndroid,
	Animated,
	Easing,
	TouchableNativeFeedback,
	Dimensions,
} from 'react-native';

import {
	Button,
} from '../components/button';

import LottieView from 'lottie-react-native';

import {
	exercises,
} from '../config.exercises';

export default class ExerciseScreen extends Component {
	showNull = true;
	showTick = false;

	constructor(props) {
		super(props);

		console.log('In constructor');
		console.log(props);

		this.state = {
			currentExercise: -1,
		}

		this.state = {
			currentRep: 0,
			currentExercise: this.getNextExercise(),
			animation: new Animated.Value(0),
			animating: false,
		}

		this.showNull = false;
	}

	componentDidAppear() {
		console.log('Did appear');
		console.log(this.props);
	}

	getNextExercise = () => {
		if(this.props.selectedExercises) {
			let currentExercise = this.state.currentExercise;

			for(let i = currentExercise + 1; i < exercises.length; ++i) {
				if(this.props.selectedExercises[i]) {
					return i;
				}
			}
		}

		return -1;
	}

	onTickPress = () => {
		let nextExercise = this.getNextExercise();

		if(nextExercise < 0) {
			Navigation.popToRoot(this.props.componentId);

			this.showNull = true;

			ToastAndroid.show('Congrats on completing a session! :-)', ToastAndroid.SHORT);

			return;
		}

		this.setState({
			currentExercise: nextExercise,
			currentRep: 0,
			animation: new Animated.Value(0),
			animating: false,
		});
	}

	onPress = () => {
		this.setState({
			currentRep: this.state.currentRep + 1,
		});

		if(exercises[this.state.currentExercise].onNext) {
			exercises[this.state.currentExercise].onNext(exercises[this.state.currentExercise].text);
		}

		if(this.state.currentRep >= exercises[this.state.currentExercise].minReps - 1) {
			Animated.timing(this.state.animation, {
				toValue: 1,
				duration: 1000,
				easing: Easing.linear,
			}).start();

			this.setState({
				animating: true,
			});
		}
	}

	render() {
		if(this.showNull) 
			return null;

		let tick = null;
		if(this.state.animating) {
			tick = (
				<View style={{ flex: 2, flexDirection: 'column'}}>
					<TouchableNativeFeedback
						onPress={ this.onTickPress }
						style={{ flex: 2 }}
					>
						<View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
							<Text>Tap the tick to continue</Text>

							<View style={{ flex: 1 }}>
								<LottieView
									source={ require('../assets/lottie-tick1.json') }
									progress={ this.state.animation }
									style={{ width: 150, height: 150 }}
									resizeMode='cover'
								/>
							</View>
						</View>
					</TouchableNativeFeedback>
				</View>
			);
		} else {
			tick = (
				<View style={{ flex: 2 }}></View>
			);
		}

		let innerText = exercises[this.state.currentExercise].text;
		if(innerText.constructor === Array) {
			if(innerText.length === 0) {
				innerText = exercises[this.state.currentExercise].onEmpty();
				exercises[this.state.currentExercise].text = innerText;
			}

			innerText = innerText[0];
		}

		var {height, width} = Dimensions.get('window');

		return (
			<View style={[{ padding: 45 }, style.rootStyle]}>
				<View style={ style.rootStyle }>
					{ tick }
					<View style={{ width: '100%', flex: 3, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
						<View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
							<Text style={ style.completedStyle }>You've done: { this.state.currentRep }</Text>
							<Text style={ [style.mainTextStyle, { textAlign: 'center' }] }>"{ innerText }"</Text>
						</View>
						<View style={{ flex: 1, width: '100%' }}>
							<Button
								title='Next'
								onPress={ this.onPress }
								color='white'
								backgroundColor='#2196F3'
								style={{
									width: width - 90,
									height: 32,
								}}
							/>
						</View>
					</View>
				</View>
			</View>
		);
	}
}

const style = StyleSheet.create({
	rootStyle: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-around',
		width: '100%',
		backgroundColor: 'white',
	},
	completedStyle: {
		fontSize: 24,
	},
	mainTextStyle: {
		fontSize: 42,
	},
});
