import React,{createContext,useReducer} from 'react';
import AppReducer from './AppReducer';

//initial stat
const initalState={
    users: [
        {id: 1,name: 'zouhir achbal'},
        {id: 2,name: 'green green'},
        {id: 3,name: 'yobeen yobeen'},
        {id: 4,name: 'test green'}
        
    ]
};
//create context

export const GlobalContext =createContext(initalState);

export const GlobalProvider = ({Children})=>{
    const [state, dispatch]=useReducer(AppReducer,initalState);

    const removeUser=(id)=>{
        dispatch({
            type: 'REMOVE_USER',
            payload: id
        })
    }
    const addUser=(user)=>{
        dispatch({
            type: 'ADD_USER',
            payload:  user
        })
    }
    return(
        <GlobalContext.Provider value={{
            users: state.users ,
            removeUser,
            addUser
      }}>
            {Children}
        </GlobalContext.Provider>
    )

}
