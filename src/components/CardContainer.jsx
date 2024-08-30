import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

function Card({ pokemon, pokemonData, setPokemonData, score, setScore }) {
  const generateRandomPokemons = (limit, pokemons) => {
    const indexes = [];
    const updatedPokemons = [];
    while (indexes.length !== limit) {
      let index = Math.floor(Math.random() * limit);
      if (indexes.includes(index) === false) {
        indexes.push(index);
      }
    }
    indexes.forEach((index) => updatedPokemons.push(pokemons[index]));
    return updatedPokemons;
  };

  const handleClick = (pokemon) => {
    if (pokemon.isSelected === true) {
      score = 0;
      setScore(score);
      pokemonData.forEach((pokemon) => {
        pokemon.isSelected = false;
      });
      setPokemonData(pokemonData);
      return;
    }
    pokemon.isSelected = true;
    const updatedPokemon = pokemon;
    pokemonData.forEach((pokemon) => {
      pokemon.name === updatedPokemon.name ? updatedPokemon : pokemon;
    });
    const updatedPokemonData = generateRandomPokemons(
      pokemonData.length,
      pokemonData
    );
    setPokemonData(updatedPokemonData);
    setScore(score + 1);
    console.log(score);
  };
  return (
    <div
      className="  transform p-2 shadow-lg backdrop-blur-lg border-white border-2 flex flex-col rounded-2xl justify-center items-center transition duration-100 hover:scale-105 hover:cursor-pointer md:w-15 md:h-full"
      onClick={() => handleClick(pokemon)}
    >
      <img
        src={pokemon.image}
        className="lg:w-full md:w-auto"
        alt={pokemon.name}
      />
      <p>{pokemon.name}</p>
    </div>
  );
}

function CardContainer({
  pokemonData,
  setPokemonData,
  setCurrentPokemon,
  score,
  setScore,
}) {
  const url = "https://pokeapi.co/api/v2/pokemon/";
  async function getData(pokemon) {
    const response = await fetch(url + pokemon.name);
    const pokemonData = await response.json();
    pokemon.image = pokemonData.sprites.front_default;
  }

  useEffect(() => {
    pokemonData.forEach((pokemon) => {
      getData(pokemon);
    });
  }, [pokemonData]);

  return (
    <section className="p-2 grid grid-rows-4 grid-cols-5 gap-12">
      {pokemonData.map((pokemon) => {
        return (
          <Card
            pokemon={pokemon}
            score={score}
            setScore={setScore}
            key={uuidv4()}
            setPokemonData={setPokemonData}
            pokemonData={pokemonData}
            setCurrentPokemon={setCurrentPokemon}
          />
        );
      })}
    </section>
  );
}

export default CardContainer;
