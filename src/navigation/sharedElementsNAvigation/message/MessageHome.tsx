import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useMemo} from 'react';
import palette from '../../../constants/palette/palette';
import globalStyles, {width} from '../../../styles/globalstyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
const MessageHome = () => {
  const translateX = useSharedValue(-width);
  const messages = useMemo(
    () => [
      {
        name: 'Sophia Akodu',
        message: 'Reply me ASAP',
        date: '1:57 PM',
        img: 'https://picsum.photos/200',
      },
      {
        name: 'Ola Aina',
        message: 'The contract is ready',
        date: '1:07 AM',
        img: 'https://picsum.photos/200',
      },
      {
        name: 'Babe',
        message: 'Call me when you get home',
        date: '3:37 AM',
        img: 'https://picsum.photos/200',
      },
      {
        name: 'Patrick',
        message: 'Abeg lend me some money',
        date: 'yesterday',
        img: 'https://picsum.photos/200',
      },
      //   {
      //     name: 'Sophia Akodu',
      //     message: 'Reply me ASAP',
      //     date: '1:57 PM',
      //     img: 'https://picsum.photos/200',
      //   },
      //   {
      //     name: 'Ola Aina',
      //     message: 'The contract is ready',
      //     date: '1:07 AM',
      //     img: 'https://picsum.photos/200',
      //   },
      //   {
      //     name: 'Babe',
      //     message: 'Call me when you get home',
      //     date: '3:37 AM',
      //     img: 'https://picsum.photos/200',
      //   },
      //   {
      //     name: 'Patrick',
      //     message: 'Abeg lend me some money',
      //     date: 'yesterday',
      //     img: 'https://picsum.photos/200',
      //   },
      //   {
      //     name: 'Sophia Akodu',
      //     message: 'Reply me ASAP',
      //     date: '1:57 PM',
      //     img: 'https://picsum.photos/200',
      //   },
      //   {
      //     name: 'Ola Aina',
      //     message: 'The contract is ready',
      //     date: '1:07 AM',
      //     img: 'https://picsum.photos/200',
      //   },
      //   {
      //     name: 'Babe',
      //     message: 'Call me when you get home',
      //     date: '3:37 AM',
      //     img: 'https://picsum.photos/200',
      //   },
      //   {
      //     name: 'Patrick',
      //     message: 'Abeg lend me some money',
      //     date: 'yesterday',
      //     img: 'https://picsum.photos/200',
      //   },
    ],
    [],
  );
  const lists = useMemo(
    () => [
      {
        name: 'Notifications',
        count: '3',
        icon: (
          <Ionicons
            name="ios-notifications-outline"
            size={20}
            color={palette.white}
          />
        ),
      },
      {
        name: 'Change theme',
        icon: (
          <Ionicons
            name="ios-color-palette-outline"
            size={20}
            color={palette.white}
          />
        ),
      },
      {
        name: 'Family safety',
        icon: <Feather name="shield" size={20} color={palette.white} />,
      },
      {
        name: 'Meet new friends',
        icon: (
          <MaterialIcons name="meeting-room" size={20} color={palette.white} />
        ),
      },
    ],
    [],
  );

  //   {
  //     count:string,
  //     text:string,
  //     icon:any,
  //     side:'top':'left'|'right'|'bottom'
  //    }
  const topList = useMemo<
    {
      count: string;
      text: string;
      icon: any;
      side: 'top' | 'left' | 'right' | 'bottom';
    }[]
  >(
    () => [
      {
        count: '2',
        icon: (
          <MaterialCommunityIcons
            name="shield-check"
            size={20}
            color={palette.white}
          />
        ),
        side: 'right',
        text: 'Spam calls identitifed',
      },
      {
        count: '58s',
        icon: (
          <MaterialCommunityIcons
            name="clock-time-three-outline"
            size={20}
            color={palette.white}
          />
        ),
        side: 'bottom',
        text: 'Time saved from spammers',
      },
      {
        count: '29',
        icon: (
          <Ionicons name="ios-search-outline" size={20} color={palette.white} />
        ),
        side: 'top',
        text: 'Unknown numbers identified',
      },
      {
        count: '18',
        icon: (
          <MaterialCommunityIcons
            name="archive-cancel-outline"
            size={20}
            color={palette.white}
          />
        ),
        side: 'left',
        text: 'Messages moved to spam',
      },
    ],
    [],
  );
  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(translateX.value),
        },
      ],
    };
  });
  return (
    <View style={[{backgroundColor: palette.blackBg}, globalStyles.flexOne]}>
      <StatusBar barStyle={'light-content'} />
      <Animated.View
        style={[
          globalStyles.absolute,
          globalStyles.w10,
          globalStyles.h10,
          {backgroundColor: palette.blackBg, zIndex: 20},
          rStyle,
        ]}>
        <SafeAreaView
          style={[
            Platform.OS === 'android' && globalStyles.pt20,

            globalStyles.flexOne,
          ]}>
          <View
            style={[
              //   globalStyles.flexRow,
              globalStyles.alignCenter,
              globalStyles.justifyCenter,
              globalStyles.mt20,
            ]}>
            <View
              style={[
                globalStyles.absolute,
                globalStyles.w10,
                globalStyles.h10,
                globalStyles.flexRow,
                globalStyles.alignCenter,
                globalStyles.justifyBetweem,
                globalStyles.px20,
              ]}>
              <TouchableOpacity onPress={() => (translateX.value = -width)}>
                <Ionicons
                  name="ios-arrow-back"
                  size={20}
                  color={palette.white}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => (translateX.value = -width)}>
                <Ionicons
                  name="settings-sharp"
                  size={20}
                  color={palette.white}
                />
              </TouchableOpacity>
            </View>
            <Text
              style={[
                globalStyles.textWhite,
                {fontFamily: 'DarkerGrotesque-Medium', fontSize: 20},
              ]}>
              Francis
            </Text>
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
              08123456789
            </Text>
          </View>
          <View
            style={[
              globalStyles.flexOne,
              globalStyles.pt30,
              globalStyles.px20,
            ]}>
            <View
              style={[
                // globalStyles.py30,
                globalStyles.mb30,
                // globalStyles.px20,
                // globalStyles.p,
                {
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: 'rgba(255,255,255,0.2)',
                  //   paddingLeft: 10,
                  paddingHorizontal: 25,
                },
              ]}>
              <View
                style={[
                  [
                    globalStyles.flexRow,
                    globalStyles.alignCenter,
                    globalStyles.justifyBetweem,
                    globalStyles.py10,
                  ],
                ]}>
                <View
                  style={[
                    globalStyles.flexOne,
                    globalStyles.flexRow,
                    globalStyles.alignCenter,
                  ]}>
                  <Text
                    style={[
                      globalStyles.textWhite,
                      {fontFamily: 'Inter-Medium', fontSize: 13},
                    ]}>
                    Last 30 days
                  </Text>
                  <View style={{marginLeft: 6}}>
                    <Ionicons
                      name="ios-caret-down"
                      size={14}
                      color={palette.white}
                    />
                  </View>
                </View>
                <View>
                  <Ionicons
                    name="ios-share-social-outline"
                    size={20}
                    color={palette.white}
                  />
                </View>
              </View>
              <View
                style={[
                  globalStyles.flexRow,
                  globalStyles.py10,
                  {flexWrap: 'wrap'},
                ]}>
                {topList.map(({count, icon, side, text}, index) => (
                  <View
                    style={[
                      globalStyles.w5,
                      globalStyles.py10,
                      {
                        paddingHorizontal: 15,
                      },
                      //   globalStyles.px10,
                      side === 'bottom' && {
                        borderBottomWidth: 1,
                        borderBottomColor: 'rgba(255,255,255,0.2)',
                        // backgroundColor: 'red',
                      },
                      side === 'left' && {
                        borderLeftWidth: 1,
                        borderLeftColor: 'rgba(255,255,255,0.2)',
                        // backgroundColor: 'blue',
                      },
                      side === 'right' && {
                        borderRightWidth: 1,
                        borderRightColor: 'rgba(255,255,255,0.2)',
                        // backgroundColor: 'yellow',
                      },
                      side === 'top' && {
                        borderTopWidth: 1,
                        borderTopColor: 'rgba(255,255,255,0.2)',
                        // backgroundColor: 'green',
                      },
                    ]}
                    key={index.toString()}>
                    <View
                      style={[
                        globalStyles.flexRow,
                        globalStyles.alignCenter,
                        globalStyles.mb10,
                      ]}>
                      {icon}
                      <Text
                        style={[
                          globalStyles.textWhite,
                          {
                            fontFamily: 'Inter-Medium',
                            fontSize: 18,
                            marginLeft: 6,
                            color: palette.secondaryText,
                          },
                        ]}>
                        {count}
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={[
                          globalStyles.textWhite,
                          {
                            fontFamily: 'Inter-Regular',
                            fontSize: 12,
                            color: palette.secondaryText,
                          },
                        ]}>
                        {text}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
            <View
              style={[
                // globalStyles.py10,
                // globalStyles.p,
                {
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: 'rgba(255,255,255,0.2)',
                  paddingLeft: 10,
                },
              ]}>
              {lists.map(({count, icon, name}, index) => (
                <View
                  style={[
                    globalStyles.flexRow,
                    globalStyles.alignCenter,
                    // globalStyles.py10,
                  ]}
                  key={index.toString()}>
                  <View style={{width: 45}}>{icon}</View>
                  <View
                    style={[
                      globalStyles.flexOne,
                      globalStyles.flexRow,
                      globalStyles.py20,
                      index !== lists.length - 1 && {
                        borderBottomWidth: 1,
                        borderBottomColor: 'rgba(255,255,255,0.2)',
                      },
                    ]}>
                    <View style={[globalStyles.flexOne]}>
                      <Text
                        style={[
                          globalStyles.textWhite,
                          {fontFamily: 'Inter-Medium', fontSize: 13},
                        ]}>
                        {name}
                      </Text>
                    </View>
                    {count && (
                      <View
                        style={[
                          globalStyles.justifyCenter,
                          globalStyles.alignCenter,
                          {
                            marginRight: 10,
                            backgroundColor: palette.created2Bg,
                            width: 20,
                            height: 20,
                            borderRadius: 20,
                          },
                        ]}>
                        <Text
                          style={[
                            globalStyles.textBlack,
                            {fontFamily: 'Inter-Bold', fontSize: 11},
                          ]}>
                          {count}
                        </Text>
                      </View>
                    )}
                  </View>
                </View>
              ))}
            </View>
          </View>
        </SafeAreaView>
      </Animated.View>
      <SafeAreaView
        style={[
          Platform.OS === 'android' && globalStyles.pt20,

          globalStyles.flexOne,
        ]}>
        <View
          style={[
            globalStyles.flexRow,
            globalStyles.alignCenter,
            globalStyles.justifyCenter,
            globalStyles.mt20,
          ]}>
          <View
            style={[
              globalStyles.absolute,
              globalStyles.w10,
              globalStyles.h10,
              globalStyles.flexRow,
              globalStyles.alignCenter,
              globalStyles.px20,
            ]}>
            <TouchableOpacity onPress={() => (translateX.value = 0)}>
              <Ionicons name="menu" size={20} color={palette.white} />
            </TouchableOpacity>
          </View>
          <Text
            style={[
              globalStyles.textWhite,
              {fontFamily: 'DarkerGrotesque-Medium', fontSize: 24},
            ]}>
            Your messages
          </Text>
        </View>
        <View style={[globalStyles.flexOne]}>
          <FlatList
            data={messages}
            style={[globalStyles.pt20, globalStyles.flexOne, globalStyles.px20]}
            showsVerticalScrollIndicator={false}
            renderItem={({index, item: {date, img, message, name}}) => (
              <TouchableOpacity
                style={[
                  globalStyles.flexRow,
                  globalStyles.py10,
                  globalStyles.alignCenter,
                ]}
                key={index.toString()}>
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
                          globalStyles.textWhite,
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
            )}
          />
        </View>
        <View
          style={[
            globalStyles.flexRow,
            globalStyles.py10,
            globalStyles.justifyCenter,
          ]}>
          <View
            style={[
              globalStyles.flexRow,
              globalStyles.justifyCenter,
              globalStyles.bgBlack,
              globalStyles.px30,
              globalStyles.py20,
              globalStyles.shadow,
              {borderRadius: 200},
            ]}>
            <TouchableOpacity style={{marginRight: 25}}>
              <Ionicons
                name="md-chatbubble-sharp"
                size={30}
                color={palette.white}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: 25}}>
              <FontAwesome
                name="user"
                size={30}
                color={palette.secondaryText}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default MessageHome;
