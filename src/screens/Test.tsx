import {View, Button, StyleSheet} from 'react-native';
import React from 'react';
import globalStyles, {height} from '../styles/globalstyles';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
const BOX_WIDTH = 70;
const ANGLE = 30;

const Test = () => {
  const offset = useSharedValue(0);
  const rotation = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(offset.value * 255, {
            damping: 10,
            stiffness: 71,
          }),
        },
      ],
    };
  });
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotateZ: withSpring(`${rotation.value}deg`)}],
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

      <Animated.View style={[styles.box, animatedStyle]} />
      <Button
        title="wobble"
        onPress={() => {
          // rotation.value = Math.random() * 180
          rotation.value = withSequence(
            withTiming(-ANGLE, {duration: 50}),
            withRepeat(withTiming(ANGLE, {duration: 100}), 6, true),
            withTiming(0, {duration: 50}),
          );
          // withRepeat(withTiming(10), 6, true);
        }}
      />
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
