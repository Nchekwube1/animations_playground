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
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
const STATUSBAR_HEIGHT = getStatusBarHeight();
const App = () => {
  return (
    <View style={{...StyleSheet.absoluteFillObject}}>
      <SafeAreaView style={{height: STATUSBAR_HEIGHT, backgroundColor: 'red'}}>
        <StatusBar barStyle={'light-content'} />
      </SafeAreaView>
    </View>
  );
};

export default App;
