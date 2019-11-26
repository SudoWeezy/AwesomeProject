import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView,

} from 'react-native';
import Swiper from 'react-native-swiper';
import { StackActions, NavigationActions } from 'react-navigation';
// import { Map }from './Map.js'
import { Qrcode }from './Qrcode.js'
import { Api }from './Api.js'
import {FillNotification} from './FillNotification.js'
export  class Main extends React.Component {

  static navigationOptions = {title:'menu'.toUpperCase()};

  render(){
    return (
      <Swiper
      style={styles.wrapper}
      showsButtons={true}>
        <View style={styles.slide2}>
          <Qrcode/>
        </View>
        <View style={styles.slide2}>
          <Api />
        </View>
        <View style={styles.slide3}>
          <FillNotification/>
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})
