import React, {useState} from 'react';
import {StyleSheet, TextInput, FlatList} from 'react-native';

import {Divider} from '../Components/Common';
import LabelCountry from '../Components/LabelCountry';

import countriesList from '../Assets/countriesList.json';

const SearchCountry = () => {
  const [filteredData, setFilteredData] = useState(countriesList);

  const handleSearch = text => {
    const x = countriesList.filter(item => item.Country.toLowerCase().includes(text.toLowerCase()));
    setFilteredData(x);
  };

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Search country"
        onChangeText={text => handleSearch(text)}
        placeholderTextColor="white"
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
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 12
  },
  inputText: {
    color: 'white'
  },
  flatlist: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 4
  }
});

export default SearchCountry;
