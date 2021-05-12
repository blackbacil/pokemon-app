import React from 'react'
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
import MainCard from '../components/mainCard/MainCard';
import  PokeList  from '../components/PokeList';

import  Navbar  from '../components/ui/Navbar';
  

export const AppRouter = () => {
    
    return (
        <Router>
            <div>
                <Navbar />


                    <Route exact path="/" component={ PokeList }/>
                    <Route exact path="/Pokemon/:name" component={ MainCard }/>


            </div>
        </Router>
    )
}
