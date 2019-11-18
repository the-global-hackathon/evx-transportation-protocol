import React, { useContext, useEffect } from 'react'
import { View, StyleSheet, Text, Image, Button } from 'react-native';
import { Linking } from 'expo';
import { Context } from '../context/Context';

const DirectionsScreen = ({ navigation }) => {
  const {
    state: { directions, details },
    getDirections, getDetails
  } = useContext(Context);
  const coordinates = navigation.getParam('coordinates');

  useEffect(() => {
    getDirections(coordinates);
    getDetails(coordinates);
  }, []);


  return (
    <>
      <Image
        style={{width: '100%', height: 350}}
        source={{uri: directions }}
      />
      <Button title="getDirections" onPress={() => Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${details.title}&destination_place_id=${details.id}`)} />
    </>
  );
};

DirectionsScreen.navigationOptions = {
  title: 'Directions',
}

const styles = StyleSheet.create({});

export default DirectionsScreen;
