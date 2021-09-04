/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import { StyleSheet, useColorScheme } from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './App/Screens/Menu';
import Equation from './App/Screens/QuadraticEquation';
import Salary from './App/Screens/Salary';
import Numbers from './App/Screens/Numbers';

const Stack = createStackNavigator();

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: isDarkMode ? '#0C2D48' : '#0C2D48',
          },
          headerTintColor: isDarkMode ? '#fff' : '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}
      >

        <Stack.Screen name="Home" options={{ title: 'Menú' }} component={Menu} />
        <Stack.Screen name="Equation" options={{ title: 'Ecuación cuadrática' }} component={Equation} />
        <Stack.Screen name="Salary" options={{ title: 'Calculadora de salario' }} component={Salary} />
        <Stack.Screen name="Numbers" options={{ title: 'Número mayor y menor' }} component={Numbers} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
