<script>
  export let pokemon;
  import generatePokemonNumber from "../scripts/generatePokedexNumberString";
  import Type from "./Type.svelte";
</script>

<main>
  <p>{generatePokemonNumber(pokemon.number)} {pokemon.name}</p>
  <p>Category: {pokemon.category}</p>
  {#each pokemon.type as type}
    <Type {type} />
  {/each}
  <p>{pokemon.height} m</p>
  <p>{pokemon.weight} kg</p>
  <p>Ability: {pokemon.ability}</p>
</main>

<style>
  main {
    margin: auto;
    max-width: 1090px;
    background-color: #a6a6bf;
    font-family: monospace;
    font-size: 16px;
  }
</style>
