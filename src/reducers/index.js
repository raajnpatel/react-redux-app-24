import { FETCH_POKE_SUCCESS, FETCH_POKE_START } from "../actions";

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
        default:
            return state;
    }
};

export default reducer;