import './App.css';
import Header from './Header';
import Animals from './Animals.js';
import Birds from './Birds.js';
import About from './About.js';
import Footer from './Footer';
import React from 'react';
import { animals } from './animalsList';
import { birds } from './animalsList';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';


 class App extends React.Component{
  state = {
    animals: animals,
    birds: birds,
    searchInput: ''
  }

  closeHandler = (arr,name) => {
    if ( arr === "animals"){
    const updatedArray = this.state.animals.filter(animal => animal.name!==name);
    this.setState({
      animals: updatedArray
    })
  }else{
    const updatedArray = this.state.birds.filter(bird => bird.name!==name);
    this.setState({
      birds: updatedArray
  })
}
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
    <BrowserRouter>
      <div>
        <Header searchHandler ={this.searchHandler} />
        <Link to='/animals'><img src="https://source.unsplash.com/500x400/?frog"/></Link>
        <Link to="/birds"><img src="https://source.unsplash.com/500x400/?birds"/></Link>
        <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/animals' element={<Animals 
            animals={this.state.animals} 
            closeHandler={this.closeHandler} 
            likeHandler={this.likeHandler}
            searchInput={this.state.searchInput}/>}/>

          <Route path='/birds' element={<Birds
            birds={this.state.birds}
            closeHandler={this.closeHandler} 
            likeHandler={this.likeHandler}
            searchInput={this.state.searchInput}/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
    )
  }
}

export default App;

