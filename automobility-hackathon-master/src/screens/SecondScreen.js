import React, { useContext, useEffect } from 'react'
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { Context } from '../context/Context';
import { SafeAreaView } from 'react-navigation';

const SecondScreen = ({ navigation }) => {
  const { state: { places }, getPlaces } = useContext(Context);


  useEffect(() => {
    getPlaces();
  }, []);

  //console.log(places.map(i => i.id));
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <FlatList
        data={places}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Reserve')}>
              <ListItem
                chevron
                bottomDivider
                title={item.title}
                subtitle={item.vicinity}
             />
            </TouchableOpacity>
          );
        }}
      />
    </ScrollView>
  );
};

SecondScreen.navigationOptions = () => {
  return {
    title: "Reserve"
  };
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 4,
    marginBottom: 5
  },
  name: {
    fontWeight: 'bold',
  }
});

export default SecondScreen;
