import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Application from './Pages/Application'
import Page404 from './Pages/404'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/app' element={<Application />} />

        <Route path='*' element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App