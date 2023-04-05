import * as React from 'react';
import Card from './Card';
import './Animals.css'



const Animals = (props) => {
  const searchFilter = props.animals.filter(animal =>{
    return animal.name.includes(props.searchInput)
  })

  const AnimalsCards = props.animals.map((animal =>{
    
      return <Card 
      key={animal.name}
      name = {animal.name}
      counter = {animal.likes}
      closeCard={()=>props.closeHandler(animal.name)}
      addLikes={()=>props.likeHandler(animal.name,'add')}
      removeLikes={()=>props.likeHandler(animal.name,'remove')}/>;} ))
  return(
    <div className='allCards'>
    {AnimalsCards} 
  </div>
  );
}
export default Animals

