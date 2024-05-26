

import React from 'react'
import Main from './Components/Main'
import Marvel from './Components/Marvel'
import './Components/style.css'
import { Route,Routes } from 'react-router-dom'
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/:id' element={<Marvel/>}/>
    </Routes>
    </>
  )
}

export default App