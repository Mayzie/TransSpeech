import React, { Component } from 'react';

import {
	View,
	Text,
	Animated,
	Easing,
} from 'react-native';

import LottieView from 'lottie-react-native';

export default class SelectExerciseScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			progress: new Animated.Value(0),
		};
	}

	componentDidMount = () => {
		console.warn('Appeared');
		Animated.timing(this.state.progress, {
			toValue: 1,
			duration: 2000,
			easing: Easing.linear,
		}).start();
	}

	render() {
		return (
			<View>
				<Text>Hello world!</Text>

				<LottieView
					source={ require('../assets/lottie-tick1.json') }
					progress={ this.state.progress }
					style={{ width: 100, height: 100 }}
					resizeMode='cover'
				/>
			</View>
		);
	}
}
