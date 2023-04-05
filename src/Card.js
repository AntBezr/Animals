
import * as React from 'react';
import './Card.css'

const Card = (props) =>{
    return (
      <div className='card'>
        <button onClick={props.closeCard} className='close'>x</button>
        <img src={`https://source.unsplash.com/500x400/?${props.name}`} alt={props.name}/>
        <h2 className='Title'>{props.name}</h2>
        <div className='likes'>
          <button onClick={props.removeLikes}>👎</button>
          {props.counter>=0 ? 
          <h3 className='counter'>❤️ {props.counter}</h3>
          :<h3 className='counter'>❤️‍🩹{props.counter}</h3>}          
          <button onClick={props.addLikes}>👍</button>
        </div>
      </div>
    );
  };

  

  export default  Card