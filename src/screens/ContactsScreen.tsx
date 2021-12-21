import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

const ContactsScreen = () => {
  return (
    <View>
      <Text style={styles.title}>Contacts Screen</Text>
      <Icon
        name="people-circle-outline"
        size={100}
        color="white"
        style={{textAlign: 'center'}}
      />
    </View>
  );
};

export default ContactsScreen;
