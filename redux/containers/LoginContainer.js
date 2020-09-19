import { connect } from 'react-redux';
import { loginAction } from '../actions/index';
import SignIn from '../../Login_SignUp/SignIn';

const mapStateToProps = (state) => {
    return{
        isLoggedIn: state.authReducer ? state.authReducer : false
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (username, password) => {
            dispatch(loginAction(username, password));
        }
    }
}

const LogInContainer =  connect( mapStateToProps, mapDispatchToProps )(SignIn);
export default LogInContainer;