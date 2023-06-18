<script>
  import generatePokemonNumber from "../scripts/generatePokemonNumber";
  export let pokemonIDs;
  export let pokemonNames;
</script>

<nav>
  <ul>
    {#each pokemonIDs as pokemonID}
      <li>#{generatePokemonNumber(pokemonID)} {pokemonNames[pokemonID - 1]}</li>
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
