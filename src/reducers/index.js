import {FETCH_POKE_SUCCESS, FETCH_POKE_START, FETCH_POKE_FAILURE, FETCH_POKE_WATER} from "../actions";

const initialState = {
    poke: [],
    loading: false,
    error: "",
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POKE_START:
            return {
                ...state,
                loading: true,
                error: "",
            };
        case FETCH_POKE_SUCCESS:
            return {
                ...state,
                poke: action.payload,
                loading: false,
                error: "",
            };
        case FETCH_POKE_FAILURE:
            return {
                ...state,
                loading: false,
                error: "Did you type a valid number?",
            };
        case FETCH_POKE_WATER:
            return {
                ...state,
                poke: action.payload,
                loading: false,
                error: "",
            }
        default:
            return state;
    }
};

export default reducer;