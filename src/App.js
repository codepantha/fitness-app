import { Box } from '@mui/material'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ExerciseDetails from './pages/ExerciseDetails'
import Home from './pages/Home'

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' }}} m="auto">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="exercises/:id" element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App