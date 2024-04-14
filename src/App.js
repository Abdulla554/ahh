import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Watched from './components/Watched'
import Watchlist from './components/Watchlist'
import Add from './components/Add'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalProvider from './GlobalProvider'
const App = () => {
  return (
     <GlobalProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/Watchlist' element={<Watchlist />} />
          <Route path='/watched' element={<Watched />} />
          <Route path='/add' element={<Add />} />
        </Routes>
      </Router>
     </GlobalProvider>  
  )
}

export default App