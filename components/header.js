import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {SearchBar, Header} from 'react-native-elements';

const Search = () => {
  return (
    <View style={styles.header}>
      <Header
        placement="left"
        leftComponent={{icon: 'menu', color: '#fff'}}
        centerComponent={{text: 'MY TITLE', style: {color: '#fff'}}}
        rightComponent={{icon: 'home', color: '#fff'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 300,
    backgroundColor: '#D9ECF0',
  },

  search: {
    paddingTop: 60,
  },
});

export default Search;
