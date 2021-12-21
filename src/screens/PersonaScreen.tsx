import React, {useContext, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigatior/StackNavigator';
import {AuthContext} from '../context/AuthContext';

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

const PersonaScreen = ({route, navigation}: Props) => {
  const params = route.params;

  const {changeUsername} = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({
      title: params.nombre,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    changeUsername(params.nombre);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.background}>
      <Text style={styles.title}>Página de Persona</Text>
      <Text style={styles.subtitle}>Hola {params.nombre}</Text>
      <Icon
        name="train-outline"
        size={150}
        color="#fff"
        style={{textAlign: 'center'}}
      />
      <Icon
        name="trail-sign-outline"
        size={100}
        color="#fff"
        style={{textAlign: 'center'}}
      />
    </View>
  );
};

export default PersonaScreen;
