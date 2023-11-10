/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {ImageBackground, StatusBar, ScrollView, View} from 'react-native';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {ScaledSheet} from 'react-native-size-matters';
import palette from '../constants/palette/palette';
import globalStyles, {width} from '../styles/globalstyles';

const Onboarding = () => {
  const scrollViewRef = useAnimatedRef<ScrollView>();
  const translateX = useSharedValue(0);
  const widthVal = useSharedValue(0);
  const [currIndex, setCurrndex] = useState(0);

  const setActionIndex = (val: number) => {
    setCurrndex(val);
  };

  const newSliderOptions = useMemo(
    () => [
      {
        bg: 'https://images.unsplash.com/photo-1640653410511-bee9946865ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG9uYm9hcmRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      },
      {
        bg: 'https://images.unsplash.com/photo-1641862039942-5815d8f74938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG9uYm9hcmRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      },
      {
        bg: 'https://images.unsplash.com/photo-1605165566807-508fb529cf3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25ib2FyZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      },
    ],
    [],
  );
  const scroller = useCallback(() => {
    if (currIndex < newSliderOptions.length - 1) {
      scrollViewRef.current?.scrollTo({
        x: width * (translateX.value + 1),
      });
    } else {
      scrollViewRef.current?.scrollTo({
        x: 0,
      });
    }
  }, [currIndex, scrollViewRef, newSliderOptions.length, translateX.value]);
  const scrollingWorklet = useCallback(() => {
    'worklet';
    widthVal.value = withTiming(
      1,
      {duration: 6000, easing: Easing.linear},
      finished => {
        if (finished) {
          runOnJS(scroller)();
        }
      },
    );
  }, [scroller, widthVal]);
  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      let offset = Math.round(event.contentOffset.x / width);
      translateX.value = offset;
      runOnJS(setActionIndex)(offset);
      widthVal.value = 0;
      scrollingWorklet();
    },
  });

  useEffect(() => {
    scrollingWorklet();
  }, [scrollingWorklet]);

  const animatedWidth = useAnimatedStyle(() => {
    return {
      width: `${widthVal.value * 100}%`,
      backgroundColor: palette.white,
    };
  });

  return (
    <View
      style={[
        globalStyles.flexOne,
        globalStyles.justifyCenter,
        globalStyles.alignCenter,
      ]}>
      <StatusBar barStyle={'dark-content'} hidden />
      <View
        // zIndex={5}
        style={[
          globalStyles.absolute,
          onboardingStyle.top,
          globalStyles.w10,
          onboardingStyle.indicHeight,
          globalStyles.px20,
          {
            zIndex: 5,
          },
        ]}>
        <View style={[globalStyles.flexRow, globalStyles.alignCenter]}>
          {newSliderOptions.map((_, index) => (
            <Animated.View
              key={index.toString()}
              style={[
                globalStyles.flexOne,
                globalStyles.br,
                {
                  marginHorizontal: 6,
                  backgroundColor: palette.placeHolderText,
                },
              ]}>
              {currIndex === index && (
                <Animated.View
                  style={[globalStyles.h10, globalStyles.br, animatedWidth]}
                />
              )}
              {currIndex !== index && (
                <Animated.View style={[globalStyles.h10]} />
              )}
            </Animated.View>
          ))}
        </View>
      </View>
      <Animated.ScrollView
        style={[globalStyles.flexOne, globalStyles.relative]}
        showsHorizontalScrollIndicator={false}
        horizontal
        ref={scrollViewRef as any}
        onScroll={onScroll}
        pagingEnabled>
        {newSliderOptions.map(({bg}, index) => (
          <View
            style={[
              globalStyles.h10,
              globalStyles.justifyCenter,
              globalStyles.alignCenter,
              {width},
            ]}
            key={index.toString()}>
            <ImageBackground
              source={{
                uri: bg,
              }}
              style={[globalStyles.w10, globalStyles.h10]}
            />
          </View>
        ))}
      </Animated.ScrollView>
    </View>
  );
};

const onboardingStyle = ScaledSheet.create({
  bottom: {
    bottom: '40@s',
  },
  top: {
    top: '50@s',
  },
  indicHeight: {
    height: '2@s',
  },
});

export default Onboarding;
