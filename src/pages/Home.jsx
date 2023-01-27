import React from "react";
import './home.css'
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import NavBar from '../Components/NavBar';
import PokemonCard from '../Components/PokemonCard';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const Home = () =>{
    const [Pokemons, setPokemons] = useState([]);
    useEffect(() => {
        getPokemons();
    }, []);

    const getPokemons = () => {
        var endpoints = [];
        for (var i = 1; i < 50; i++ ){
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        //console.log(endpoints);
        var response = axios.all(endpoints.map((endpoints) => axios.get(endpoints))).then((res) => setPokemons(res));
        return response;

    };
    return(
    <div>
    <NavBar />
      <Container maxWidth="lg">
        
        <Grid container>
            {Pokemons.map((pokemon, key) =>(
          <Grid item xs={1.5} key={key}>
            <PokemonCard name={pokemon.data.name} imagem={pokemon.data.sprites.front_default}/>
          </Grid>
          ))}
        </Grid>
      </Container>
      </div>
    )
}