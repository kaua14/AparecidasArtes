import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from './components/Telas/Cadastro/Index';
import Login from './components/Telas/Login/index';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Login">
        <Stack.Screen
         name="Cadastro" 
         component={Cadastro}  
        options={{headerShown: true }}/>
        <Stack.Screen
         name="Login" 
         component={Login}  
        options={{headerShown: true }}/>
      </Stack.Navigator> 
    </NavigationContainer>
    
  );
};

export default App;
