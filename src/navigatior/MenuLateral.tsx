import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';

import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import SettingsScreen from '../screens/SettingsScreen';
import {colors, styles} from '../theme/appTheme';
import {avatarPlaceholder} from '../assets/AvatarPlaceholder';
import {Tabs} from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
        drawerStyle: {
          backgroundColor: colors.backgroundColor,
        },
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.white,
      }}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen
        name="Tabs"
        options={{title: 'Navegación'}}
        component={Tabs}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{title: 'Configuración'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: avatarPlaceholder,
          }}
          style={styles.avatar}
        />
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('Tabs')}>
          <Text style={styles.menuText}>
            <Icon name={'navigate'} size={20} color={colors.white} /> Navegación
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Text style={styles.menuText}>
            <Icon name={'settings'} size={20} color={colors.white} />{' '}
            Configuración
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
