// this boilerplate is for data handling when we sign up then to store data using axios

import React,{useReducer} from 'react';

export default (reducer,actions,defaultVlaue) => {
       const Context = React.createContext();

       const Provider=({children})=>{
         const [state,dispatch] = useReducer(reducer,defaultVlaue);

         const boundActions = {};
         for ( let key in actions) {
             boundActions[key]= actions[key](dispatch);
         }
         return (
             <Context.Provider  value={{state,...boundActions}}> 
               {children}
             </Context.Provider>
         );
       };
       return {Context , Provider};
};