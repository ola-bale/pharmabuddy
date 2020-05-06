import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {SearchBar, Header} from 'react-native-elements';

const Search = () => {
  return (
    <View style={styles.header}>
      <View style={styles.search}>
        <SearchBar placeholder="Search By Town..." />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 120,
    backgroundColor: '#D9ECF0',
  },

  search: {
    paddingTop: 60,
  },
});

export default Search;
