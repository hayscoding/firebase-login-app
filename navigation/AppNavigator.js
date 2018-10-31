import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/LoginScreen'
import AuthLoadingScreen from '../screens/AuthLoadingScreen'

const AuthStack = createStackNavigator({ Login: LoginScreen });

export default createSwitchNavigator(
	{
		Main: MainTabNavigator,
		Auth: AuthStack, 
		AuthLoading: AuthLoadingScreen,
	},
	{
		initialRouteName: 'AuthLoading'
	}
);