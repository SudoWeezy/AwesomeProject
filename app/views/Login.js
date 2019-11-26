import React from 'react';
import { Alert, Dimensions, Keyboard, Image, View, StyleSheet} from 'react-native';
import { scaleModerate, scaleVertical } from '../utils/scale';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import { RkTextInput, RkButton, RkText, RkAvoidKeyboard } from 'react-native-ui-kitten';
import { StackActions, NavigationActions } from 'react-navigation';

export class Login extends React.Component{
  static navigationOptions = {
  header: null,
  };
  _onPressButton=() => {
    this.props.navigation.dispatch(StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Main' })
      ],
    }))
  };

  onSignUpButtonPressed=() => {
    this.props.navigation.dispatch(StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'SignUp' })
      ],
    }))
  };

  renderImage = () => {
    const screenSize = Dimensions.get('window');
    const imageSize = {
      width: screenSize.width,
      height: screenSize.height - scaleModerate(375, 1),

    };
    return (
      <Image style={[styles.image, imageSize]} source={require('../assets/images/backgroundLoginV1.png')}/>
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
        <RkTextInput rkType='rounded' placeholder='Username' />
        <RkTextInput rkType='rounded' placeholder='Password' secureTextEntry />
        <AwesomeButtonRick
          backgroundColor='#ff8000'
          backgroundDarker='#d3560e'
          textColor='#521168'
          type="primary"
          backgroundProgress='#851e52'
          onPress={this._onPressButton}>
          LOGIN
        </AwesomeButtonRick>

        <View style={styles.footer}>
          <View style={styles.textRow}>
            <RkText rkType='primary3'>Don’t have an account?</RkText>
            <RkButton rkType='clear'>
              <RkText rkType='header6' onPress={this.onSignUpButtonPressed}>Sign up now</RkText>
            </RkButton>
          </View>
        </View>
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
  footer: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  textRow: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
