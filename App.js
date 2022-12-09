import React from 'react';
import {Login,Cadastro} from './views';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
        <Stack.Screen name="Cadastro" options={
          {headerShown: false, title: 'Cadastro usuário',    
          headerTitleStyle:{fontWeight:'bold',fontSize:28,color:"#fff"},    
          headerTitleAlign: 'center',          
          headerStyle:{backgroundColor:"#1670F7",},
          headerTintColor: '#ffffff',
          }} component={Cadastro} />            
      </Stack.Navigator>
    </NavigationContainer>
  );
}