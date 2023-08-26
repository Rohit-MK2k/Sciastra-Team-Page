import { useState } from 'react'
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Teams from './Pages/Teams'


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<h1 className="flex items-center h-full">This is Home Page go to Team page</h1>}/>
          <Route path='/course' element={<h1>This is Course Page go to Team page</h1>}/>
          <Route path='/selection' element={<h1>This is Selection Page go to Team page</h1>}/>
          <Route path='/blog' element={<h1>This is blog Page go to Team page</h1>}/>
          <Route path='/material' element={<h1>This is material Page go to Team page</h1>}/>
          <Route path='/contact' element={<h1>This is contact Page go to Team page</h1>}/>
          <Route path='/teams' element={<Teams/> } />
        </Routes>
      </Router>
    </>
  )
}

export default App
