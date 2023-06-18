<script>
  import PokedexEntry from "./lib/PokedexEntry.svelte";
  import NavigationBar from "./lib/NavigationBar.svelte";
  import allData from "./data/pokemon.json";
  import getDataValues from "./scripts/getDataValues";

  let allNumbers = getDataValues(allData, "number");
  let allNames = getDataValues(allData, "name");
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
  <PokedexEntry data={allData[selectedNumber - 1]} />
{/if}
