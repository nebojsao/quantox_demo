import { CLOSE_NOTIFICATION, SET_NOTIFICATION } from '../types/notificationActionTypes';

export const setNotification = (message) => {
    return {
        type: SET_NOTIFICATION,
        payload: message
    };
};

export const closeNotification = () => {
    return {
        type: CLOSE_NOTIFICATION
    };
};
