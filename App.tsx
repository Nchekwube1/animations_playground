import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {width} from './src/styles/globalstyles';
import {NavigationContainer} from '@react-navigation/native';
import SharedNavigation from './src/navigation/sharedElementsNAvigation/SharedNavigation';
import colors from './src/styles/colors';
import MessageHome from './src/navigation/sharedElementsNAvigation/message/MessageHome';
import FlatlistAnimation from './src/screens/FlatlistAnimation';
import SpinningWheel from './src/screens/SpinningWheel';
import Onboarding from './src/screens/Onboarding';
import StickyHeader from './src/screens/StickyHeader';
import {
  initialiseApp,
  getFCMTOken,
  notificationHelper,
  requestUserPermission,
} from './src/constants/utils/pushNotifhelper';
import {firebase} from '@react-native-firebase/messaging';
const STATUSBAR_HEIGHT = getStatusBarHeight();
const App = () => {
  useEffect(() => {
    // console.log(firebase.apps);
    // console.log({
    //   firebaseapps: firebase.apps,
    // });
    initialiseApp();
    //  Platform.OS === 'ios' ? iosConfig : androidConfig,
  }, []);

  // useEffect(() => {
  //   requestUserPermission();
  // }, []);
  useEffect(() => {
    getFCMTOken();
    // notificationHelper();
  }, []);

  return (
    // <FlatlistAnimation />
    // <Onboarding />
    <StickyHeader />

    // <View
    //   style={{
    //     width,
    //     ...StyleSheet.absoluteFillObject,
    //     backgroundColor: colors.white,
    //   }}>
    //   {Platform.OS === 'ios' && (
    //     <SafeAreaView
    //       style={{height: STATUSBAR_HEIGHT, backgroundColor: colors.bg}}>
    //       <StatusBar barStyle={'light-content'} backgroundColor={colors.bg} />
    //     </SafeAreaView>
    //   )}
    //   {Platform.OS === 'android' && (
    //     <StatusBar barStyle={'light-content'} backgroundColor={colors.bg} />
    //   )}
    //   <NavigationContainer>
    //     <Test />
    //     <SharedNavigation />
    //   </NavigationContainer>
    // </View>
  );
};

export default App;
