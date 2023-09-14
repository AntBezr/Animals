import './App.css';
import Header from './components/Header';
import Animals from './pages/Animals.js';
import Birds from './pages/Birds.js';
import About from './pages/About.js';
import Landing from './pages/Landing.js';
import Footer from './components/Footer';
import React from 'react';
import { animals, birds } from './animalsList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


 class App extends React.Component{
  state = {
    animals: animals,
    birds: birds,
    searchInput: '',
    data:[]
  }

  componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=15&offset=0').then(res=>res.json()).then(res=>this.setState({data:res.results}))
  }

  closeHandler = (list,name) => {
  
    const updatedArray = this.state[list].filter(item => item.name!==name);
    this.setState({
      [list]: updatedArray
    })
 }

  likeHandler=(list,name,action)=>{
      this.setState((prevState =>{
      const updatedArray = prevState[list].map((item)=>{
        if(item.name === name ){
          if(action==='add'){
            return{...item, likes:item.likes + 1}
          }else{
            return{...item, likes:item.likes - 1}
          }
        }else{ 
          return item
        }
      })
      return{
        [list]:updatedArray
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
        <Header 
        animals={this.state.animals} 
        birds={this.state.birds} />
        
        <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/animals' element={<Animals 
          title = 'animals'
            animals={this.state.animals} 
            closeHandler={this.closeHandler} 
            likeHandler={this.likeHandler}
            searchInput={this.state.searchInput}
            searchHandler ={this.searchHandler} />}/>

          <Route path='/birds' element={<Birds
          title = "birds"
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

