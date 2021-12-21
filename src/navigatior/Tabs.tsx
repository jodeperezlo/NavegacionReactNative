import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import IconsScreen from '../screens/IconsScreen';
import TopBarNavigator from './TopBarNavigator';
import StackNavigator from './StackNavigator';
import {Platform} from 'react-native';
import {colors} from '../theme/appTheme';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{backgroundColor: colors.primary}}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'IconsScreen':
              iconName = 'apps';
              break;
            case 'TopBarNavigator':
              iconName = 'terminal';
              break;
            case 'StackNavigator':
              iconName = 'rocket';
              break;
          }
          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      <BottomTabAndroid.Screen
        name="IconsScreen"
        component={IconsScreen}
        options={{title: 'Icons'}}
      />
      <BottomTabAndroid.Screen
        name="TopBarNavigator"
        component={TopBarNavigator}
        options={{title: 'TopBar'}}
      />
      <BottomTabAndroid.Screen
        name="StackNavigator"
        options={{title: 'Stack Navigator'}}
        component={StackNavigator}
      />
    </BottomTabAndroid.Navigator>
  );
};

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#fff',
        tabBarActiveBackgroundColor: colors.primary,
        tabBarStyle: {
          backgroundColor: colors.secondary,
          borderTopWidth: 0,
          elevation: 0,
          height: 50,
        },
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: 'bold',
        },
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'IconsScreen':
              iconName = 'apps';
              break;
            case 'TopBarNavigator':
              iconName = 'terminal';
              break;
            case 'StackNavigator':
              iconName = 'rocket';
              break;
          }
          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      <BottomTabIOS.Screen
        name="IconsScreen"
        options={{headerShown: false, title: 'Icons'}}
        component={IconsScreen}
      />
      <BottomTabIOS.Screen
        name="TopBarNavigator"
        options={{headerShown: false, title: 'TopBar'}}
        component={TopBarNavigator}
      />
      <BottomTabIOS.Screen
        name="StackNavigator"
        options={{
          headerShown: false,
          title: 'Stack Navigator',
        }}
        component={StackNavigator}
      />
    </BottomTabIOS.Navigator>
  );
};
