
import React,{useContext} from 'react';
import {View,StyleSheet} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLinks from '../components/NavLinks';
import {NavigationEvents} from 'react-navigation';

const SignupScreen = ({navigation}) => {
    const{state,signup,clearErrorMessage} =useContext(AuthContext);
    <NavigationEvents   onWillFocus ={clearErrorMessage} />
      return (
      <View style={styles.container}>
        
        <AuthForm
           headerText = "SignUp for Tracker."
           errorMessage = {state.errorMessage}
           submitButtonText= "SignUp"
           onSubmit = {signup}  
        /> 

        <NavLinks
          routeName = "Signin"
          text = "Already have an account? SignIn Instead."
          />  
     </View>
    );
};

 SignupScreen.navigationOptions =() => {
   return {
       header: null
   };

};

const styles =StyleSheet.create({
    container:{
        //borderColor:'red',
       // borderWidth:10,
        flex:1,
        justifyContent:'center',
        marginBottom:220
    },
    errorMessage :{
      fontSize : 16,
      color: 'red',
      marginTop: 15,
      marginLeft:15
    }
    
   
});

export default SignupScreen;