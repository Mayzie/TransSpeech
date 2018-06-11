//import { AppRegistry } from 'react-native';
//import App from './App';

import {
	Navigation
} from 'react-native-navigation';

import SelectExerciseScreen from './screens/select-exercise';
import ExerciseScreen from './screens/exercise';
import HistoryScreen from './screens/history';
import SettingsScreen from './screens/settings';

Navigation.registerComponent('transspeech.SelectExercise', () => SelectExerciseScreen);
Navigation.registerComponent('transspeech.Exercise', () => ExerciseScreen);
Navigation.registerComponent('transspeech.History', () => HistoryScreen);
Navigation.registerComponent('transspeech.Settings', () => SettingsScreen);

Navigation.events().registerAppLaunchedListener(() => {
	Navigation.setRoot({
		root: {
			bottomTabs: {
				children: [
					{
						stack: {
							children: [
								{
									component: {
										name: 'transspeech.SelectExercise',
										title: 'Select Exercises',
									},
								},
							],
							options: {
								bottomTab: {
									title: 'Exercises',
									icon: require('./assets/icon-exercises2.png'),
								},
								topBar: {
									title: {
										text: 'Select Exercises',
									},
								},
							},
						},
					},
					{
						stack: {
							children: [
								{
									component: {
										name: 'transspeech.History',
										title: 'History',
									},
								},
							],
							options: {
								bottomTab: {
									title: 'History',
									icon: require('./assets/icon-chart.png'),
								},
								topBar: {
									visible: false,
									animate: false,
									drawBehind: true,
								},
							},
						},
					},
					{
						stack: {
							children: [
								{
									component: {
										name: 'transspeech.Settings',
										title: 'Settings',
									},
								},
							],
							options: {
								bottomTab: {
									title: 'Settings',
									icon: require('./assets/icon-settings.png'),
								},
								topBar: {
									visible: false,
									animate: false,
									drawBehind: true,
								},
							},
						},
					},
				]
			}
		}
	});
});

//AppRegistry.registerComponent('TransSpeech', () => App);
