import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import SignupScreen from './screens/SignupScreen';
import SigninScreen from './screens/SigninScreen';
import DashBoardScreen from './screens/DashBoardScreen';
import { navigationRef } from './navigationRef';

const Stack = createStackNavigator();

const Main = () => {
  return (
    <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Splash" component={SplashScreen} />
            <Stack.Screen options={{ headerShown: false }} name="Signup" component={SignupScreen} />
            <Stack.Screen options={{ headerShown: false }} name="Signin" component={SigninScreen} />
            <Stack.Screen options={{ headerShown: false }} name="Dashboard" component={DashBoardScreen} /> 
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;