import { Notifications, Permissions } from 'expo'
import { AsyncStorage } from 'react-native';

const NOTIFICATION_KEY = 'mobile-flashcards:notifications';

export const scheduleFirstNotification = () => {
  AsyncStorage.getItem(NOTIFICATION_KEY)
  .then(JSON.parse)
  .then((data) => {
    if (data === null) {
      scheduleNotification();
    }
  })
}

export const scheduleNotification = (value = 0) => {
  Permissions.askAsync(Permissions.NOTIFICATIONS)
  .then(({ status }) => {
    if (status === 'granted') {
      Notifications.cancelAllScheduledNotificationsAsync()

      let schuleDate = new Date();
      schuleDate.setDate(schuleDate.getDate() + value);
      schuleDate.setHours(19);
      schuleDate.setMinutes(0);

      if(schuleDate < new Date()){
        schuleDate.setDate(schuleDate.getDate() + 1);
      }

      Notifications.scheduleLocalNotificationAsync(
        createNotification(),
        {
          time: schuleDate,
          repeat: 'day',
        }
      )

      AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
    }
  })
}

const createNotification = () => {
  return {
    title: 'Study :D',
    body: "Hey! You didn't make a quiz today yet...",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}
