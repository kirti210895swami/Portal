import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { Text, View,TouchableOpacity } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

 
export default  class ResumeUploadScreen extends Component {
   async  openDocument () {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log(
        res.uri,
        res.type, // mime type
        res.name,
        res.size
      );
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  }
  
  render(){
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }}>

      <TouchableOpacity
      onPress={()=>this.openDocument()}
      style={{
    padding:10,
    width:"80%",
    alignItems:"center",
    backgroundColor:"d0dbd3",
    borderRadius:10
  }}/>
      <Text>Text file!</Text>
      <StatusBar style="auto" />
    </View>
  )
}}