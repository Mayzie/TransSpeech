import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	requireNativeComponent,
	ViewPropTypes,
	TouchableWithoutFeedback,
} from 'react-native';

const NativeComponent = requireNativeComponent('RCTButton', Button, { nativeOnly: { onPress: true, } });

export class Button extends Component {
	static propTypes = {
		...ViewPropTypes,
		title: PropTypes.string,
		onPress: PropTypes.func,
		fontSize: PropTypes.number,
		backgroundColor: PropTypes.string,
		color: PropTypes.string,
	}

	static defaultProps = {
		style: { width: 300, height: 50 },
		title: '',
		onPress: undefined,
		fontSize: 12,
	}

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<NativeComponent
				style={ this.props.style }
				title={ this.props.title }
				onPress={ this._onPress }
				fontSize={ this.props.fontSize }
				backgroundColor={ this.props.backgroundColor }
				color={ this.props.color }
			/>
		);
	}

	_onPress = (event) => {
		if(this.props.onPress) {
			this.props.onPress();
		}
	}
}

