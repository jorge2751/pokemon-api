import React from 'react'

const DisplayPokemon = (props) => {

    const {pokemonList} = props
    return (
        <div style={{display:'flex', justifyContent:'center'}}>
            <ul style={{width:'200px'}} >
                {pokemonList.map((eachPokemon, idx) => {
                    return (
                        <li key={idx}>{eachPokemon.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default DisplayPokemon