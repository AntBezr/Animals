import './App.css';
import Header from './Header';
import Animals from './Animals.js';
import Footer from './Footer';
import React from 'react';
import { animals } from './animalsList';


 class App extends React.Component{
  state = {
    animals: animals,
    searchInput: ''
  }


  closeHandler = (name) => {
    const updatedArray = this.state.animals.filter(animal => animal.name!==name);
    this.setState({
      animals: updatedArray
    })
 }

  likeHandler=(name,action)=>{
    this.setState((prevState =>{
      const updatedArray = prevState.animals.map((animal)=>{
        if(animal.name === name ){
          if(action==='add'){
            return{...animal, likes:animal.likes + 1}
          }else{
            return{...animal, likes:animal.likes - 1}
          }
        }else{ 
          return animal
        }
      })
      return{
        animals:updatedArray
      }
    }))

  } 
  searchHandler=(e)=>{
this.setState({
searchInput: e.target.value
})

  }

  render() {
    return (
      <div>
      <Header searchHandler ={this.searchHandler} />
      <Animals 
      animals={this.state.animals} 
      closeHandler={this.closeHandler} 
      likeHandler={this.likeHandler}
      
      searchInput={this.state.searchInput}
      />
      <Footer/>

         </div>
    )
  }
}

export default App;
