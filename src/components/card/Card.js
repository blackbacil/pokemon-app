import React from 'react';
import './Card.styles.css';
import { Link } from 'react-router-dom';


export const Card = props =>(
    <div className="card-continer">
        <Link to={`/Pokemon/${props.pokemon.name}`}>
            <img alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${props.pokemon.name}.jpg`}/>
            <h2>{props.pokemon.name[0].toUpperCase()+props.pokemon.name.slice(1)}</h2>
        </Link>
    </div>
);