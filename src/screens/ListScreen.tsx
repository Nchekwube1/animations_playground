import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import globalStyles, {height} from '../styles/globalstyles';
import TextComponent from '../components/TextComponent';

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
      <TextComponent>ListScreen</TextComponent>
      <TextComponent>ListScreen</TextComponent>
      <TextComponent>ListScreen</TextComponent>
      <TextComponent>ListScreen</TextComponent>
      <TextComponent>ListScreen</TextComponent>
      <TextComponent>ListScreen</TextComponent>
      <TextComponent>ListScreen</TextComponent>
      <TextComponent>ListScreen</TextComponent>
    </View>
  );
};

export default ListScreen;
