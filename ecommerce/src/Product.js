import React, { useContext } from 'react';
import { MyContext } from './App';

export const Product = ({ uname }) => {
  const username = useContext(MyContext); 

  return (
    <div>
      <h2>I am Product component and prompt is {username}</h2>
    </div>
  );
};

export default Product;
