import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	requireNativeComponent,
	ViewPropTypes,
	TextPropTypes,
	TextStylePropTypes,
} from 'react-native';

const NativeComponent = requireNativeComponent('RCTCheckBox', CheckBox, { nativeOnly: { onCheckedChange: true, } });

export class CheckBox extends Component {
	static propTypes = {
		...ViewPropTypes,
		...TextPropTypes,
		title: PropTypes.string,
		checked: PropTypes.bool,
		onCheckedChange: PropTypes.func,
		fontSize: PropTypes.number,
		paddingLeft: PropTypes.number,
	}

	static defaultProps = {
		style: { width: 300, height: 50 },
		checked: true,
		title: '',
		onCheckedChange: undefined,
		fontSize: 12,
		paddingLeft: 30,
	}

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<NativeComponent
				style={ this.props.style }
				checked={ this.props.checked }
				title={ this.props.title }
				onCheckedChange={ this._onCheckedChange }
				fontSize={ this.props.fontSize }
				paddingLeft={ this.props.paddingLeft }
			/>
		);
	}

	_onCheckedChange = (event) => {
		if(this.props.onCheckedChange) {
			this.props.onCheckedChange(event.nativeEvent.isChecked);
		}
	}
}

