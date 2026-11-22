import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Signin from './pages/Signin'
import RamayanaDetails from './pages/RamayanaDetails'
import DoomsdayDetails from './pages/DoomsdayDetails'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Signin' element={<Signin />}/>
      <Route path="/RamayanaDetails" element={<RamayanaDetails />} />
      <Route path='/DoomsdayDetails' element={<DoomsdayDetails />}/>

    </Routes>
    
      
    </>
  )
}

export default App
