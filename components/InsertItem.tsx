import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import {style} from '../main/style/style';
import React, {useRef, useState} from 'react';

interface iItemProps {
  hint?: string;
  onPressAdd: Function;
}

export const InsertItem = ({hint, onPressAdd}: iItemProps) => {
  let value: String;
  const textInputRef = useRef(null);
  return (
    <View style={style.wrapper}>
      <TextInput
        ref={textInputRef}
        style={[style.input, style.shadow]}
        placeholder={hint}
        onChangeText={text => (value = text)}
      />
      <TouchableOpacity
        onPress={() => onPressAdd(value, textInputRef)}
        style={[style.btn, style.shadow]}>
        <Image source={require('../images/add/add.png')} />
      </TouchableOpacity>
    </View>
  );
};
