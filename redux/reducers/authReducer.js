import { LOGIN, LOGOUT } from '../actions/actionTypes';

const initState = {
    isLoggedIn: false,
    username: '',
    password: ''
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case LOGIN:
            return {
                    isLoggedIn : true,
                    username : action.username,
                    password : action.password
                
            };
        case LOGOUT:
            return {
                    isLoggedIn: false,
                    username: '',
                    password: ''
                
            };
        default: 
            return state;
    }
}

export default authReducer;