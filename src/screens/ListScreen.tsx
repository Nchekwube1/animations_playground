import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import globalStyles, {height} from '../styles/globalstyles';

const ListScreen = () => {
  useEffect(() => {
    console.log('herrr nigga');
  }, []);
  return (
    <View
      style={[
        globalStyles.w10,
        globalStyles.h10,
        globalStyles.px20,
        globalStyles.pt10,
        {
          height: height,
          ...StyleSheet.absoluteFillObject,
        },
      ]}>
      <Text>ListScreen</Text>
      <Text>ListScreen</Text>
      <Text>ListScreen</Text>
      <Text>ListScreen</Text>
      <Text>ListScreen</Text>
      <Text>ListScreen</Text>
      <Text>ListScreen</Text>
      <Text>ListScreen</Text>
      <Text>ListScreen</Text>
    </View>
  );
};

export default ListScreen;
