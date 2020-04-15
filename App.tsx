import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as UserProvider } from './src/context/UserContext';
import Main from './src/Main';

export default function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <PaperProvider>
          <Main />
        </PaperProvider>
      </UserProvider>
    </AuthProvider>
  );
}