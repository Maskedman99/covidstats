import React, {useState, useContext, memo} from 'react';
import {StyleSheet, TextInput, FlatList, TouchableOpacity} from 'react-native';

import {Divider, ThemedText} from '../Components/Common';

import {ThemeContext} from '../Context/themes';
import {CountryContext} from '../Context/countries';

import countriesList from '../Assets/countriesList.json';

const LabelCountry = ({country, navigation, changeCountry}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate('CountryHome', {screen: 'Country'});
        changeCountry(country);
      }}>
      <ThemedText style={styles.country}>{country.Country}</ThemedText>
    </TouchableOpacity>
  );
};

const MemoizedLabelCountry = memo(LabelCountry);

const SearchCountry = ({navigation}) => {
  const [filteredData, setFilteredData] = useState(countriesList);
  const {theme} = useContext(ThemeContext);
  const {changeCountry} = useContext(CountryContext);

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
        renderItem={({item}) => (
          <MemoizedLabelCountry
            country={item}
            navigation={navigation}
            changeCountry={changeCountry}
          />
        )}
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
  },
  container: {
    paddingVertical: 4,
    paddingLeft: 12
  },
  country: {
    fontSize: 14
  }
});

export default memo(SearchCountry);
