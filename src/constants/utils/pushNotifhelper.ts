import messaging, {firebase} from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

async function getFCMTOken() {
  let fcmToken = await AsyncStorage.getItem('fcmToken');
  if (!fcmToken) {
    try {
      if (!messaging().isDeviceRegisteredForRemoteMessages) {
        await messaging().registerDeviceForRemoteMessages();
      }
      try {
        let token = await messaging().getToken();
        if (token) {
          fcmToken = token;
          AsyncStorage.setItem('fcmToken', token);
        }
      } catch (error) {
        console.log({
          tokenError: error,
        });
      }
    } catch (error) {
      console.log({
        error,
      });
    }
  }

  console.log({
    fcmToken,
  });

  return fcmToken;
}
const notificationHelper = () => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log({
      remoteMessage,
    });

    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
    // navigation.navigate(remoteMessage.data.type);
  });
  getInitialNotofs(),
    messaging().onMessage(async remoteMessage => {
      console.log({
        remoteMessage,
      });
    });
};

const getInitialNotofs = () => {
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
        // setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
      }
      //   setLoading(false);
    });
};

const androidConfig = {
  //  apiKey: "AIzaSyBrnQaXoB9r5YiVKsNbVnsu6DNRTJbD_l4",
  authDomain: 'pushnotiftest-8624a.firebaseapp.com',
  //   projectId: "pushnotiftest-8624a",
  //   storageBucket: "pushnotiftest-8624a.appspot.com",
  messagingSenderId: '766309564826',
  //   appId: "1:766309564826:web:dfd0db3f4837728afafa23",
  projectId: 'pushnotiftest-8624a',
  appId: '1:766309564826:android:8c7e105d458d7427fafa23',
  apiKey: 'AIzaSyAExes8dwhi8FyfX3thsEBGiNVdg1RBZr4',
  storageBucket: 'pushnotiftest-8624a.appspot.com',
  databaseURL: '',
  androidClientId: '',
  clientId: '',
  deepLinkURLScheme: '',
  gaTrackingId: '',
};
const initialiseApp = () => {
  if (!firebase.apps.length) {
    console.log('---initialising---');

    firebase.initializeApp(androidConfig);
  }
};
export {getFCMTOken, initialiseApp, requestUserPermission, notificationHelper};
