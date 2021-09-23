import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';

import { Header } from 'react-native-elements';
import db from './localdb';
import PhonicSoundButton from './components/PhonicSoundButton';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      chunks: [],
      phonicSounds:[]
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'blue'}
          centerComponent={{
            text: 'Monkey Chunky',
            style: { color: 'white', fontSize: 20 },
          }}
        />
        <Image style={styles.image}
        source={{uri: 'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png'}}/>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
              var word=db[this.state.text.toLowerCase().trim()]

               word?(this.setState({chunks:word.chunks}),this.setState({phonicSounds:word.phones})):alert('Word not found')
          }}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
        <View>
          {this.state.chunks.map((item,index) => {
            return(
           <PhonicSoundButton buttonIndex={index} wordChunk={this.state.chunks[index]} soundChunk={this.state.phonicSounds[index]} ph></PhonicSoundButton>
            );
          })}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  input: {
    marginTop:100 ,
    borderWidth: 3,
    width: '80%',
    textAlign: 'center',
    height: 40,
    alignSelf: 'center',
  },
  button: {
    marginTop: 50,
    alignSelf: 'center',
    borderWidth: 3,
    width: 70,
    height: 50,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  buttonText: {
    textAlign: 'center',
  },
 
  image:{
    width:150,
    height:150,
    alignSelf:'center'
      }
});
