import React, {useState} from 'react'
import DisplayPokemon from './DisplayPokemon'
import axios from "axios"

const PokemonForm = () => {

    const [pokemonList, setPokemonList] = useState()

    const fetchPokemonThen = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
            .then(response => response.json())
            .then(jsonResponse => {
                setPokemonList(jsonResponse.results)
            })
            .catch(err => console.log(err))
    }

    const fetchPokemonAwait = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        const jsonResponse = await response.json()
        setPokemonList(jsonResponse.results)
    }

    const fetchPokemonAxios = () => {
        // .get: read, .post: create, .put: update, .delete: delete
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
            .then(response => {
                setPokemonList(response.data.results)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Fetch Pokemon List</h1>
            <button onClick={fetchPokemonThen}> Fetch Pokemon list with .then</button>
            <button onClick={fetchPokemonAwait}> Fetch Pokemon list with await</button>
            <button onClick={fetchPokemonAxios}> Fetch Pokemon list with axios</button>
            {
                pokemonList ?
                    <DisplayPokemon pokemonList={pokemonList} /> :
                    <h1> Fetch the Pokemon list!</h1>
            }
        </div>

    )
}

export default PokemonForm