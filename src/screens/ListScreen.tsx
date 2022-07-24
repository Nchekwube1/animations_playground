import {View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import globalStyles, {width} from '../styles/globalstyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../styles/colors';
import Animated, {Easing, SlideInRight} from 'react-native-reanimated';
import {data, logoUrls} from '../constants/data';
import {MotiTransitionProp, MotiView} from 'moti';
import {ScrollView} from 'react-native-gesture-handler';
import TextComponent from '../components/TextComponent';
import {useNavigation} from '@react-navigation/native';
import {SharedElement} from 'react-navigation-shared-element';
const ListScreen = () => {
  const [isActive, setIsActive] = useState(false);
  const {navigate} = useNavigation();
  const transition: MotiTransitionProp = {
    type: 'timing',
    duration: 1200,
    easing: Easing.inOut(Easing.linear),
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
    <ScrollView
      bounces={false}
      showsHorizontalScrollIndicator={false}
      style={[
        globalStyles.w10,
        globalStyles.h10,
        globalStyles.px20,
        globalStyles.py10,
        globalStyles.bgDark,
        {
          // height: height,
          // ...StyleSheet.absoluteFillObject,
          flex: 1,
        },
      ]}>
      <Animated.View
        entering={SlideInRight}
        style={[
          globalStyles.flex,
          globalStyles.flexRow,
          globalStyles.justifyBetweem,
          // globalStyles.mt10,
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
            // translateY: isActive ? 0 : -160,
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
            // translateY: !isActive ? 0 : -160,
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

      <View>
        <Animated.FlatList
          data={data}
          bounces={false}
          numColumns={2}
          // horizontal={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[
            globalStyles.flex,
            // globalStyles.flexRow,
            globalStyles.justifyBetweem,
            globalStyles.mt30,
            {backgroundColor: 'transparent', flex: 1},
          ]}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => navigate('DetailScreen', item)}>
                <Animated.View
                  style={[
                    globalStyles.borderradius,
                    globalStyles.mb20,
                    // index % 2 === 0 && globalStyles.marRight,
                    {
                      width: width / 2 - 23,
                      height: 245,
                      backgroundColor: colors.transparent,
                      borderColor: colors.inActive,
                      borderWidth: 1,
                      marginRight: 6,
                    },
                  ]}>
                  <SharedElement
                    style={[globalStyles.w10, globalStyles.h7]}
                    id={`${item.id}`}>
                    <View
                      style={[
                        globalStyles.w10,
                        globalStyles.h10,
                        globalStyles.borderradius,
                      ]}>
                      <Image
                        source={{uri: item.imageUrl[0]}}
                        style={[
                          globalStyles.w10,
                          globalStyles.h10,
                          {
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                          },
                        ]}
                      />
                    </View>
                  </SharedElement>

                  <View
                    style={[
                      globalStyles.flexRow,
                      globalStyles.flex,
                      globalStyles.px10,
                      globalStyles.py10,
                      globalStyles.relative,
                      // globalStyles.h10,
                    ]}>
                    <View style={[globalStyles.w7]}>
                      <TextComponent>{item.title}</TextComponent>
                      {/* <TextComponent>{item.desc}</TextComponent> */}
                      <TextComponent style={{color: colors.lemon}}>
                        {item.price}
                      </TextComponent>
                    </View>
                    <View
                      style={[
                        globalStyles.w3,
                        // globalStyles.h10,
                        globalStyles.justifyCenter,
                        globalStyles.alignCenter,
                      ]}>
                      <TouchableOpacity
                        style={[
                          globalStyles.w9,
                          globalStyles.py10,
                          globalStyles.justifyCenter,
                          globalStyles.alignCenter,
                          // globalStyles.h5,
                          {
                            // backgroundColor: 'transparent',
                            backgroundColor: colors.check,
                            borderColor: colors.inActive,
                            borderWidth: 1,
                            borderRadius: 40,
                          },
                        ]}>
                        <Feather
                          name="shopping-bag"
                          color={colors.white}
                          size={22}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </Animated.View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

export default ListScreen;
