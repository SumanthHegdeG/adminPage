import Home from './pages/Home'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import { useState } from 'react'
import Buttons from './pages/Buttons'
import Cards from './pages/Cards'
import Login from './pages/Login'
import Register from './pages/Register'
import _404 from './pages/_404'
import Blank from './pages/Blank'
import Color from './pages/Color'
import ForgotPassword from './pages/ForgotPassword'
import Borders from './pages/Borders'
import Footer from './components/Footer'
import Animation from './pages/Animation'
import Other from './pages/Other'
import Charts from './pages/Charts'
import Tables from './pages/Tables'

function App() {
  const [showSidebar, toggleSidebar] = useState(true)
  const [login, setLogin] = useState(true)
  const logout = () => {
    setLogin(!login)
  }
  return login ? (
    <div id='wrapper'>
      <BrowserRouter>
        <Sidebar
          showSidebar={showSidebar}
          toggleSidebar={toggleSidebar}
          logout={logout}
        />

        <div id='content-wrapper' className='d-flex flex-column'>
          <div id='content'>
            <Navbar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
            <Routes>
              <Route path='/'>
                <Route index element={<Home />} />
                <Route path='buttons' element={<Buttons />} />
                <Route path='cards' element={<Cards />} />
                <Route path='404' element={<_404 />} />
                <Route path='blank' element={<Blank />} />
                <Route path='color' element={<Color />} />
                <Route path='borders' element={<Borders />} />
                <Route path='animation' element={<Animation />} />
                <Route path='other' element={<Other />} />
                <Route path='charts' element={<Charts />} />
                <Route path='table' element={<Tables />} />
                <Route path='*' element={<Navigate to='/404' />} />
              </Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  ) : (
    <BrowserRouter>
      {document.body.classList.add('bg-gradient-primary')}
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='forgot' element={<ForgotPassword />} />
        <Route path='/' element={<Navigate to='/login' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
