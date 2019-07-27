import React from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/LoginScreen'
import AuthLoadingScreen from '../screens/AuthLoadingScreen'

const AuthStack = createStackNavigator({ Login: LoginScreen });

const switchNavigator = createSwitchNavigator(
	{
		Main: MainTabNavigator,
		Auth: AuthStack, 
		AuthLoading: AuthLoadingScreen,
	},
	{
		initialRouteName: 'AuthLoading'
	}
);

export default createAppContainer(switchNavigator)
