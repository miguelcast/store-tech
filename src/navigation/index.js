import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/Home';
import Login from '../screens/Login';

const Drawer = createDrawerNavigator()

function Navigation() {
  const isLogged = useSelector(state => !!state.auth.token)
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Home" component={Home} />
        {!isLogged && (
          <Drawer.Screen name="Login" component={Login} />
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
