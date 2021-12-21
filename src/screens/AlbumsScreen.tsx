import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

const AlbumsScreen = () => {
  const {authState, logout} = useContext(AuthContext);
  const isLoggIn = authState.isLoggedIn;

  const handleLogout = () => {
    logout();
  };

  return (
    <View>
      <Text style={styles.title}>Albums Screen</Text>
      <Icon
        name="image-outline"
        size={100}
        color="white"
        style={{textAlign: 'center'}}
      />

      <View style={{margin: 30}}>
        {isLoggIn && <Button title="Logout" onPress={handleLogout} />}
      </View>
    </View>
  );
};

export default AlbumsScreen;
