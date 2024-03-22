/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component} from 'react';
import {
  Button,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {style} from './style/style';
class App extends Component {
  onPress = () => {
    console.log('Clicked');
  };

  render() {
    return (
      <View style={style.container}>
        <Text style={style.title}>Today's Tasks</Text>
        <ScrollView style={style.mt_24}>
          <View style={style.item}>
            <View style={style.subitem}>
              <View style={[style.square, style.mr_16]}></View>
              <Text>Like</Text>
            </View>
            <View style={style.circle}></View>
          </View>
          <View style={[style.item, style.mt_24]}>
            <View style={style.subitem}>
              <View style={[style.square, style.mr_16]}></View>
              <Text>Comment</Text>
            </View>
            <View style={style.circle}></View>
          </View>
          <View style={[style.item, style.mt_24]}>
            <View style={style.subitem}>
              <View style={[style.square, style.mr_16]}></View>
              <Text>Subscribe</Text>
            </View>
            <View style={style.circle}></View>
          </View>
        </ScrollView>
        <View style={style.wrapper}>
          <TextInput
            style={[style.input, style.shadow]}
            placeholder="Write a task"
          />
          <TouchableOpacity
            onPress={this.onPress}
            style={[style.btn, style.shadow]}>
            <Image source={require('../images/add/add.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default App;
