import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

const ChatScreen = () => {
  const {
    signIn,
    authState: {isLoggedIn},
  } = useContext(AuthContext);

  return (
    <View>
      <Text style={styles.title}>Chat Screen</Text>
      <Icon
        name="chatbox-ellipses-outline"
        size={100}
        color="white"
        style={{textAlign: 'center'}}
      />
      <View style={{margin: 30}}>
        {!isLoggedIn && <Button title="Sign In" onPress={signIn} />}
      </View>
    </View>
  );
};

export default ChatScreen;
