import React from 'react'
import { Route, Routes } from 'react-router';
import Routlayout from './pages/Routlayout';

import About from './pages/About';
import Notfound from './pages/Notfound';
import Homepage from './pages/Homepage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {


  return (

    <>





      <Routes>

        <Route path='/' element={<Routlayout />}>
          <Route index element={<Homepage />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<Notfound />} />





        </Route>
      </Routes>

      <ToastContainer position='top-right' autoClose='1000' />









    </>
  )
}


export default App