import React, { useEffect, useState } from 'react'

const PokemonList = () => {

    const [pokemons, setPokemons] = useState();
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=5");
    
    
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => res.json())
            .then(data => setPokemons(data)) 
        }, 500);
    }, [url])
    console.log(pokemons);

    const mostrarAnterior = () => {
        pokemons.previous && setUrl(pokemons.previous);
    }; 

       
    
    const mostrarSiguiente = () => {
        setUrl(pokemons.next);
    };



    const cambiarLimite = (e) => {
        setUrl("https://pokeapi.co/api/v2/pokemon?limit=" + e.target.value);
    }

    

  return (
    <div>{
        
        pokemons ? 
        <div>
        {pokemons.results.map(pokemon => {
            return <p>{pokemon.name}</p> 
        })}
        <button onClick={mostrarAnterior}>Anterior</button>
        <button onClick={mostrarSiguiente}>Siguiente</button>
        <input type="number" onChange={cambiarLimite} />
        </div>
        : "Cargando....."}
        
        </div>
    )
}

export default PokemonList




