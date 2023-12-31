import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from './components/Telas/Cadastro/Index';
import Login from './components/Telas/Login/index';
import Agradecemos from './components/Telas/Agradecimento/Index'
import {colors} from './components/Styles/styles';
import { HeaderBackButton } from '@react-navigation/stack';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator   screenOptions={{
          headerStyle: {
            backgroundColor: colors.primaryBackground,
          },
          headerTintColor: colors.primaryText,
        }}
        initialRouteName="Login">
         <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={({ navigation }) => ({
            title: 'Cadastro',
            headerLeft: () => (
              <HeaderBackButton
                onPress={() => {
                  navigation.goBack();
                }}
                tintColor={colors.primaryText}
              />
            ),
          })}
        />
        <Stack.Screen
          name="Agradecimento"
          component={Agradecemos}
          options={({ navigation }) => ({
            title: 'Agradecimento',
            headerLeft: () => (
              <HeaderBackButton
                onPress={() => {
                  navigation.goBack();
                }}
                tintColor={colors.primaryText}
              />
            ),
          })}
        />
        <Stack.Screen
         name="Login" 
         component={Login}  
        options={{headerShown: true }}/>
      </Stack.Navigator> 
    </NavigationContainer>
    
  );
};

export default App;
