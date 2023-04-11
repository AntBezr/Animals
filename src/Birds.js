import React from 'react';
import Card from './Card';
import "./Birds.css"

const Birds = (props) => {
  const searchFilter = props.birds.filter(bird =>{return bird.name.includes(props.searchInput)})

  const BirdsCards = searchFilter.map((bird =>{
    return <Card
    key={bird.name}
    name={bird.name}
    counter={bird.likes}
    closeCard={()=>props.closeHandler(bird.name)}
    addLikes={()=>props.likeHandler(bird.name,'add')}
    removeLikes={()=>props.likeHandler(bird.name,'remove')}/>
  }))

  return (
    <div className='allCards'>
      <h4>Birds {props.birds.length}</h4>
{BirdsCards}
    </div>
  );
};

export default Birds;