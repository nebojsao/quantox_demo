import { ADD_CARD } from '../types/cardActionTypes';
import { v4 as uuidv4 } from 'uuid';

export const addNewCard = (ownerName, cardNumber, expiresOn) => {
    return {
        type: ADD_CARD,
        payload: {
            id: uuidv4(),
            ownerName: ownerName,
            cardNumber: cardNumber,
            expiresOn: expiresOn
        }
    };
};
