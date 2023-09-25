import React,{createContext,useReducer} from 'react'

export const ManagerContext= createContext()

    export const reducer=(state,action)=>{
        switch(action.type){
            case "Login":
                return {User:action.payload}

            case "Logout":
                return{
                    User:null
                }

            default:
                return state
        }
    }
function ManagerContextProvider({children}) {

    const [state,dispatchU]=useReducer(reducer,{User:null})

  return (
    <ManagerContext.Provider value={{...state,dispatchU}}>
            {children}
    </ManagerContext.Provider>
  )
}

export default ManagerContextProvider