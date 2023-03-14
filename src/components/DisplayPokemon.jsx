import React from 'react'

const DisplayPokemon = (props) => {
    const {pokemonList} = props
    return (
        <ul>
            {pokemonList.map((eachPokemon, idx) => {
                return (
                    <li key={idx}>{eachPokemon.name}</li>
                )
            })}
        </ul>
    )
}

export default DisplayPokemon