import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors, styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

const SettingsScreen = () => {
  const {top: marginTop} = useSafeAreaInsets();

  const {authState} = useContext(AuthContext);

  return (
    <View style={styles.background}>
      <View style={{...styles.globalMargin, marginTop}}>
        <Text style={styles.title}>Settings Screen</Text>
        <Icon
          name="construct-outline"
          size={100}
          color="white"
          style={{textAlign: 'center'}}
        />
        <Text style={{color: colors.white}}>
          {JSON.stringify(authState, null, 4)}
        </Text>
      </View>
    </View>
  );
};

export default SettingsScreen;
