const INITIALIZE = "INITIALIZE";

const initialState = {initialized: false};
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE: {
            return {...state, initialized: true}
        }
        default:
            return state;
    }
};
export const initialize = () => {
    return {type: INITIALIZE}
};

export default appReducer
