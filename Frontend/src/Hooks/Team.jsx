import React,{useContext} from 'react'

import {TeamContext} from "Context/Team"

const TeamsContext = () => {
    const context = useContext(TeamContext)

    if (!context){
        throw Error ("Machine Provider must be Provided")
    }
  return (
    context
  )
}

export default TeamsContext  