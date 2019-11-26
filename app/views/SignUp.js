import React from 'react';
import {
  Alert,
  View,
  Image,
  Keyboard,
} from 'react-native';
import {
  RkButton,
  RkText,
  RkTextInput,
  RkStyleSheet,
  RkTheme,
  RkAvoidKeyboard,
} from 'react-native-ui-kitten';


import { scaleVertical } from '../utils/scale';

import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import { StackActions, NavigationActions } from 'react-navigation';

export class SignUp extends React.Component {
  static navigationOptions = {header: null,};
  _onPressButton() {
    Alert.alert('You tapped the button REGISTER !')
  };
  renderImage = () => (
    <Image style={styles.image} source={require('../assets/images/logo.png')} />
  );

  onSignInButtonPressed=() => {
    this.props.navigation.dispatch(StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Login' })
      ],
    }))
  };

  onSignUpButtonPressed() {
    Alert.alert('You tapped the button onSignUpButtonPressed !')
  };

  render = () => (
    <RkAvoidKeyboard
      style={styles.screen}
      onStartShouldSetResponder={() => true}
      onResponderRelease={() => Keyboard.dismiss()}>
      <View style={{ alignItems: 'center' }}>
        {this.renderImage()}
        <RkText rkType='h1'>Registration</RkText>
      </View>
      <View style={styles.content}>
        <View style={styles.container}>
          <RkTextInput rkType='rounded' placeholder='Name' />
          <RkTextInput rkType='rounded' placeholder='Email' />
          <RkTextInput rkType='rounded' placeholder='Password' secureTextEntry />
          <RkTextInput rkType='rounded' placeholder='Confirm Password' secureTextEntry />
          <AwesomeButtonRick
            backgroundColor='#ff8000'
            backgroundDarker='#d3560e'
            textColor='#521168'
            type="primary"
            backgroundProgress='#851e52'
            onPress={this._onPressButton}>
            REGISTER
          </AwesomeButtonRick>
        </View>
        <View style={styles.footer}>
          <View style={styles.textRow}>
            <RkText rkType='primary3'>Already have an account?</RkText>
            <RkButton rkType='clear' onPress={this.onSignInButtonPressed}>
              <RkText rkType='header6'>Sign in now</RkText>
            </RkButton>
          </View>
        </View>
      </View>
    </RkAvoidKeyboard>
  )
}

const styles = RkStyleSheet.create(theme => ({
  screen: {
    padding: 16,
    flex: 1,
    justifyContent: 'space-around',

  },
  container: {
    paddingHorizontal: 17,
    paddingBottom: scaleVertical(22),
    alignItems: 'center',
    flex: -1,
  },
  image: {
    marginBottom: 10,
    height: scaleVertical(77),
    resizeMode: 'contain',
  },
  content: {
    justifyContent: 'space-between',
  },
  save: {
    marginVertical: 20,
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: 24,
    marginHorizontal: 24,
    justifyContent: 'space-around',
  },
  footer: {
    justifyContent: 'flex-end',
    fled: 1,
  },
  textRow: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
}));
