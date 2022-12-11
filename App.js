import React from 'react';
import {Login,Cadastro,Home,NovoContato, Atualizar} from './views';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
        <Stack.Screen name="Cadastro" options={
          {headerShown: false}} component={Cadastro} />  
          <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
          <Stack.Screen name="NovoContato" options={{ headerShown: false }} component={NovoContato} />
          <Stack.Screen name="Atualizar" options={{ headerShown: false }} component={Atualizar} />
  
      </Stack.Navigator>
    </NavigationContainer>
  );
}