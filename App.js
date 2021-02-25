import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';


import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import ResumeUploadScreen from './src/screens/ResumeUploadScreen';
import {Provider as AuthProvider}  from './src/context/AuthContext';
import {setNavigator} from './src/navigationRef';

const switchNavigator = createSwitchNavigator({
      loginFlow : createStackNavigator({
      
        Signup: SignupScreen,
        Signin:SigninScreen,
        resume:ResumeUploadScreen
      }),
    });

const App = createAppContainer(switchNavigator);

export default () => {
   return(
     <AuthProvider>
       <App ref={(navigator) => {setNavigator(navigator)}} />
     </AuthProvider>
   );
};