import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import CulturalPage from './screens/CulturalPage';
import HomeScreen from './screens/HomeScreen';
import LoginPage from './screens/LoginPage';
import SplashScreen from './screens/SplashScreen';
import SportsPage from './screens/SportsPage';
import StudentForm from './screens/StudentForm';
import TechPage from './screens/TechPage';

const Stack = createStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="StudentForm" component={StudentForm} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tech" component={TechPage} />
        <Stack.Screen name="Cultural" component={CulturalPage} />
        <Stack.Screen name="Sports" component={SportsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
