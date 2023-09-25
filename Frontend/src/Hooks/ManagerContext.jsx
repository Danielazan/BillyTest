import React,{useContext} from 'react'
import { ManagerContext } from 'Context/Manager'

function ManagerHook() {
    const context = useContext(ManagerContext)

   
        if(!context){
            throw Error("UserContext must be in UserContext Provider")
        }

  return (
    context
  )
}

export default ManagerHook