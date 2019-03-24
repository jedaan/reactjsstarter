import { FETCH_PUBLIC_DATA, FETCH_PRIVATE_DATA, SUCCESS_LOG_IN, SUCCESS_LOG_OUT } from '../actions/type';

export default (state = {}, action) => {
    const { type, payload } = action;
    console.log('statststst  -> ', state);
    let newState = Object.assign(
        {},
        state
    );
    switch (type) {
        case FETCH_PRIVATE_DATA:
            newState.privateData = payload;
            return newState;
        case FETCH_PUBLIC_DATA:
            return Object.assign({},
                state,
                { publicData: payload }
            );
        case SUCCESS_LOG_IN:
            newState.authenticated = payload;
            return newState;
        case SUCCESS_LOG_OUT:
            newState.authenticated = payload;
            return newState;
        default:
            return state;
    }
};
