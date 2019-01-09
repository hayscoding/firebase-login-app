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

// If you're using react-navigation v3 instead of react-navigation v2, use this code instead:
/*
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
*/