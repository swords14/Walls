// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen'
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen'
import Configurations from './ConfigurationsScreen'
import ChangePasswordRequestScreen from './ChangePasswordRequestScreen'
import EditProfile from './EditProfileScreen'
import TermsOfService from './TermsOfServiceScreen'
import AboutUsScreen from './AboutUsScreen'
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name='Profile' component={ProfileScreen} />
        <Stack.Screen name='Configurations' component={Configurations} />
        <Stack.Screen name='ChangePasswordRequestScreen' component={ChangePasswordRequestScreen} />
        <Stack.Screen name='EditProfile' component={EditProfile} />
        <Stack.Screen name='TermsOfService' component={TermsOfService} />
        <Stack.Screen name='AboutUsScreen' component={AboutUsScreen} />   
        {/* Adicione mais telas conforme necessário */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
