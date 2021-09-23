import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,

} from 'react-native';
import {Audio} from 'expo-av';

class PhonicSoundButton extends React.Component{
 
 constructor(){
   super();
   this.state={buttonPressedIndex:''}
 }
 

playSound= async (soundChunk)=>{
var soundLink= 'https://s3-whitehatjrcontent.whjr.online/phones/'+soundChunk+'.mp3';
Audio.Sound.createAsync({uri:soundLink},{shouldPlay:true})
}
render(){
  return( <TouchableOpacity style={
    (this.state.buttonPressedIndex===this.props.buttonIndex ? [styles.chunkButton,{backgroundColor:'white'}]:[styles.chunkButton,{backgroundColor:'red'}]
    )
    
    
   } onPress={()=>{
    this.setState({buttonPressedIndex:this.props.buttonIndex})
    this.playSound(this.props.soundChunk);
  }}>
              <Text style={  (this.state.buttonPressedIndex===this.props.buttonIndex ? [styles.output,{color:'red'}]:[styles.output,{color:'white'}]
    )}>{this.props.wordChunk}</Text>
            </TouchableOpacity>);
  
}
}
const styles = StyleSheet.create({
   output: {

    alignSelf: 'center',
    fontSize: 38,
    textAlign:'center'
  },
  chunkButton:{
    marginTop:20,
    borderWidth:2,
    width:80,
    height:50,
    alignSelf:'center',
    justifyContent:'center'

  },
})
export default PhonicSoundButton;