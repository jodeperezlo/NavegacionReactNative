import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {StackScreenProps} from '@react-navigation/stack';
import {Button, Text, View, TouchableOpacity} from 'react-native';
import {colors, styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.background}>
      <View style={styles.globalMargin}>
        <Button
          title="Ir a página 2"
          onPress={() => {
            navigation.navigate('Pagina2Screen');
          }}
        />
        <Text style={styles.subtitle}>Navegar con propiedades</Text>

        <View style={styles.containerButtons}>
          <TouchableOpacity
            style={{...styles.button, backgroundColor: '#47A9EB'}}
            onPress={() => {
              navigation.navigate('PersonaScreen', {
                id: 1,
                nombre: 'Jorge',
              });
            }}>
            <Text style={styles.buttonText}>
              <Icon name={'person-outline'} size={20} color={colors.white} />
              {'\n'}
              Jorge
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{...styles.button, backgroundColor: '#BC3333'}}
            onPress={() => {
              navigation.navigate('PersonaScreen', {
                id: 2,
                nombre: 'Yeshúa',
              });
            }}>
            <Text style={styles.buttonText}>
              <Icon name={'person-outline'} size={20} color={colors.white} />
              {'\n'}
              Yeshúa
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Pagina1Screen;
