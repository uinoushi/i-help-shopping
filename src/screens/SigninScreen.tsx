import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = ({ navigation }) => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);

    navigation.addListener('blur', () => clearErrorMessage());
    
    return <View style={styles.container}>
        <AuthForm 
            headerText = "Sign in"
            errorMessage = {state.errorMessage}
            submitButtonText = "Sign in"
            onSubmit = {signin}
        />
        <NavLink 
            text="Don't have an account?"
            linkText="Sign up"
            routeName="Signup"
        />
    </View>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});

export default SigninScreen;