const INITIALIZE = "INITIALIZE";
const UPDATE = "UPDATE";
const initialState = {initialized: false};
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE: {
            return {...state, initialized: true}
        }
        case UPDATE: {
            return {...state, ...action.payload}
        }
        default:
            return state;
    }
};
export const initialize = () => ({type: INITIALIZE});
export const appUpate = (payload) => ({type: UPDATE, payload});

export default appReducer
