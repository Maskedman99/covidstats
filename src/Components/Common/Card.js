import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';

import {ThemeContext} from '../../Context/themes';

const Card = ({children, style}) => {
  const {theme} = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.container,
        style,
        {
          borderColor: theme.divider,
          backgroundColor: theme.card
        }
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 4,
    padding: 16,
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 8,
    elevation: 2
  }
});

export default Card;
