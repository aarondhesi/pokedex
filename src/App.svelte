<script>
  import PokedexEntry from "./lib/PokedexEntry.svelte";
  import NavigationBar from "./lib/NavigationBar.svelte";
  import jsonData from "./data/pokemon.json";
  import getDataValues from "./scripts/getDataValues";

  let pokemonIds = getDataValues(jsonData, "id");
  let pokemonNames = getDataValues(jsonData, "name");
  let selectedID = null;

  function handlePokemonSelected(event) {
    selectedID = event.detail;
  }
</script>

<NavigationBar
  pokemonIDs={pokemonIds}
  {pokemonNames}
  on:pokemonSelected={handlePokemonSelected}
/>

{#if selectedID !== null}
  <PokedexEntry pokemonData={jsonData[selectedID - 1]} />
{/if}
