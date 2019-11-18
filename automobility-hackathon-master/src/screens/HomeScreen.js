import React, { useContext, useEffect } from 'react'
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Map from '../components/Map';
import { Context } from '../context/Context';


const HomeScreen = ({ navigation }) => {
  // const { state: { details } } = useContext(Context);
  // console.log(details);

  const { state: { places, search }, getPlaces, searchApi } = useContext(Context);

  useEffect(() => {
    getPlaces();
    searchApi();
  }, []);

  //console.log(places);

  return (
    <>
      <Map />
    </>
  );
};

HomeScreen.navigationOptions = () => {
  return {
    title: "Select Location"
  };
};

const styles = StyleSheet.create({
  contentContainer: {
    //paddingVertical: 1
  }
});

export default HomeScreen;
