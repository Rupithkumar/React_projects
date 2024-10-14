import React from 'react';
import {userParams} from 'react-router-dom'
const About = () => { 
  const{pname}=useParams();
  return (
    <div>
      <h1>About Page {pname}</h1>
    </div>
  );
};

export default About; 
