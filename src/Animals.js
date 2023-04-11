import * as React from 'react';
import Card from './Card';
import './Animals.css'



const Animals = (props) => {
  const searchFilter = props.animals.filter(animal =>{
    return animal.name.includes(props.searchInput)
  })

  const AnimalsCards = searchFilter.map((animal =>{
      return <Card 
      key={animal.name}
      name = {animal.name}
      counter = {animal.likes}
      closeCard={()=>props.closeHandler('animals',animal.name)}
      addLikes={()=>props.likeHandler('animals',animal.name,'add')}
      removeLikes={()=>props.likeHandler('animals',animal.name,'remove')}/>;} ))


  return(
    <div className='allCards'>
      <h4>Animals {props.animals.length}</h4>
    {AnimalsCards} 
  </div>
  );
}
export default Animals

