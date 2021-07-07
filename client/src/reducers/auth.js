import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../actions/types';

const initialState = {
    // Store token to local storage
    token: localStorage.getItem('token'),
    // by default null. change to true when authenticated
    isAuthenticated: null,
    loading: true,
    user: null
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case REGISTER_SUCCESS:
            // put the token into local storage
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        case REGISTER_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }
        default: 
            return state;
    }
}