import React from 'react';
import { Alert, Dimensions, Keyboard, Image, View, StyleSheet} from 'react-native';
import { scaleModerate, scaleVertical } from '../utils/scale';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import { RkTextInput, RkButton, RkText, RkAvoidKeyboard } from 'react-native-ui-kitten';
import { StackActions, NavigationActions } from 'react-navigation';
const url = 'http://127.0.0.1:5000'

export class FillNotification extends React.Component{
  static navigationOptions = {
  header: null,
  };
  constructor(props){
    super(props)
    this.state = {
      photo:'',
      title:'',
      text:'',
    }
  }
  _onPressButton=() => {
    fetch(url + '/articles', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        photo: this.state.photo,
        title: this.state.title,
        text: this.state.text,
      }),
    });
    this.state.photo
    this.state.title
    this.state.text
  };
  renderImage = () => {
    const screenSize = Dimensions.get('window');
    const imageSize = {
      width: screenSize.width,
      height: screenSize.height - scaleModerate(375, 1),

    };
    return (
      <Image style={[styles.image, imageSize]} source={require('../assets/images/backgroundLoginV1DarkTheme.png')}/>
    );
  };

  render(){
    return (

      <RkAvoidKeyboard
        onStartShouldSetResponder={() => true}
        onResponderRelease={() => Keyboard.dismiss()}
        style={styles.screen}>
        {this.renderImage()}
      <View style={styles.container}>
        <RkTextInput
        onChangeText={(text) => this.setState({photo:text})}
        rkType='rounded' placeholder='Photo' />
        <RkTextInput
        onChangeText={(text) => this.setState({title:text})}
        rkType='rounded' placeholder='Title'/>
        <RkTextInput
        onChangeText={(text) => this.setState({text:text})}
        rkType='rounded' placeholder='Text'/>
        <AwesomeButtonRick
          backgroundColor='#ff8000'
          backgroundDarker='#d3560e'
          textColor='#521168'
          type="primary"
          backgroundProgress='#851e52'
          onPress={this._onPressButton}>
          Push Notification
        </AwesomeButtonRick>
      </View>
      </RkAvoidKeyboard>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',

  },
  container: {
    paddingHorizontal: 17,
    paddingBottom: scaleVertical(22),
    alignItems: 'center',
    flex: -1,
  },
  image: {
    resizeMode: 'cover',
    marginBottom: scaleVertical(10),
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: scaleVertical(24),
  },
  button: {
    marginHorizontal: 14,
  },
  textRow: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
