import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, TextInput} from 'react-native';

const SearchBar = ({term, onTermChange, onTermSubmit}) => (
  <View style={styles.backgroundStyle}>
    <Image
      style={styles.iconStyle}
      source={require('../../assets/img/loupe.png')}
    />
    <TextInput
      onChangeText={onTermChange}
      value={term}
      style={styles.inputStyle}
      placeholder="Search"
      autoCapitalize="none"
      autoCorrect={false}
      onEndEditing={onTermSubmit}
    />
  </View>
);

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 15,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    // align self will align just that element
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

export default SearchBar;
