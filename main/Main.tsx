/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component, ReactElement} from 'react';
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
import {TaskItem} from '../components/TaskItem';
import {InsertItem} from '../components/InsertItem';

interface iProps {}

interface iState {
  textInput: string;
  listTaskItem: string[];
}

class App extends Component<iProps, iState> {
  private content: string;
  private listItem: string[];

  constructor(prop: any) {
    super(prop);
    this.content = '';
    this.state = {
      textInput: '',
      listTaskItem: [],
    };
    this.listItem = [];
  }

  private _onPress = (
    value: string,
    textInputRef: React.MutableRefObject<TextInput>,
  ) => {
    if (value === undefined || value === '') return;
    this.listItem.push(value);
    this.setState({
      listTaskItem: this.listItem,
    });
    textInputRef.current.clear();
  };

  private _onDelete = (index: number) => {
    this.listItem.splice(index, 1);
    this.setState({
      listTaskItem: this.listItem,
    });
  };

  private _renderTaskItems = (): Array<ReactElement> => {
    return this.listItem.map((item, index) => (
      <TaskItem
        index={index}
        onDelete={this._onDelete}
        key={index}
        content={item}
      />
    ));
  };

  render() {
    return (
      <View style={style.container}>
        <Text style={style.title}>Today's Tasks</Text>
        <ScrollView style={style.mt_24}>{this._renderTaskItems()}</ScrollView>
        <InsertItem hint="Write a task" onPressAdd={this._onPress} />
      </View>
    );
  }
}

export default App;
