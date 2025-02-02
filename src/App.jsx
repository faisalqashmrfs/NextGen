// import React from 'react'
import './App.css'
import './index.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import BlogsOpenPage from './pages/BlogsOpenPage'
import BlogsPage from './pages/BlogsPage'
import CareersPage from './pages/CareersPage'
import ProjectsPage from './pages/ProjectsPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import Transition from './Transition'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion';
function App() {
  const location = useLocation();
  return (
    <>

      <Routes location={location} key={location.key}>
        <Route path='/' element={<Transition><HomePage /></Transition> } />
        <Route path='/AboutPage' element={<Transition><AboutPage /></Transition> } />
        <Route path='/BlogsOpenPage' element={<Transition><BlogsOpenPage /></Transition>} />
        <Route path='/BlogsPage' element={<Transition><BlogsPage /></Transition>} />
        <Route path='/CareersPage' element={<Transition><CareersPage /></Transition>} />
        <Route path='/ProjectsPage' element={<Transition><ProjectsPage /></Transition>} />
        <Route path='/ServicesPage' element={<Transition><ServicesPage /></Transition>} />
        <Route path='/ContactPage' element={<Transition><ContactPage /></Transition>} />
      </Routes>

    </>
  )
}

export default App;
