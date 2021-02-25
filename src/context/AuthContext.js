//import {AsyncStorage} from "@react-native-async-storage/async-storage";
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import {navigate} from '../navigationRef';

const authReducer = (state,action) => {
     switch(action.type){
         case 'add-error':
           return {...state, errorMessage: action.payload };
         case 'signin':  // common for sign in and signup
            return {errorMessage : '', token : action.payload};
         case 'clear_error_message':
            return {...state, errorMessage: ''};
         default:
             return state;
     }
};

// when we move from signin to signup error msg is still there,for this below code is used
const clearErrorMessage = dispatch => () =>{
  dispatch({type:'clear_error_message'});
}; 

const signup =dispatch =>  async ({email,password}) =>{
// make an api request to signup with that email and password  // if we are signedup, modifr our state, that we are authenticated
//if signing up fails need to reflect some err msg somwhere
try{
    const response = await trackerApi.post('/signup',{email,password});
    dispatch({type:'signin',payload:response.data.token});
     console.log(response.data);
    navigate('TrackList');  // for the mainflow
   
}catch(err){
     dispatch({ 
         type:'add-error',
         payload:'something went wrong with signup'
        }); 
}
    
 };

const signin =(dispatch) => async ({email,password}) => {
 //  Try to sign in // handle success by updating state // handle failure by showing err msg 
   try{
    const response = await trackerApi.post('/signin',{email,password});
    dispatch({type:'signin',payload:response.data.token});
    console.log(response.data);
    navigate('TrackList');
   } catch(err){
       dispatch({
        type:'add-error',
        payload:'something went wrong with signin'
       });
     }
};


const signout = (dispatch) =>{
    return() => {
        // somehow signout
    };
};


export const {Context, Provider} = createDataContext(
   authReducer,
   {signup,signin,signout,clearErrorMessage},
   {token:null,errorMessage:''}
);