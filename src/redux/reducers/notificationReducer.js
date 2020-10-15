import { CLOSE_NOTIFICATION, SET_NOTIFICATION } from '../types/notificationActionTypes';

const initialState = {
    show: false,
    message: ''
};

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NOTIFICATION:
            return { show: true, message: action.payload };
        case CLOSE_NOTIFICATION:
            return { ...state, show: false };
        default:
            return state;
    }
};

export default notificationReducer;
