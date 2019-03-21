import { FETCH_PUBLIC_DATA,FETCH_PRIVATE_DATA } from '../actions/type';

export default (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_PRIVATE_DATA:
            return {
                authenticated: true,
                privateData: payload
            };
        case FETCH_PUBLIC_DATA:
            return {
                authenticated: false,
                data: null,
                publicData: payload
            };
        // case FETCH_USER_DATA:
        //     return { data: payload };
        default:
            return state;
    }
};
