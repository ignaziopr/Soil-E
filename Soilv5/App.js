import React, { useState } from 'react';
import Welcome from './screens/welcome';
import Login from './screens/login';
import SignUp from './screens/signup';
import Loading from './screens/loading'
import Recs from './screens/recs';
import Info from './screens/info';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group screenOptions={{headerStyle: { backgroundColor: 'papayawhip' } }}>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options= {{
            title: '', headerShown: false
          }}
           />
        <Stack.Screen
          name="Login"
          component={Login}
          options= {{
            title: '', headerShown: true
          }} />
        <Stack.Screen
          name="Sign up"
          component={SignUp}
          options= {{
            title: '', headerShown: true
          }} />
          <Stack.Screen
          name="Recommendations"
          component={Recs}
          options= {{
            title: '', headerShown: true
          }}
           />
        </Stack.Group>
        <Stack.Group screenOptions={{headerStyle: { backgroundColor: '#82F59A' } }}>
        <Stack.Screen
          name="Info"
          component={Info}
          options= {{
            title: '', headerShown: false
          }}
           />
        <Stack.Screen
          name="Loading"
          component={Loading}
          options= {{
            title: '', headerShown: false
          }}
           />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


