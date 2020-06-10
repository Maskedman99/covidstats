import React, {useState, useContext} from 'react';
import {StyleSheet, TextInput, FlatList} from 'react-native';

import {Divider} from '../Components/Common';
import LabelCountry from '../Components/LabelCountry';

import {ThemeContext} from '../Context/themes';

import countriesList from '../Assets/countriesList.json';

const SearchCountry = () => {
  const [filteredData, setFilteredData] = useState(countriesList);
  const {theme} = useContext(ThemeContext);

  const handleSearch = text => {
    const x = countriesList.filter(item => item.Country.toLowerCase().includes(text.toLowerCase()));
    setFilteredData(x);
  };

  return (
    <>
      <TextInput
        style={[styles.input, {borderColor: theme.divider, color: theme.foreground}]}
        placeholder="Search country"
        onChangeText={text => handleSearch(text)}
        placeholderTextColor={theme.divider}
      />
      <FlatList
        style={styles.flatlist}
        data={filteredData}
        renderItem={({item}) => <LabelCountry country={item} />}
        keyExtractor={item => item.ISO2}
        ItemSeparatorComponent={() => <Divider />}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 4
  },
  flatlist: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 4,
    paddingTop: 2
  }
});

export default SearchCountry;
