import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';
import Spacer from '../components/Spacer';

const AuthForm = ({ headerText, errorMessage, submitButtonText, onSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <>
            <Spacer>
                <Text style={styles.heading}>{headerText}</Text>
                <TextInput 
                    mode="outlined"
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.textInput}
                    theme={{ roundness: 9 }}
                />
                <TextInput 
                    secureTextEntry
                    mode="outlined"
                    label="Password"
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.textInput}
                    theme={{ roundness: 9 }}
                />
                { errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null }
                <Button 
                    theme={{ roundness: 9 }}
                    style={styles.buttonStyle}
                    mode="contained" 
                    onPress={() => onSubmit({ email, password })}
                >
                    {submitButtonText}
                </Button>
            </Spacer>
        </>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 22,
        marginBottom: 10
    },
    textInput: {
        height: 42,
        marginBottom: 10
    },
    buttonStyle: {
        paddingTop: 6,
        paddingBottom: 6,
        marginTop: 5
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginBottom: 10
    },
});

export default AuthForm;