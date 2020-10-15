import { combineReducers } from 'redux';
import notificationReducer from './notificationReducer';
import cardReducer from './cardReducer';

export const rootReducer = combineReducers({
    notification: notificationReducer,
    cards: cardReducer
});
