
import React,{useContext} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLinks from '../components/NavLinks';
import {Context} from '../context/AuthContext';

const SigninScreen = () => {
    const {state,signin,clearErrorMessage} = useContext(Context);

    return (
      <View style= {styles.container}>
           <NavigationEvents   onWillFocus={clearErrorMessage} />

          <AuthForm
             headerText ="Sign In to your account."
             errorMessage = {state.errorMessage}
             onSubmit= {signin}
             submitButtonText = "Sign IN"
          />

          <NavLinks
             text="Don't have an account? SignUp Instead"
             routeName= "Signup"
          />
      </View>
    );
};

SigninScreen.navigationOptions =() => {
    return {
        header: null
    };
};
 

const styles =StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'center',
        marginBottom:220
    }

});

export default SigninScreen ;