import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import OpenPage from './components/openPage';
import Search from './components/searchBar';
import PharmacyCard from './components/pharmacyCard';

const App = () => {
  return (
    <ScrollView>
      <Search />
      <PharmacyCard />
      <PharmacyCard />
      <PharmacyCard />
      <PharmacyCard />
    </ScrollView>
  );
};

export default App;
