import React from 'react';
import Card from '../UI/Card';
import Search from '../UI/Search';
import "./Birds.css"

const Birds = (props) => {
  const searchFilter = props.birds.filter(bird =>{return bird.name.includes(props.searchInput)})

  const BirdsCards = searchFilter.map((bird =>{
    return <Card
    key={bird.name}
    name={bird.name}
    counter={bird.likes}
    closeCard={()=>props.closeHandler("birds",bird.name)}
    addLikes={()=>props.likeHandler("birds",bird.name,'add')}
    removeLikes={()=>props.likeHandler("birds",bird.name,'remove')}/>
  }))

  return (
    <div className='allCards'>
      
       <div className="input">
         <p>Type bird name</p>
        <Search/>
       </div>
{BirdsCards}
    </div>
  );
};

export default Birds;