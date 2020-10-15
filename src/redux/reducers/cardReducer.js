import { ADD_CARD } from '../types/cardActionTypes';

const initialState = {
    cardData: []
};

const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CARD:
            return { ...state, cardData: [...state.cardData, action.payload] };
        default:
            return state;
    }
};

export default cardReducer;
