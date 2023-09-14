import React from 'react';
import './About.css'

const About = () => {
  return (
    <div className='about'>
      <p>This is the Animals cards project created for studying in BC Helsinki Full stack web developer program. The goal of the project is to create a SPA (single page application) with React. </p>
      
      <p>When you open web page you get to the lending page where you have menu in header and two big pictures which are the links to the Birds cards and Animals cards. </p>

<p>The animals list is taken from JS file called animalsList.js. This file consists of two arrays of objects. Each object has its own name and counter for likes. </p>

<p>All cards created automatically with card component. Each card has close button, image that taken from unsplash.com, like and dislike buttons. </p>      
    </div>
  );
};

export default About;