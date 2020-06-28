import React, {useState, memo} from 'react';
import {TouchableHighlight} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';

import ThemedText from './ThemedText';

const DatePicker = ({date, setDate, minDate, maxDate}) => {
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);

  const onChange = (event, selectedDate) => {
    setShowDateTimePicker(false);
    setDate(selectedDate || date);
  };

  return (
    <>
      <TouchableHighlight onPress={() => setShowDateTimePicker(true)}>
        <ThemedText>{dayjs(date).format('DD MMM YYYY')}</ThemedText>
      </TouchableHighlight>
      {showDateTimePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          onChange={onChange}
          maximumDate={maxDate}
          minimumDate={minDate}
        />
      )}
    </>
  );
};

export default memo(DatePicker);
