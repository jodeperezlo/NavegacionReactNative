import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

const Pagina2Screen = ({navigation}: Props) => {
  return (
    <View style={styles.background}>
      <View style={styles.globalMargin}>
        <Button
          title="Ir a página 3"
          onPress={() => navigation.navigate('Pagina3Screen')}
        />
      </View>
    </View>
  );
};

export default Pagina2Screen;
