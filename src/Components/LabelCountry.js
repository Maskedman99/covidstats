import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import {ThemedText} from './Common';

const LabelCountry = ({country}) => {
  return (
    <TouchableOpacity>
      <ThemedText>{country.Country}</ThemedText>
    </TouchableOpacity>
  );
};

export default LabelCountry;
