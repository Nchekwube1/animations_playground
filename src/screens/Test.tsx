import {Button, Pressable, StyleSheet, View} from 'react-native';
import React, {FC, useMemo, useState} from 'react';
import globalStyles, {height} from '../styles/globalstyles';
import Animated, {
  BounceInLeft,
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {MotiTransitionProp, MotiView} from 'moti';
import colors from '../styles/colors';

const BOX_WIDTH = 70;
const trackSize = 70;
const ANGLE = 30;

interface switchProps {
  size: number;
  onPress: () => void;
  isActive: boolean;
}
const transition: MotiTransitionProp = {
  type: 'timing',
  duration: 300,
  easing: Easing.inOut(Easing.ease),
};
const Switch: FC<switchProps> = ({size, onPress, isActive}) => {
  const trackWidth = useMemo(() => {
    return size * 1.5;
  }, [size]);
  const trackHeigth = useMemo(() => {
    return size * 0.4;
  }, [size]);
  const knobSize = useMemo(() => {
    return size * 0.6;
  }, [size]);
  return (
    <Pressable onPress={onPress}>
      <View
        style={[
          globalStyles.justifyCenter,
          globalStyles.alignCenter,
          globalStyles.mt30,
        ]}>
        <MotiView
          transition={transition}
          from={{
            backgroundColor: isActive ? colors.active : colors.inActive,
          }}
          style={[
            globalStyles.ansolute,
            {
              width: trackWidth,
              height: trackHeigth,
              borderRadius: trackHeigth / 2,
              backgroundColor: colors.active,
            },
          ]}
        />
        <MotiView
          transition={transition}
          from={{
            translateX: isActive ? trackWidth / 4 : -trackWidth / 4,
          }}
          style={[
            globalStyles.justifyCenter,
            globalStyles.alignCenter,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
              backgroundColor: 'white',
            },
          ]}>
          <MotiView
            transition={transition}
            from={{
              width: isActive ? knobSize : 0,
              borderColor: isActive ? colors.active : colors.inActive,
            }}
            style={[
              {
                // width: knobSize,
                height: knobSize,
                borderRadius: knobSize,
                borderWidth: size * 0.1,
                // borderColor: colors.active,
                backgroundColor: 'white',
              },
            ]}
          />
        </MotiView>
      </View>
    </Pressable>
  );
};

const Test = () => {
  const [isActive, setIsActive] = useState(false);
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
      transform: [
        {
          rotateZ: withSpring(`${rotation.value}deg`),
        },
      ],
    };
  });
  return (
    <Animated.View
      entering={BounceInLeft}
      style={[
        globalStyles.px20,
        globalStyles.pt10,
        globalStyles.h10,
        globalStyles.w10,
        // globalStyles.justifyCenter,
        {backgroundColor: 'white', height},
      ]}>
      <Animated.View style={[styles.box, animatedStyles]} />
      <Button onPress={() => (offset.value = Math.random())} title="Move" />

      <Animated.View style={[styles.box, animatedStyle]} />
      <Button
        title="wobble"
        onPress={() => {
          rotation.value = withSequence(
            withTiming(-ANGLE, {duration: 50}),
            withRepeat(withTiming(ANGLE, {duration: 100}), 6, true),
            withTiming(0, {duration: 50}),
          );
          // withRepeat(withTiming(10), 6, true);
        }}
      />
      <Switch
        size={trackSize}
        isActive={isActive}
        onPress={() => {
          setIsActive(!isActive);
        }}
      />
    </Animated.View>
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
