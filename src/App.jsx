import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar'
import Teams from './Pages/Teams'
import Patners from './Pages/Patners'



function App() {
  useEffect(() => {
    AOS.init()
  },[])
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<h1 className="flex flex-col flex-1 h-screen">This is Home Page go to Team page</h1>}/>
          <Route path='/course' element={<h1 className="flex flex-col flex-1 h-screen">This is Course Page go to Team page</h1>}/>
          <Route path='/selection' element={<h1 className="flex flex-col flex-1 h-screen">This is Selection Page go to Team page</h1>}/>
          <Route path='/blog' element={<h1 className="flex flex-col flex-1 h-screen">This is blog Page go to Team page</h1>}/>
          <Route path='/material' element={<h1 className="flex flex-col flex-1 h-screen">This is material Page go to Team page</h1>}/>
          <Route path='/contact' element={<h1 className="flex flex-col flex-1 h-screen">This is contact Page go to Team page</h1>}/>
          <Route path='/teams' element={<Teams />} />
          <Route path='/teams/patners' element={<Patners/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
