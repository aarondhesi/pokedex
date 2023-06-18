<script>
  import generatePokemonNumber from "../scripts/generatePokemonNumber";
  import { createEventDispatcher } from "svelte";
  export let pokemonIDs;
  export let pokemonNames;

  const dispatch = createEventDispatcher();

  function select(pokemonID) {
    dispatch("pokemonSelected", pokemonID);
  }
</script>

<nav>
  <ul>
    {#each pokemonIDs as pokemonID}
      <li>
        <a on:click={() => select(pokemonID)} href="#top"
          >#{generatePokemonNumber(pokemonID)} {pokemonNames[pokemonID - 1]}</a
        >
      </li>
    {/each}
  </ul>
</nav>

<style>
  ul {
    list-style-type: none;
    padding: 0px;
  }

  li {
    padding: 5px;
  }
</style>
