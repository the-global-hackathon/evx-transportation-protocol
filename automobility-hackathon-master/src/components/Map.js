import React, { useContext, useEffect } from 'react'
import { Text, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle, Marker } from 'react-native-maps';
import { SafeAreaView } from 'react-navigation';
import axios from 'axios';

import { Context } from '../context/Context';
import NavLink from '../components/NavLink';

const Map = () => {
  const { state: { search }, getDetails } = useContext(Context);

  let markers = [{coordinates:{latitude: 0, longitude: 0}}]
  search.map(i => markers.push({coordinates:{latitude: i[0], longitude: i[1]}}))

  return (
    <MapView
      style={styles.map}
      region={{
        latitude: 34.0403207,
        longitude: -118.2717511,
        latitudeDelta: 0.03,
        longitudeDelta: 0.03
      }}
      showsUserLocation={true}
    >

      {markers.map(({coordinates}, index) => (
        <NavLink
          key={index}
          coordinates={coordinates}
          routeName="Directions"
        />
      ))}
    </MapView>
  );
}


const styles = StyleSheet.create({
  map: {
    height: '100%'
  }
});

export default Map;
