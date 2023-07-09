<script>
  import { createEventDispatcher } from "svelte";
  export let pokemon;
  export let selectedPokemonNumber;

  const dispatch = createEventDispatcher();

  function selectPokemon() {
    dispatch("click", {
      pokemonNumber: pokemon.number,
    });
  }
</script>

<button
  class="nav-tile {pokemon.number === selectedPokemonNumber ? 'active' : ''}"
  on:click={selectPokemon}
>
  <img src="src\assets\sprites\{pokemon.number}.png" alt={pokemon.name} />
  <p>{pokemon.name}</p>
</button>

<style>
  .nav-tile {
    background-color: #c1c1d2;
    border: none;
    width: 100px;
    height: 100px;
    padding-top: 5px;
    margin: 5px;
    transition-duration: 0.3s;
    color: #0e0e12;
    font-family: monospace;
    font-size: 16px;
  }

  .nav-tile:hover {
    background-color: #a6a6bf;
  }

  :global(body.dark-mode) .nav-tile {
    background-color: #333346;
    color: #e6e6ec;
  }

  :global(body.dark-mode) .nav-tile:hover {
    background-color: #535373;
  }

  .nav-tile.active {
    background-color: #8080a4;
    transition-duration: 0s;
  }

  :global(body.dark-mode) .nav-tile.active {
    background-color: #8080a4;
    transition-duration: 0s;
  }

  img {
    display: block;
    margin: auto;
  }

  p {
    text-align: center;
    margin-top: 10px;
  }
</style>
