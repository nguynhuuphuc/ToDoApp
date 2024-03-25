import {Text, TouchableOpacity, View} from 'react-native';
import {style} from '../main/style/style';
import {memo} from 'react';

interface ItemProps {
  content: string;
  onDelete: Function;
  index: number;
}

export const TaskItem = memo(({content, onDelete, index}: ItemProps) => {
  return (
    <TouchableOpacity onPress={() => onDelete(index)}>
      <View style={[style.item, style.mt_24]}>
        <View style={style.subitem}>
          <View style={[style.square, style.mr_16]}></View>
          <Text>{content}</Text>
        </View>
        <View style={style.circle}></View>
      </View>
    </TouchableOpacity>
  );
});
