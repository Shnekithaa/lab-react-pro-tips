import React from 'react';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Registration from './Pages/Registration';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/contact' element = {<Contact />} />
        <Route path='/registration' element = {<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
