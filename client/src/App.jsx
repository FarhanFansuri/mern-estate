import React from 'react'
import {Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header'

export default function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}
