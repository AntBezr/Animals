import React from 'react';
import './Landing.css'
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className='landing'>
      <div className='pics'>
        <div className='picture'><Link to='/animals'><img src="https://images.pexels.com/photos/35669/hyla-meridionalis-the-frog-amphibians.jpg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2"></img><h2 className='textOver'>Animals</h2></Link>
        </div>
     <div className='picture'><Link to="/birds"><img src="https://wallpapercrafter.com/th8003/1000670-Starling-focus-photo-black-bird-stick-European.jpg"/><h2 className='textOver'>Birds</h2></Link></div>
        
        </div>
    </div>
  );
};

export default Landing;