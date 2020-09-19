import {LOGIN, LOGOUT } from './actionTypes';

export const loginAction = (username, password) => {
    return{
        type: LOGIN,
        username,
        password
    }
}

export const logoutAction = () => {
    return{
        type: LOGOUT
    }
}
