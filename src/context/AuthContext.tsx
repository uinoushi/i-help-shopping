import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import * as RootNavigation from '../navigationRef';
import shoppingAPi from '../api/shopping';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case 'signin':
            return { errorMessage: '', token: action.payload }
        case 'clear_error_message':
            return { ...state, errorMessage: '' }
        case 'signout':
            return { token: null, errorMessage: '' }
        default:
            return state;
    }
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'signin', payload: token });
        RootNavigation.navigate('Dashboard', {});
    } else {
        RootNavigation.navigate('Signin', {});
     }
}

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message' })
}

const signup = dispatch => async ({ email, password }) => {
    try {
        const response = await shoppingAPi.post('/signup', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });
        RootNavigation.navigate('Dashboard', {});
    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Something went wrong for the sign up!' })
    }
};

const signin = dispatch => async ({ email, password }) => {
    try {
        const response = await shoppingAPi.post('/login_check', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });
        RootNavigation.navigate('Dashboard', {});
    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign in!'})
    }     
};

const signout = dispatch => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout' });
    RootNavigation.navigate('Signin', {});
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout, clearErrorMessage, tryLocalSignin },
    { token: null, errorMessage: '' }
);