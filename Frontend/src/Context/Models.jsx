import React,{createContext,useReducer} from 'react'

export const ModelsContext = createContext()


const ModelsReducer =(state, action)=>{
    switch (action.type){
        case "Display Models":
        return{
            models:action.payload
            }

        case "Create Models":
            return{
                models:[action.payload, ...state.models]
            }
        case "DeLETE Models":
            return{
                models: state.models.filter((N)=> N._id !==action.payload._id)
            }
        default:
            return state
    }
}

function ModelsContextProvider ({children}) {
    const [state,dispatchModels] = useReducer(ModelsReducer, {models:[]})

    return(
        <div>
            <ModelsContext.Provider value={{...state,dispatchModels}}>
                    {children}
            </ModelsContext.Provider>
        </div>
    )
}

export default ModelsContextProvider