# react-native-bubble-menu

A Bubble menu effect for your react native application, work very well with `react-native-verctor-icons`

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
         show={show}
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

# License

MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
