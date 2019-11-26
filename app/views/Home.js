import React from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput} from 'react-native';

const instructions = Platform.select({
  ios:
    'Test Iphone,\n' +
    'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android:
    'Test Android,\n' +
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export class Home extends React.Component<Props> {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <TextInput
          style={{height: 40}}
          placeholder="Login"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={styles.welcome}>App</Text>
        <Text style={styles.instructions}>V0.1</Text>
        <Text style={styles.instructions}>Je suis un {instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
