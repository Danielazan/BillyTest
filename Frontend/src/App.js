import {useState,useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Hero from './Pages/Hero Page/Hero'
import SignUp from 'Pages/SignUp Page/SignUp';
import About from 'Pages/About Page/About';
import Sidebar from 'components/sidebar';
import Admin from 'Pages/Admin Page/Admin';
import Equi from 'Pages/Equiment Page/Equi';
import EquiDes from 'Pages/Equiment Page/EquiDes';
import ManagerHook from "Hooks/ManagerContext"


const App = () => {
  const {User}=ManagerHook()

  const [admin, setAdmin] = useState()

  // useEffect(() => {
  //   const token = localStorage.getItem(User);
  //   if (token) {
  //     try {
  //     const token = localStorage.getItem('token');
  //     const response = axios.get('/api/data', {
  //       headers: { Authorization: `Bearer ${token}` }
  //     });
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   }
  // }, [])

  return (
    <div className="w-full h-fit">
      <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path='/signup' element={<SignUp/>}/>
        {/* <Route
            path='/Login'
            element={!User ? <Login /> : <Navigate to='/' />}
          /> */}
        <Route path='/About' element={<About/>}/>
        <Route path='/Admin' element={User ? <Admin /> : <Navigate to='/signup' />}/>
        <Route path='/Equi' element={<Equi/>}/>
        <Route path='/Des/:id' element={<EquiDes/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
