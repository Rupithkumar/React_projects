import React, { useState, createContext } from 'react';
import Home from './Home';
import Product from './Product';

export const MyContext = createContext();

export const App = () => {
  const [username] = useState('Raj'); 

  return (
    <div>
      <MyContext.Provider value={username}> 
        <Home />
        <Product />
      </MyContext.Provider>
    </div>
  );
};

export default App;
