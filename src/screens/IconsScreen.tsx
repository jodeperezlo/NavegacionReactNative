import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {styles, colors} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import TouchableIcon from '../components/TouchableIcon';
import {AuthContext} from '../context/AuthContext';

const IconsScreen = () => {
  const {top: marginTop} = useSafeAreaInsets();
  const {
    authState: {favoriteIcon},
  } = useContext(AuthContext);
  return (
    <View style={{flex: 1, backgroundColor: colors.backgroundColor}}>
      <View style={{...styles.globalMargin, marginTop}}>
        <Text style={styles.title}>Icons</Text>
        <View style={styles.iconsContainer}>
          <TouchableIcon iconSize={60} iconName="body-outline" />
          <TouchableIcon iconSize={60} iconName="airplane-outline" />
          <TouchableIcon iconSize={60} iconName="boat-outline" />
          <TouchableIcon iconSize={60} iconName="bicycle-outline" />
          <TouchableIcon iconSize={60} iconName="american-football-outline" />
          <TouchableIcon iconSize={60} iconName="baseball-outline" />
          <TouchableIcon iconSize={60} iconName="football-outline" />
          <TouchableIcon iconSize={60} iconName="bed-outline" />
          <TouchableIcon iconSize={60} iconName="code-slash-outline" />
        </View>
        <View style={styles.containerFavoriteIcon}>
          {favoriteIcon && (
            <TouchableIcon iconSize={150} iconName={favoriteIcon} />
          )}
        </View>
      </View>
    </View>
  );
};

export default IconsScreen;
