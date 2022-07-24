import {View, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Animated, {Easing, SlideInRight} from 'react-native-reanimated';
import globalStyles from '../styles/globalstyles';
import colors from '../styles/colors';
import TextComponent from '../components/TextComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {MotiTransitionProp, MotiView} from 'moti';
import {SharedElement} from 'react-navigation-shared-element';

const DetailScreen = () => {
  const {params} = useRoute();
  const {goBack} = useNavigation();
  const [currentImage, setCurrentImage] = useState(0);
  const [currentSize, setCurrentSize] = useState(0);
  useEffect(() => {
    console.log(params.id);
  }, [params]);
  const transition: MotiTransitionProp = {
    type: 'timing',
    duration: 500,
    easing: Easing.inOut(Easing.linear),
  };
  const transition2: MotiTransitionProp = {
    type: 'timing',
    duration: 500,
    easing: Easing.in(Easing.bounce),
  };
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
      <MotiView
        transition={transition2}
        from={{
          transform: [{translateY: -20}],
          opacity: 0,
        }}
        animate={{
          transform: [{translateY: 0}],
          opacity: 1,
        }}
        delay={750}
        style={[
          globalStyles.flex,
          globalStyles.flexRow,
          globalStyles.justifyBetweem,
          globalStyles.mt10,
          {
            alignItems: 'flex-end',
          },
        ]}>
        <TouchableOpacity onPress={() => goBack()}>
          <Ionicons name="arrow-back" color={colors.white} size={30} />
        </TouchableOpacity>
        <TextComponent style={{fontSize: 24}}>Details</TextComponent>
        <FontAwesome5 name="shopping-bag" color={colors.white} size={22} />
      </MotiView>
      <View
        style={[
          globalStyles.w10,
          globalStyles.mt30,
          globalStyles.borderradius,
          globalStyles.relative,
          {height: 360, backgroundColor: 'transparent'},
        ]}>
        <MotiView
          style={[
            globalStyles.absolute,
            globalStyles.w4,
            globalStyles.bgDark,
            {
              height: 40,
              // width: 70,
              top: -20,
              left: 40,
              zIndex: 200,
              borderRadius: 20,
              padding: 4,
            },
          ]}>
          <MotiView
            transition={transition}
            from={{top: -20, opacity: 0}}
            animate={{top: 0, opacity: 1}}
            delay={400}
            style={[
              globalStyles.w10,
              globalStyles.h10,
              globalStyles.justifyCenter,
              globalStyles.alignCenter,
              {backgroundColor: colors.purple, borderRadius: 16},
            ]}>
            <TextComponent style={{color: colors.black}}>
              Top Collection
            </TextComponent>
          </MotiView>
        </MotiView>
        <SharedElement id={`${params?.id}`}>
          <Animated.Image
            source={{uri: params?.imageUrl[currentImage]}}
            resizeMode="cover"
            style={[
              globalStyles.w10,
              globalStyles.h10,
              globalStyles.borderradius,
              globalStyles.relative,
            ]}
          />
        </SharedElement>
      </View>
      <View
        style={[
          globalStyles.pt20,
          globalStyles.w10,
          globalStyles.flexRow,
          globalStyles.justifyBetweem,
          {height: 140},
        ]}>
        {params.imageUrl.map((item, index) => {
          return (
            <TouchableOpacity
              style={{width: '30%'}}
              key={`${item}-${index}`}
              onPress={() => {
                setCurrentImage(index);
              }}>
              <MotiView
                style={[
                  globalStyles.h10,
                  {
                    width: '100%',
                    borderRadius: 14,
                    borderWidth: 4,
                    borderColor: 'rgba(73,72,82,255)',
                  },
                  index === currentImage && globalStyles.borderGreen,
                ]}>
                <Image
                  source={{uri: item}}
                  style={[
                    globalStyles.w10,
                    globalStyles.h10,
                    {borderRadius: 8},
                  ]}
                  resizeMode="cover"
                />
              </MotiView>
            </TouchableOpacity>
          );
        })}
      </View>
      <View
        style={[
          globalStyles.w10,
          globalStyles.py10,
          globalStyles.flexRow,
          globalStyles.justifyBetweem,
        ]}>
        <TextComponent
          style={{fontFamily: 'MontserratAlternates-Bold', fontSize: 22}}>
          {params.title}
        </TextComponent>
        <TextComponent
          style={{
            fontFamily: 'MontserratAlternates-Bold',
            fontSize: 22,
            color: colors.lemon,
          }}>
          {params.price}
        </TextComponent>
      </View>
      <View style={[globalStyles.w10, globalStyles.py10]}>
        <TextComponent style={{fontFamily: 'MontserratAlternates-Bold'}}>
          Sizes
        </TextComponent>
        <View
          style={[globalStyles.w10, globalStyles.py10, globalStyles.flexRow]}>
          {params.sizes.map((item, index) => {
            return (
              <TouchableOpacity
                key={`${item}-${index}`}
                onPress={() => {
                  setCurrentSize(index);
                }}
                style={[
                  globalStyles.alignCenter,
                  globalStyles.justifyCenter,
                  {
                    width: 55,
                    height: 30,
                    borderRadius: 40,
                    backgroundColor: '#313240',
                    borderColor: 'rgba(73,72,82,255)',
                    borderWidth: 1,
                    marginRight: 8,
                  },
                  currentSize === index && globalStyles.borderGreen,
                ]}>
                <TextComponent
                  style={[currentSize === index && globalStyles.colorGreen]}>
                  {item}
                </TextComponent>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <MotiView
        transition={transition}
        from={{scale: 0, opacity: 0}}
        animate={{scale: 1, opacity: 1}}
        delay={350}
        style={[
          globalStyles.relative,
          {
            bottom: -60,
          },
        ]}>
        <TouchableOpacity
          style={[
            globalStyles.w10,
            globalStyles.justifyCenter,
            globalStyles.alignCenter,
            {
              height: 60,
              backgroundColor: colors.lemon,
              borderRadius: 8,
            },
          ]}>
          <TextComponent
            style={{
              color: colors.black,
              fontFamily: 'MontserratAlternates-Bold',
            }}>
            Add to cart
          </TextComponent>
        </TouchableOpacity>
      </MotiView>
    </ScrollView>
  );
};

// DetailScreen.sharedElements = route => {
//   const {item} = route.params;
//   return [
//     {
//       id: `${item?.imageUrl[0]}`,
//       animation: 'move',
//       resize: 'clip',
//     },
//   ];
// };

export default DetailScreen;
