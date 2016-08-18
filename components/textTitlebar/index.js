/**
 * Created by michaelmalura on 30/07/16.
 */

import React, {Component} from 'react';
import {
	Text,
	View
} from 'react-native';
import Style from './style';

class TextTitleBar extends Component {
	render() {
		return (
			<View style={[Style.container, this.props.containerStyle]}>
				<Text style={[Style.text, this.props.textStyle]}>{this.props.title}</Text>
			</View>
		)
	}
}

TextTitleBar.propTypes = {
	title         : React.PropTypes.string,
	textStyle     : React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number,
		React.PropTypes.array,
		React.PropTypes.object
	]),
	containerStyle: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number,
		React.PropTypes.array,
		React.PropTypes.object
	])
};
TextTitleBar.defaultProps = {
	title: ''
};

export default TextTitleBar;