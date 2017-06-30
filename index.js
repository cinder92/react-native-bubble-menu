import React, {Component, PropTypes} from 'react';
import {
	View,
	ScrollView,
	StyleSheet,
	Easing,
	Animated,
	Dimensions
} from 'react-native';

const screen = Dimensions.get("window");
const MENU_WIDTH = screen.width * 0.5;
const MENU_HEIGHT = screen.height;

class BubbleMenu extends Component{

	constructor(props){
		super(props);
		const { show } = props;
		const openMenuValue = show ? screen.width - 25 : 50;
		const opacityValue = show ? 1 : 0;

		this.state = {
			openMenu : new Animated.Value(openMenuValue),
			opacity : new Animated.Value(opacityValue)
		}
	}

	componentWillReceiveProps(nextState){
		const {show} = nextState;

		let toValue = show ? screen.width - 25 : 50;

		Animated.parallel([
			Animated[show ? "spring" : "timing"](
				this.state.openMenu,{
					toValue,
					delay : show ? 0 : 195,
					duration : 225,
					easing : Easing.inOut(Easing.ease)
				}
			),
			Animated.timing(
				this.state.opacity,{
					toValue : show ? 1 : 0,
					delay : show ? 195 : 0,
					duration : 195,
					easing : Easing.inOut(Easing.ease)
				}
			)
		]).start();
	}

	render(){
		const {show, items, openBtn, color, style} = this.props;
		return(
			<Animated.View style={[styles.container,{
				width : this.state.openMenu,
				backgroundColor : show ? (color) ? color : "#ffffff" : (color) ? color : "#fafafa"
			},style]}>

					<View
						style={styles.button}
						pointerEvents={show ? "none" : "auto" }>
						{openBtn}
					</View>

					<Animated.View style={[styles.items,{
						opacity : this.state.opacity
					}]} pointerEvents={show ? "auto" : "none" }>
						{items}
					</Animated.View>

			</Animated.View>
		)
	}
}

BubbleMenu.propTypes = {
	color : PropTypes.string,
	show : PropTypes.bool.isRequired,
	items : PropTypes.array.isRequired,
	openBtn : PropTypes.object.isRequired,
	style : PropTypes.number
}

const styles = StyleSheet.create({
	container : {
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius : 50 / 2
	},

	button : {
		width : 50,
		height : 50,
		borderRadius : 50 / 2,
		justifyContent: 'center',
		alignItems: 'center'
	},

	items : {
		flexDirection : "row",
		alignItems : "center",
		justifyContent : "space-between",
		marginTop : -50
	}
});

export default BubbleMenu;
