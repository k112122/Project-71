import React from 'react';
import {Text, View, TextInput, StyleSheet, TouchableOpacity, ToastAndroid,KeyboardAvoidingView,Button} from 'react-native';
import {Header} from 'react-native-elements';
import db from '../config'
import * as firebase from 'firebase'



export default class WriteStorySceen extends React.Component{
   displayAlert = () => {
    alert('Submitted');
  };
  render(){
    return(
   <View style = {{flex: 1}}>
    <Header
      backgroundColor={'cyan'}
      centerComponent={{text:'Story Hub',style:{fontSize:30}}}
    />
      
        <TextInput
          style = {styles.inputBox}
          placeholder = "Title"/>

        <TextInput
          style = {styles.inputBox}
          placeholder = "Author name"/>

        <TextInput
          style = {styles.storyInput}
          placeholder = "Story"/>

        <TouchableOpacity
        style = {styles.submitButton}
        onPress={this.displayAlert}>
        <Text> Submit 
        </Text>
        </TouchableOpacity>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  submitButton:{
    backgroundColor:'yellow',
    width:100,
    height:50,
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    margin:10,
    padding:10 ,
   
  },
 
  inputBox:{
    width:300,
    height:40,
    backgroundColor:'white',
    fontSize:20,
    margin:20,
    padding:1,
    borderWidth:2,
    textAlign:'center', 
    alignSelf:'center',
  },
  storyInput:{
     width:300,
    height:200,
    backgroundColor:'white',
    fontSize:20,
    margin:20,
    padding:1,
    borderWidth:2,
    textAlign:'center', 
    alignSelf:'center',
  }
});