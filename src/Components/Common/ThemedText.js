import React, {useContext} from 'react';
import {Text} from 'react-native';

import {ThemeContext} from '../../Context/themes';

const ThemedText = ({children, style}) => {
  const {theme} = useContext(ThemeContext);
  return <Text style={[style, {color: theme.foreground}]}>{children}</Text>;
};

export default ThemedText;
