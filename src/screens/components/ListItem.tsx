import {View, Text, TouchableOpacity, Image, ViewToken} from 'react-native';
import React, {FC} from 'react';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import globalStyles from '../../styles/globalstyles';
import palette from '../../constants/palette/palette';

const ListItem: FC<{
  item: {date: string; img: string; message: string; name: string; id: number};
  viewAbleItems: SharedValue<ViewToken[]>;
}> = ({item: {date, img, message, name, id}, viewAbleItems}) => {
  // const isViewable = Boolean(
  //   viewAbleItems.value
  //     .filter(val => val.isViewable)
  //     .find(itm => itm.item.id === id),
  // );
  console.log({viewableItems: viewAbleItems.value});

  const isViewable = viewAbleItems.value.filter(e => e.index === id).length > 0;
  // console.log({viewAbleItems, isViewable});

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isViewable ? 1 : 0.5),
      transform: [
        {
          scale: withTiming(isViewable ? 1 : 0.5),
          // scale: 1,
        },
      ],
    };
  }, [viewAbleItems, isViewable]);
  return (
    <Animated.View style={[animatedStyle]}>
      <TouchableOpacity
        style={[
          globalStyles.flexRow,
          globalStyles.alignCenter,
          globalStyles.bgWHite,
          globalStyles.px20,

          globalStyles.shadow,
          globalStyles.borderradius,
          globalStyles.py20,
          globalStyles.mb20,
          //   {
          //     height: ITEMHEIGHT,
          //     marginBottom: MARGINBOTTOM,
          //   },
        ]}>
        <View style={[{marginRight: 15}]}>
          <Image
            source={{uri: img}}
            style={{width: 55, height: 55, borderRadius: 35}}
          />
        </View>
        <View style={[globalStyles.flexOne]}>
          <View
            style={[
              globalStyles.flexRow,
              globalStyles.justifyBetweem,
              globalStyles.alignCenter,
            ]}>
            <View style={[globalStyles.flexOne]}>
              <Text
                style={[
                  // globalStyles.textWhite,
                  {fontFamily: 'Inter-Medium', fontSize: 16},
                ]}>
                {name}
              </Text>
            </View>
            <Text
              style={[
                globalStyles.textWhite,
                {
                  fontFamily: 'Inter-Medium',
                  marginTop: 6,
                  fontSize: 13,
                  color: palette.secondaryText,
                },
              ]}>
              {date}
            </Text>
          </View>
          <View>
            <Text
              style={[
                globalStyles.textWhite,
                {
                  fontFamily: 'Inter-Medium',
                  marginTop: 6,
                  fontSize: 13,
                  color: palette.secondaryText,
                },
              ]}>
              {message}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default ListItem;
