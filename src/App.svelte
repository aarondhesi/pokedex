<script>
  import DarkModeToggle from "./lib/DarkModeToggle.svelte";
  import NavTileGrid from "./lib/NavTileGrid.svelte";
  import allPokemon from "./data/pokemon.json";
</script>

<div class="grid-container">
  <DarkModeToggle>Toggle</DarkModeToggle>
  <NavTileGrid pokemon={allPokemon} />
</div>

<style>
  .grid-container {
    display: grid;
  }
</style>