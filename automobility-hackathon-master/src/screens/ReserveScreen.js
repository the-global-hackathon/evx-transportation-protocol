import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
/* We're going to add in an additional import from react navigation called "SafeAreaView".
This is a react component that's automatically make sure, by looking at the device, that
we're running on, that none of  the content inside the screen is going to render behind
the status bar at the very top.*/
import { SafeAreaView } from 'react-navigation';
import { Context } from '../context/Context';
import { FontAwesome } from '@expo/vector-icons';

const ReserveScreen = () => {
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Button title="Make Reservation" />
    </SafeAreaView>
  );
};

ReserveScreen.navigationOptions = {
  title: 'Payment',
}

const styles = StyleSheet.create({});

export default ReserveScreen;
