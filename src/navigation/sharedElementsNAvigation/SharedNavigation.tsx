import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import ListScreen from '../../screens/ListScreen';
import DetailScreen from '../../screens/DetailScreen';
import Animated, {Easing} from 'react-native-reanimated';

const Stack = createSharedElementStackNavigator();
const config = {
  duration: 1400,
  easing: Easing.out(Easing.poly(4)),
  timing: Animated.timing,
};

// const config = {
//   animation: 'slide-up',
//   config: {
//     stiffness: 1000,
//     damping: 500,
//     mass: 3,
//     overshootClamping: true,
//     restDisplacementThreshold: 0.01,
//     restSpeedThreshold: 0.01,
//   },
// };
const SharedNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="ListScreen">
      <Stack.Screen name="ListScreen" component={ListScreen} />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        // options={{
        //   transitionSpec: {
        //     open: config,
        //     close: config,
        //   },
        // }}
        sharedElements={route => {
          return [route.params.id];
        }}
      />
    </Stack.Navigator>
  );
};

export default SharedNavigation;
