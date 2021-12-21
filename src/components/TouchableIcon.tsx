import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import {colors} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

interface Props {
  iconName: string;
  iconSize: number;
}

const TouchableIcon = ({iconName, iconSize}: Props) => {
  const {changeFavoriteIcon} = useContext(AuthContext);
  return (
    <TouchableOpacity onPress={() => changeFavoriteIcon(iconName)}>
      <Icon name={iconName} size={iconSize} color={colors.light} />
    </TouchableOpacity>
  );
};

export default TouchableIcon;
