import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Card, ListItem, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const PharmacyCard = () => {
  return (
    <Card title="CVS - Van Nuys" image={require('./images/pharma.jpeg')}>
      <Text style={{marginBottom: 10}}></Text>

      <Text>
        <Icon name="map-marker" /> 1.5m (15-20 minutes)
      </Text>
      <Text>
        <Icon name="star" /> 4.5 - Excellent
      </Text>

      <Button
        icon={<Icon name="binoculars" color="#ffffff" />}
        buttonStyle={{
          borderRadius: 90 / 4,
          marginLeft: 90,
          marginRight: 90,
          marginBottom: 0,
        }}
        title="View"
      />
    </Card>
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

export default PharmacyCard;
