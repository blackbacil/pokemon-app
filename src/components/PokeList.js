import React, {Component} from 'react';
import { CardList } from './cardList/CardList.js';

import { SearchBox } from './searchBox/SearchBox.js';


class PokeList extends Component{
  constructor(){
    super();

    this.state = {
      pokemons: [],
      search:''
    };
  }

  componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
    .then(response => response.json())
    .then(name => this.setState({pokemons:name.results}));
  }

  handleChange=(e) => {
    this.setState({search: e.target.value});
  };

  render(){

    const {pokemons, search } = this.state;
    const fileteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()));

    return(
      <div className="App">
        <SearchBox
          placeholder='Search Pokemon' 
          handleChange= {this.handleChange}
        />
        <CardList pokemons={fileteredPokemons}></CardList>

      </div>
    );
  }
}

export default PokeList;