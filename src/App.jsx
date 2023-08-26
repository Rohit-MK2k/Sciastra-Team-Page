import { useState } from 'react'
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Teams from './components/Teams'


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/teams' element={<Teams/> } />
        </Routes>
      </Router>
    </>
  )
}

export default App
