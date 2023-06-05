import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store }  from './src/features/store/store';
import Home from './src/pages/home/Home';
import UserProfile from './src/pages/userprofile/userProfile';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
          <Stack.Screen name='User' component={UserProfile} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}