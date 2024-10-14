import React, { useContext } from 'react';
import { MyContext } from './App';
import Product from './Product';

export const Home = () => {
  const username = useContext(MyContext); // Fetching username from context

  return (
    <div>
      <h1>Home Page {username}</h1>
      <Product uname={username} />
    </div>
  );
};

export default Home;
