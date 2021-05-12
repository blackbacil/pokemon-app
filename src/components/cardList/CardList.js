import React from 'react';

import { Card } from '../card/Card.js';
import './CardList.styles.css';



export const CardList = props => (
    <div className='card-list'>
        {props.pokemons.map(pokemon =>(
        <Card key={pokemon.name} pokemon={pokemon}></Card>
        ))}
    </div>
);