import {View, Text} from 'react-native';
import React from 'react';
import globalStyles from '../styles/globalstyles';

const Test = () => {
  return (
    <View style={[globalStyles.px20, {backgroundColor: 'blue'}]}>
      <Text>Test</Text>
    </View>
  );
};

export default Test;
