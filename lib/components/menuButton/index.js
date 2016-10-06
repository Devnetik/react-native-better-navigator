/**
 * Created by michaelmalura on 30/07/16.
 */

import React, {Component} from 'react';
import {
	Text,
	Image,
	TouchableHighlight,
	View
} from 'react-native';
import Style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
class MenuButton extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<TouchableHighlight style={[Style.button]}
								onPress={this.props.onPress}
								underlayColor={'transparent'}>
				<Icon name={this.props.icon} size={this.props.size} color={this.props.color}/>
			</TouchableHighlight>
		)
	}
}

MenuButton.propTypes = {
	color  : React.PropTypes.string,
	size   : React.PropTypes.number,
	icon   : React.PropTypes.string,
	onPress: React.PropTypes.func.isRequired,
};
MenuButton.defaultProps = {
	color: 'white',
	size : 20,
	icon : 'bars',
};

export default MenuButton;