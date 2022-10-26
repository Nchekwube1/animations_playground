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

import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import Test from './src/screens/Test';
import {height, width} from './src/styles/globalstyles';
import {NavigationContainer} from '@react-navigation/native';
import SharedNavigation from './src/navigation/sharedElementsNAvigation/SharedNavigation';
import colors from './src/styles/colors';
import Auth0 from './src/screens/Auth0';
import {AUTH0_CLIENT_ID, AUTH0_DOMAIN} from './auth0config';
import {Auth0Provider} from 'react-native-auth0';
const STATUSBAR_HEIGHT = getStatusBarHeight();
const App = () => {
  return (
    <Auth0Provider domain={AUTH0_DOMAIN} clientId={AUTH0_CLIENT_ID}>
      <View
        style={{
          width,
          ...StyleSheet.absoluteFillObject,
          backgroundColor: colors.white,
        }}>
        {Platform.OS === 'ios' && (
          <SafeAreaView
            style={{height: STATUSBAR_HEIGHT, backgroundColor: colors.bg}}>
            <StatusBar barStyle={'light-content'} backgroundColor={colors.bg} />
          </SafeAreaView>
        )}
        {Platform.OS === 'android' && (
          <StatusBar barStyle={'light-content'} backgroundColor={colors.bg} />
        )}
        <NavigationContainer>
          {/* <Test /> */}
          {/* <SharedNavigation />
           */}
          <Auth0 />
        </NavigationContainer>
      </View>
    </Auth0Provider>
  );
};

export default App;
