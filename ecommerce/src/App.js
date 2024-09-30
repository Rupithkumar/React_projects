import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menubar from './Menubar'; 
import Home from './Home'; 
import About from './About'; 
import Dashboard from './Dashboard'; 

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Menubar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} /> 
          <Route path='/dashboard' element={<Dashboard />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
