import { useState } from "react";
import CardContainer from "./CardContainer";

function Hero({ setScore, score }) {
  const pokemons = [
    { name: "ditto", image: "", isSelected: false },
    { name: "pikachu", image: "", isSelected: false },
    { name: "dragonite", image: "", isSelected: false },
    { name: "bulbasaur", image: "", isSelected: false },
    { name: "togekiss", image: "", isSelected: false },
    { name: "clefairy", image: "", isSelected: false },
    { name: "psyduck", image: "", isSelected: false },
    { name: "mew", image: "", isSelected: false },
    { name: "butterfree", image: "", isSelected: false },
    { name: "charizard", image: "", isSelected: false },
    { name: "dialga", image: "", isSelected: false },
    { name: "blastoise", image: "", isSelected: false },
    { name: "squirtle", image: "", isSelected: false },
    { name: "rayquaza", image: "", isSelected: false },
    { name: "arceus", image: "", isSelected: false },
    { name: "moltres", image: "", isSelected: false },
    { name: "mewtwo", image: "", isSelected: false },
    { name: "steelix", image: "", isSelected: false },
    { name: "palkia", image: "", isSelected: false },
    { name: "greninja", image: "", isSelected: false },
  ];

  const [pokemonData, setPokemonData] = useState(pokemons);
  return (
    <section className="bg-[url('src/assets/background.jpg')] bg-no-repeat bg-cover bg-center min-h-screen">
      <CardContainer
        pokemonData={pokemonData}
        score={score}
        setScore={setScore}
        setPokemonData={setPokemonData}
      />
    </section>
  );
}

export default Hero;
