import React, { useEffect, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';

const SplashScreen = () => {
    const { tryLocalSignin } = useContext(AuthContext);
    
    useEffect(() => {
        tryLocalSignin();
    }, []);
    
    return null;
};

const styles = StyleSheet.create({});

export default SplashScreen;