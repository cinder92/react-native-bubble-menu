# react-native-bubble-menu

A Bubble menu effect for your react native application

# Example

![example](https://github.com/cinder92/react-native-bubble-menu/blob/master/demo.gif)

# How to install

`npm i -S react-native-bubble-menu`

# How to use

```
import BubbleMenu from 'react-native-bubble-menu';

...

render(){
   const {show} = this.state;

   return(
      <BubbleMenu
         items={this._renderItems()}
         openBtn={this._renderOpenBtn()}
         show={false}
         style={...}
      />
   )
}

_renderOpenBtn(){
   //you can merge it with, react-native-vector-icon too!
   
   //no icon
   return (
   	<TouchableOpacity>
		<View>
		    <Text>Open Me</Text>
		</View>
	</TouchableOpacity>
   );
   
   //with icon
   
   return (
   	<TouchableOpacity onPress={() => {
		this.setState({show:true})
	}}>
		<View>
		    <Icon name={"menu"} size={32} color={"white"} />
		</View>
	</TouchableOpacity>
   );
}

_renderItems(){
   let items = ["Btn1","Btn2","Btn3","Btn4","Btn5"];
   
   return items.map((item,i) => (
   	<TouchableOpacity onPress={() => {
		this.setState({show:false});
	}}>
		<View>
			<Text>{item}</Text>
		</View>
	</TouchableOpacity>
   ));
}
```

# Props

| Name  | Description | Required |
| ----- | ------------| -------- |
| show | Set `true` to show and `false` to hide | yes |
| color | Change color of bubble effect | no |
| items | Menu items (array) | yes |
| openBtn | Receives a component for open button | yes |
| style | Receives a custom style object | no |

# of coooourse PR are welcome :)
