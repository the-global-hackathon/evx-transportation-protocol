import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Marker } from 'react-native-maps';
/* All the different components inside of our application that are rendered dirtectly
by a navigator. If we ever have a child component, like a reusable component that is
displayed by one of those screens that needs to access that navigator, We can either
pass props from the screen componenet down to this reusable component or alternatively
we can wrap the reusable component with that "withNavigation" function. "withNavigation"
is going to make sure that our component that we create inside this file will have
direct access to the "navigation" prop and be able to call "navigate".*/
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, key, coordinates, routeName }) => {
  return (

      <Marker
        key={key}
        coordinate={coordinates}
        onPress={() => navigation.navigate(routeName, { coordinates } )}
      />

  );
};

const styles = StyleSheet.create({
  link: {
    color: 'blue'
  }
});

export default withNavigation(NavLink);
