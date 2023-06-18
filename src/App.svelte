<script>
  import PokedexEntry from "./lib/PokedexEntry.svelte";
  import NavigationBar from "./lib/NavigationBar.svelte";
  import allPokemon from "./data/pokemon.json";
  import getDataValues from "./scripts/getDataValues";

  let allNumbers = getDataValues(allPokemon, "number");
  let allNames = getDataValues(allPokemon, "name");
  let selectedNumber = null;

  function handlePokemonSelected(event) {
    selectedNumber = event.detail;
  }
</script>

<NavigationBar
  {allNumbers}
  {allNames}
  on:pokemonSelected={handlePokemonSelected}
/>

{#if selectedNumber !== null}
  <PokedexEntry pokemon={allPokemon[selectedNumber - 1]} />
{/if}
