import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import ListScreen from '../../screens/ListScreen';
import DetailScreen from '../../screens/DetailScreen';

const Stack = createSharedElementStackNavigator();

const SharedNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="ListScreen">
      <Stack.Screen name="ListScreen" component={ListScreen} />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        sharedElements={route => {
          return [route.params.id];
        }}
      />
    </Stack.Navigator>
  );
};

export default SharedNavigation;
