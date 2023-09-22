import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Pages/Hero Page/Hero'
import SignUp from 'Pages/SignUp Page/SignUp';
import About from 'Pages/About Page/About';
import Sidebar from 'components/sidebar';
import Admin from 'Pages/Admin Page/Admin';
import Equi from 'Pages/Equiment Page/Equi';
import EquiDes from 'Pages/Equiment Page/EquiDes';


const App = () => {
  return (
    <div className="w-full h-fit">
      <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Admin' element={<Admin/>}/>
        <Route path='/Equi' element={<Equi/>}/>
        <Route path='/Des' element={<EquiDes/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
