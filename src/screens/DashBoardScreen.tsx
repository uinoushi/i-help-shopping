import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Context as AuthContext } from '../context/AuthContext';
import { Context as UserContext } from '../context/UserContext';
import Spacer from '../components/Spacer';

const DashBoardScreen = () => {
    const { signout } = useContext(AuthContext);
    const { getUser } = useContext(UserContext);

    return (
        <SafeAreaProvider>
            <SafeAreaView
                style={{ flex: 1, alignItems: 'center' }}
            >
                <Text style={{ fontSize: 18 }}>DashBoardScreen</Text>
                <Spacer>
                    <Button onPress={signout}>Sign Out</Button>
                </Spacer>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({});

export default DashBoardScreen;