import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import globalStyles from '../styles/globalstyles';
import {ScaledSheet} from 'react-native-size-matters';
import colors from '../styles/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import palette from '../constants/palette/palette';

const FirstRoute = () => {
  const items = new Array(15).fill('a');

  return (
    <View style={[]}>
      {items.map((_, index) => (
        <View
          style={[
            globalStyles.mb10,
            {height: 80, borderRadius: 12, backgroundColor: 'red'},
          ]}
          key={index.toString()}
        />
      ))}
    </View>
  );
};
const SecondRoute = () => {
  const items = new Array(15).fill('a');

  return (
    <View style={[]}>
      {items.map((_, index) => (
        <View
          style={[
            globalStyles.mb10,
            {height: 80, borderRadius: 12, backgroundColor: 'cyan'},
          ]}
          key={index.toString()}
        />
      ))}
    </View>
  );
};
const ThirdRoute = () => {
  const items = new Array(15).fill('a');

  return (
    <View style={[]}>
      {items.map((_, index) => (
        <View
          style={[
            globalStyles.mb10,
            {height: 80, borderRadius: 12, backgroundColor: 'blue'},
          ]}
          key={index.toString()}
        />
      ))}
    </View>
  );
};

const StickyHeader = () => {
  const [routes] = useState([
    {key: 'first', title: 'Home'},
    {key: 'second', title: 'Feed'},
    {key: 'third', title: 'Messages'},
  ]);
  const translateY = useSharedValue(0);
  const viewHeight = useSharedValue(0);
  const [newIndex, setNewIndex] = useState(0);
  const [measured, setMeasured] = useState<number | null>(null);
  const scrollViewRef = useAnimatedRef<ScrollView>();
  const viewRef = useAnimatedRef<View>();
  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      let offset = Math.round(event.contentOffset.y);
      translateY.value = offset;
    },
  });
  const absoluteStyle = useAnimatedStyle(() => {
    return {
      top: translateY.value > viewHeight.value ? 0 : -200,
      // top: withTiming(translateY.value > viewHeight.value - 40 ? 0 : -200),
      // height: translateY.value,
      // top: 50,
    };
  });
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.black,
      }}>
      <Animated.View
        style={[
          globalStyles.px20,
          globalStyles.flexRow,
          globalStyles.w10,
          //   globalStyles.bgPrimary,
          {
            position: 'absolute',
            top: 0,
            width: '100%',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingVertical: 12,
            zIndex: 1000,
            paddingTop: 50,
            backgroundColor: palette.black,
            paddingBottom: 24,
          },
          absoluteStyle,
        ]}>
        {routes.map(({title, key}, index) => (
          <View
            key={key}
            style={[
              globalStyles.w3p3,
              detailStyle.disabledIndicatorStyle,
              index === newIndex && detailStyle.indicatorStyle,
            ]}>
            <TouchableOpacity
              onPress={() => {
                setNewIndex(index);
              }}
              style={[globalStyles.w10, {paddingBottom: 4}]}>
              <Text
                style={[
                  globalStyles.textWhite,
                  globalStyles.fontSize12,
                  {textAlign: 'center'},
                ]}>
                {title}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </Animated.View>
      <KeyboardAvoidingView
        style={[globalStyles.flexOne]}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <StatusBar backgroundColor={colors.black} barStyle={'light-content'} />
        <SafeAreaView style={[globalStyles.flexOne, globalStyles.bgBlack]}>
          <View style={{flex: 1}}>
            <TouchableWithoutFeedback
              accessible={false}
              onPress={Keyboard.dismiss}
              style={[globalStyles.flexOne]}>
              <Animated.ScrollView
                nestedScrollEnabled
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                ref={scrollViewRef as any}
                onScroll={onScroll}
                bounces={false}
                style={[globalStyles.flexOne]}>
                <View style={[globalStyles.px20]}>
                  <Animated.View
                    onLayout={event => {
                      const {height} = event.nativeEvent.layout;
                      viewHeight.value = height;
                      setMeasured(height);
                    }}
                    ref={viewRef as any}>
                    <View style={[globalStyles.pt20]}>
                      <View
                        style={[
                          globalStyles.w10,
                          {
                            height: 350,
                            borderRadius: 12,
                          },
                        ]}>
                        <Image
                          source={{
                            uri: 'https://images.unsplash.com/photo-1689126437563-f5d936a06713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60',
                          }}
                          style={[
                            globalStyles.w10,
                            globalStyles.h10,
                            {
                              borderRadius: 12,
                            },
                          ]}
                        />
                      </View>
                    </View>
                  </Animated.View>
                </View>
                <View style={[]}>
                  <View style={[globalStyles.pt20, globalStyles.px20]}>
                    {measured && (
                      <Animated.View
                        style={[
                          globalStyles.w10,
                          {
                            flexDirection: 'row',
                            alignItems: 'center',
                          },
                        ]}>
                        {routes.map(({title, key}, index) => (
                          <View
                            key={key}
                            style={[
                              globalStyles.w3p3,
                              detailStyle.disabledIndicatorStyle,
                              index === newIndex && detailStyle.indicatorStyle,
                            ]}>
                            <TouchableOpacity
                              onPress={() => {
                                setNewIndex(index);
                              }}
                              style={[globalStyles.w10, {paddingBottom: 4}]}>
                              <Text
                                style={[
                                  {
                                    textAlign: 'center',
                                  },
                                  globalStyles.fontSize12,
                                  globalStyles.textWhite,
                                ]}>
                                {title}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        ))}
                      </Animated.View>
                    )}
                    <View style={[globalStyles.pt20]}>
                      {newIndex === 0 && <FirstRoute />}
                      {newIndex === 1 && <SecondRoute />}
                      {newIndex === 2 && <ThirdRoute />}
                    </View>
                  </View>
                </View>
              </Animated.ScrollView>
            </TouchableWithoutFeedback>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </View>
  );
};
const detailStyle = ScaledSheet.create({
  imgSize: {
    height: '180@s',
  },
  disabledIndicatorStyle: {
    borderColor: colors.black,
    borderBottomWidth: 3,
  },
  indicatorStyle: {
    borderColor: colors.inActive,
    borderBottomWidth: 3,
  },
  bottom: {
    bottom: '30@s',
  },
});

export default StickyHeader;
