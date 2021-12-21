import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import ContactsScreen from '../screens/ContactsScreen';
import AlbumsScreen from '../screens/AlbumsScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../theme/appTheme';

const Tab = createMaterialTopTabNavigator();

const TopBarNavigator = () => {
  const {top: paddingTop} = useSafeAreaInsets();
  return (
    <Tab.Navigator
      style={{paddingTop}}
      sceneContainerStyle={{backgroundColor: colors.backgroundColor}}
      screenOptions={({route}) => ({
        tabBarPressColor: colors.light,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {backgroundColor: colors.white},
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          height: 64,
          backgroundColor: colors.third,
        },
        tabBarIcon: () => {
          let iconName: string = '';
          switch (route.name) {
            case 'ChatScreen':
              iconName = 'chatbubble-outline';
              break;
            case 'ContactsScreen':
              iconName = 'people-outline';
              break;
            case 'AlbumsScreen':
              iconName = 'images-outline';
              break;
          }
          return <Icon name={iconName} size={20} color={colors.white} />;
        },
      })}>
      <Tab.Screen
        name="ChatScreen"
        options={{
          title: 'Chat',
          tabBarLabelStyle: {color: colors.white},
        }}
        component={ChatScreen}
      />
      <Tab.Screen
        name="ContactsScreen"
        options={{title: 'Contacts', tabBarLabelStyle: {color: colors.white}}}
        component={ContactsScreen}
      />
      <Tab.Screen
        name="AlbumsScreen"
        options={{title: 'Albums', tabBarLabelStyle: {color: colors.white}}}
        component={AlbumsScreen}
      />
    </Tab.Navigator>
  );
};

export default TopBarNavigator;
