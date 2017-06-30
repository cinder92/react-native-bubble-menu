import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BubbleMenu from 'react-native-bubble-menu';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#384058',
    alignItems: 'center',
  },
  menu: {
    padding: 15,
    borderRadius: 50,
    justifyContent: 'space-between',
  },
  menuGeneralIcons: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: '#FFF',
    /**
     * If I didn't put the backgroundColor here, I would still be able to see the openBtn menu icon
     * underneath the central 'general' icon. Maybe we should add a fade out / fade in effect for
     * that openBtn icon in componentWillReceiveProps?
     */
  },
  menuOpenBtn: {
    width: '100%',
    height: 50,
    alignItems: 'center',
  },
});

const noop = () => {};

export default class Example extends Component {

  state = {
    show: false,
  };

  _toggleMenuVisibility = () => {
    this.setState(({ show }) => ({
      show: !show,
    }));
  }

  _renderItems = () => {
    const icons = [
      {
        name: 'call',
        action: noop,
      },
      {
        name: 'search',
        action: noop,
      },
      {
        name: 'close',
        action: this._toggleMenuVisibility,
      },
      {
        name: 'contacts',
        action: noop,
      },
      {
        name: 'send',
        action: noop,
      },
    ];

    const items = icons.map(({ name, action }, key) => (
      <TouchableOpacity
        onPress={action}
        key={key}
        style={styles.menuGeneralIcons}
      >
        <Icon
          name={name}
          size={30}
          color="#fd0014"
        />
      </TouchableOpacity>
    ));
    return items;
  }

  _renderOpenBtn = () => (
    <TouchableOpacity
      onPress={this._toggleMenuVisibility}
      style={styles.menuOpenBtn}
    >
      <Icon
        name="menu"
        size={30}
        color="#fd0014"
      />
    </TouchableOpacity>
  )

  render() {
    const { show } = this.state;
    const items = this._renderItems();
    const openBtn = this._renderOpenBtn();

    return (
      <View style={styles.container}>
        <BubbleMenu
          items={items}
          openBtn={openBtn}
          show={show}
          style={styles.menu}
        />
      </View>
    );
  }
}
