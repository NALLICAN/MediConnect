import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Doctors from './pages/doctors';
import Login from './pages/login';
import About from './pages/about';
import Contact from './pages/contact';
import MyProfile from './pages/MyProfile';
import MyAppointments from './pages/MyAppointments';
import Appointment from './pages/Appointment';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/MyProfile' element={<MyProfile />} />
        <Route path='/MyAppointments' element={<MyAppointments />} />
        <Route path='/Appointment/:docID' element={<Appointment />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;