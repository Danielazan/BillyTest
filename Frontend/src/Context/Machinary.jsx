import React,{createContext,useReducer} from 'react'

export const MachianryContext = createContext()


const MachinaryReducer =(state, action)=>{
    switch (action.type){
        case "Display Machines":
        return{
            mechines:action.payload
            }

        case "Create Mechains":
            return{
                mechines:[action.payload, ...state.mechines]
            }
        case "DeLETE":
            return{
                mechines:action.payload
            }
        default:
            return state
    }
}

function MachianryContextProvider ({children}) {
    const [state,dispatchMachine] = useReducer(MachinaryReducer, {mechines:[]})

    return(
        <div>
            <MachianryContext.Provider value={{...state,dispatchMachine}}>
                    {children}
            </MachianryContext.Provider>
        </div>
    )
}

export default MachianryContextProvider