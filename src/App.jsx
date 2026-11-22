import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Signin from './pages/Signin'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Signin' element={<Signin />}/>

    </Routes>
    
      
    </>
  )
}

export default App
