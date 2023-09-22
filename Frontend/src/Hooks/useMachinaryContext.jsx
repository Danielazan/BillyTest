import React,{useContext} from 'react'

import {MachianryContext} from "Context/Machinary"

const MachinaryContext = () => {
    const context = useContext(MachianryContext)

    if (!context){
        throw Error ("Machine Provider must be Provided")
    }
  return (
    context
  )
}

export default MachinaryContext  