import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Platform,
  TextInput,
  TouchableOpacity,
 } from 'react-native';
import firebase from 'firebase'
import * as FirebaseAPI from '../modules/firebaseAPI';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  
  static navigationOptions = {
    title: 'Login',
  };

  state = {
    email: "Enter email",
    password: "Enter password"
  };

  componentDidMount() {
    this.watchAuthState()
  }

  watchAuthState() {
    firebase.auth().onAuthStateChanged(function(user) {
      console.log('onAuthStatheChanged: ', user)
      
      if (user) {
        this.props.navigation.navigate('App');
      }
    });
  }

  submit() {
    FirebaseAPI.createUser(this.state.email, this.state.password)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Create an account below</Text>
          <TextInput 
            style={styles.textInput}
            onChangeText={(text) => this.setState({email: text})}
            value={this.state.email}
          />
          <TextInput 
            style={styles.textInput}
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
          />
          <TouchableOpacity
            style={{marginTop: '5%'}}
            onPress={() => this.submit()}
          >
            <View>
              <Text>Submit</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 50,
    paddingTop: '50%',
  },
  textInput: {
    fontSize: 17,
    lineHeight: 24,
    width: '75%',
  },
  text: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    width: '75%',
    marginBottom: '10%',
    textAlign: 'center',
  },
});
