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
const STATUSBAR_HEIGHT = getStatusBarHeight();
const App = () => {
  return (
    <View style={{width, height}}>
      <SafeAreaView style={{height: STATUSBAR_HEIGHT, backgroundColor: 'red'}}>
        <StatusBar barStyle={'light-content'} />
        <Test />
      </SafeAreaView>
    </View>
  );
};

export default App;
