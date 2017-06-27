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
   return(
      <BubbleMenu
         items={this._renderItems()}
         openBtn={this._renderOpenBtn()}
         show={false}
		 style={...}
      />
   )
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
