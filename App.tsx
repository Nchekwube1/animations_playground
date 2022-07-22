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
import {SafeAreaView, StatusBar, View} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import Test from './src/screens/Test';
import {height, width} from './src/styles/globalstyles';
import {NavigationContainer} from '@react-navigation/native';
import SharedNavigation from './src/navigation/sharedElementsNAvigation/SharedNavigation';
const STATUSBAR_HEIGHT = getStatusBarHeight();
const App = () => {
  return (
    <View style={{width, height, backgroundColor: 'white'}}>
      <SafeAreaView style={{height: STATUSBAR_HEIGHT, backgroundColor: 'red'}}>
        <StatusBar barStyle={'light-content'} />
      </SafeAreaView>
      <NavigationContainer>
        {/* <Test /> */}
        <SharedNavigation />
      </NavigationContainer>
    </View>
  );
};

export default App;
