import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export class Map extends React.Component {
  render = () => (
    <MapView
      style={styles.container}
      region={{

        latitude: 345.736376,
        longitude: 3.1887239999999792,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      >
      </MapView>
  )
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
})
