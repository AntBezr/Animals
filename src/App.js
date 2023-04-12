import './App.css';
import Header from './components/Header';
import Animals from './pages/Animals.js';
import Birds from './pages/Birds.js';
import About from './pages/About.js';
import Landing from './pages/Landing.js';
import Footer from './components/Footer';
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
  }else if(arr ==="birds"){
    const updatedArray = this.state.birds.filter(bird => bird.name!==name);
    this.setState({
      birds: updatedArray
  })
}
 }

  likeHandler=(arr,name,action)=>{
    if(arr === "animals"){this.setState((prevState =>{
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
  }else if(arr === "birds"){
    this.setState((prevState =>{
      const updatedArray = prevState.birds.map((bird)=>{
        if(bird.name === name ){
          if(action==='add'){
            return{...bird, likes:bird.likes + 1}
          }else{
            return{...bird, likes:bird.likes - 1}
          }
        }else{ 
          return bird
        }
      })
      return{
        birds:updatedArray
      }
    }))
  }
    
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
        <Header animals={this.state.animals} 
        birds={this.state.birds} />
        
        <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/animals' element={<Animals 
            animals={this.state.animals} 
            closeHandler={this.closeHandler} 
            likeHandler={this.likeHandler}
            searchInput={this.state.searchInput}
            searchHandler ={this.searchHandler} />}/>

          <Route path='/birds' element={<Birds
            birds={this.state.birds}
            closeHandler={this.closeHandler} 
            likeHandler={this.likeHandler}
            searchInput={this.state.searchInput}
            searchHandler ={this.searchHandler} />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/landing" element={<Landing/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
    )
  }
}

export default App;

