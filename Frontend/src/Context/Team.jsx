import React,{createContext,useReducer} from 'react'

export const TeamContext = createContext()


const TeamReducer =(state, action)=>{
    switch (action.type){
        case "Display Team":
        return{
            Team:action.payload
            }

        case "Create Team":
            return{
                Team:[action.payload, ...state.Team]
            }
        case "DeLETE Team":
            return{
                Team: state.Team.filter((N)=> N._id !==action.payload._id)
            }
        default:
            return state
    }
}

function TeamContextProvider ({children}) {
    const [state,dispatchTeam] = useReducer(TeamReducer, {Team:[]})

    return(
        <div>
            <TeamContext.Provider value={{...state,dispatchTeam}}>
                    {children}
            </TeamContext.Provider>
        </div>
    )
}

export default TeamContextProvider