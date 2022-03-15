import React from 'react';
// import './App.css';
import { GlobalStyle } from './global.styles';
import CardList from './components/card-list/card-list.component';
import Search from './components/search/search.component';

class App extends React.Component{
  constructor(){
  super();

  this.state={
    people:[],
    searchPerson:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(person=>this.setState({people:person}))
  }

  render(){
    const {people, searchPerson} = this.state;
    const filterPerson = people.filter(person=>person.name.toLowerCase().includes(searchPerson.toLocaleLowerCase()))
    return(
      
     
     <div>
       <GlobalStyle />
          <div className='App'>   
            <h1>Person Search</h1>
            <Search
            placeholder="search person"
            onChange= {e=>this.setState({searchPerson:e.target.value})}
            />
                
            <CardList people={filterPerson}/>   
              
          </div>
     </div>
    )
  }
}

export default App;

