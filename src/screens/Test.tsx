import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';
import globalStyles, {height, width} from '../styles/globalstyles';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
const BOX_WIDTH = 70;

const Test = () => {
  const offset = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: withSpring(offset.value * 255)}],
    };
  });
  return (
    <View
      style={[
        globalStyles.px20,
        globalStyles.h10,
        globalStyles.w10,
        globalStyles.justifyCenter,
        {backgroundColor: 'white', height},
      ]}>
      <Animated.View style={[styles.box, animatedStyles]} />
      <Button onPress={() => (offset.value = Math.random())} title="Move" />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: BOX_WIDTH,
    height: BOX_WIDTH,
    borderRadius: 10,
    backgroundColor: 'blue',
  },
});

export default Test;
