import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

const Pagina3Screen = ({navigation}: Props) => {
  return (
    <View style={styles.background}>
      <View style={styles.globalMargin}>
        <Button
          title="Ir a página 1"
          onPress={() => navigation.navigate('Pagina1Screen')}
        />
      </View>
    </View>
  );
};

export default Pagina3Screen;
