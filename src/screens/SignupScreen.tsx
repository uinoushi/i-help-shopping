import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);

    navigation.addListener('blur', () => clearErrorMessage());

    return <View style={styles.container}>
        <AuthForm 
            headerText = "Sign up"
            errorMessage = {state.errorMessage}
            submitButtonText = "Sign up"
            onSubmit = {signup}
        />
        <NavLink 
            text="Already have an account?"
            linkText="Sign in"
            routeName="Signin"
        />
    </View>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});

export default SignupScreen;