import {View, Button, Text, NativeModules} from 'react-native';
import React, {useEffect} from 'react';
import {useAuth0} from 'react-native-auth0';
import CalendarModule from '../constants/CalenderModuleInstance';
const Auth0 = () => {
  const {authorize, user, clearSession} = useAuth0();

  useEffect(() => {
    console.log({user});
  }, [user]);
  const onPress = async () => {
    // await authorize();
    CalendarModule.createCalendarEvent('testName', 'testLocation');
  };
  const logout = async () => {
    console.log('clear session');

    await clearSession();
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="Sign in" onPress={onPress} />
      {user && <Text>Logged in as {user.name}</Text>}
      <Button title="Sign out" onPress={logout} />
      {!user && <Text>Logged out </Text>}
    </View>
  );
};

export default Auth0;
