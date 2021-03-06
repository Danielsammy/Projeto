import React from 'react';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'
import { LoginScreen } from './components/Pages/Login';
import Home from './components/Pages/Home';
import { Cadastro } from './components/Pages/Cadastro';
import {styles} from './components/Pages/GlobalStyle'
import { AlertsProvider } from 'react-native-paper-alerts';
import { Provider } from 'react-native-paper';

const Stack = createStackNavigator();

function MyStack() {
  
  return (
    <Provider>
      <AlertsProvider>
        <Stack.Navigator style={{backgroundColor: '#ff0000'}}>
          <Stack.Screen name="Login" component={LoginScreen} options={{headerTransparent:true, title:""}} />
          <Stack.Screen name="Cadastro" component={Cadastro} options={{headerTransparent:true, title:""}} />
          <Stack.Screen name="Home" component={Home} options={{title:"", headerTransparent:true}} />  
        </Stack.Navigator>
      </AlertsProvider>
    </Provider>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

registerRootComponent(App);




