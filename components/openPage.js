import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {SocialIcon} from 'react-native-elements';

const OpenPage = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./images/P.png')} />
      <SocialIcon
        style={styles.socials}
        title="Sign Up With Facebook"
        button
        type="facebook"
      />
      <SocialIcon
        style={styles.socials}
        title="Sign Up With Google"
        button
        type="google"
      />
      <Text>Already Registered? Sign In</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 550,
    width: 550,
  },
  container: {
    flex: 1,
    fontSize: 30,
    backgroundColor: '#20ADBB',
    justifyContent: 'center',
    alignItems: 'center',
  },

  socials: {
    width: 250,
  },
});

export default OpenPage;
