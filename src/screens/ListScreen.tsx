import {View, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import globalStyles, {height} from '../styles/globalstyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import colors from '../styles/colors';
import Animated, {Easing, SlideInRight} from 'react-native-reanimated';
import {logoUrls} from '../constants/data';
import {MotiTransitionProp, MotiView} from 'moti';

const ListScreen = () => {
  const [isActive, setIsActive] = useState(false);

  const transition: MotiTransitionProp = {
    type: 'timing',
    duration: 300,
    easing: Easing.inOut(Easing.ease),
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsActive(!isActive);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [isActive]);
  return (
    <View
      style={[
        globalStyles.w10,
        globalStyles.h10,
        globalStyles.px20,
        globalStyles.pt10,
        globalStyles.bgDark,
        {
          height: height,
          ...StyleSheet.absoluteFillObject,
        },
      ]}>
      <Animated.View
        entering={SlideInRight}
        style={[
          globalStyles.flex,
          globalStyles.flexRow,
          globalStyles.justifyBetweem,
          globalStyles.mt10,
        ]}>
        <Ionicons name="menu-outline" color={colors.white} size={30} />
        <FontAwesome5 name="shopping-bag" color={colors.white} size={22} />
      </Animated.View>
      <View
        style={[
          globalStyles.w10,
          globalStyles.mt30,
          globalStyles.borderradius,
          globalStyles.relative,
          {height: 160, backgroundColor: 'transparent', overflow: 'hidden'},
        ]}>
        <MotiView
          transition={transition}
          from={{
            translateY: isActive ? 0 : 160,
            zIndex: isActive ? 25 : 20,
            opacity: isActive ? 1 : 0,
          }}
          style={[
            globalStyles.w10,
            globalStyles.h10,
            globalStyles.borderradius,
            globalStyles.absolute,
          ]}>
          <Animated.Image
            source={{uri: logoUrls[0]}}
            resizeMode="cover"
            style={[
              globalStyles.w10,
              globalStyles.h10,
              globalStyles.borderradius,
              globalStyles.relative,
            ]}
          />
        </MotiView>
        <MotiView
          transition={transition}
          from={{
            translateY: !isActive ? 0 : 160,
            zIndex: !isActive ? 25 : 20,
            opacity: !isActive ? 1 : 0,
          }}
          style={[
            globalStyles.w10,
            globalStyles.h10,
            globalStyles.borderradius,
            globalStyles.absolute,
          ]}>
          <Animated.Image
            source={{uri: logoUrls[1]}}
            resizeMode="cover"
            style={[
              globalStyles.w10,
              globalStyles.h10,
              globalStyles.borderradius,
              globalStyles.relative,
            ]}
          />
        </MotiView>
      </View>
    </View>
  );
};

export default ListScreen;
