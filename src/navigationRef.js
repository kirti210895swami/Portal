 // navigate fun. for everyone else to use 
 import {NavigationActions} from 'react-navigation';

// clever function to get access to navigator
 let navigator;
  
 export const setNavigator = (nav) => {
    navigator = nav;
};

export const navigate = (routeName,params) => {
   navigator.dispatch(
       NavigationActions.navigate({
          routeName,
          params
       })
   );
};