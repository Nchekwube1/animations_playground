import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

const DetailScreen = () => {
  useEffect(() => {
    console.log('tttherrr');
  }, []);
  return (
    <View>
      <Text>DetailScreen</Text>
    </View>
  );
};

export default DetailScreen;
