import React from 'react'
// import classNames from "classnames";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Col} from 'react-bootstrap';
import "./styles/MainHero.css"
import Machine from "asstes/machine.jpg"



export const MainHero = () => {
    
    
  return (
    
    <>
        <Container fluid >
            <div>
                <img className="w-full max-w-full h-auto sm:w-6/2 md:w-full" src={Machine} alt="Image description"/>
                  
                
            </div>
        </Container>
    </>
  )
}
