import React from 'react'
import './App.css'
import Categories from './components/categories/Categories'
import Navbar from './components/navigation/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/categories' element={<Categories />} />
          {/* <Filters /> */}
          <Route path='/products' element={<Products />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
