import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';

import {ThemeContext} from '../../Context/themes';

const Card = ({children, style}) => {
  const themes = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.container,
        style,
        {
          borderColor: themes.divider,
          backgroundColor: themes.card
        }
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 15
  }
});

export default Card;
