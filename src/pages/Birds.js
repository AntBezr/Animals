import React from 'react';
import Card from '../UI/Card';
import "./Birds.css"

const Birds = (props) => {
  const searchFilter = props.birds.filter(bird =>{return bird.name.includes(props.searchInput)})

  const BirdsCards = searchFilter.map((bird =>{
    return <Card
    key={bird.name}
    name={bird.name}
    counter={bird.likes}
    closeCard={()=>props.closeHandler(props.title,bird.name)}
    addLikes={()=>props.likeHandler(props.title,bird.name,'add')}
    removeLikes={()=>props.likeHandler(props.title,bird.name,'remove')}/>
  }))

  return (
    <div className='allCards'>
      <h2>{props.title} ({props.birds.length})</h2>
      
       <div className="input">
         <p>Type bird name</p>
       </div>
{BirdsCards}
    </div>
  );
};

export default Birds;