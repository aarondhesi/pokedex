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
    background-color: #cdba94;
    border: none;
    width: 100px;
    height: 100px;
    padding-top: 5px;
    margin: 5px;
    transition-duration: 0.3s;
    color: #292418;
    font-family: monospace;
    font-size: 16px;
  }

  .nav-tile:hover {
    background-color: #bda583;
  }

  :global(body.dark-mode) .nav-tile {
    background-color: #524839;
    color: #e6ceac;
  }

  :global(body.dark-mode) .nav-tile:hover {
    background-color: #73654a;
  }

  .nav-tile.active {
    background-color: #a48d6a;
    transition-duration: 0s;
  }

  :global(body.dark-mode) .nav-tile.active {
    background-color: #8b7d62;
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
