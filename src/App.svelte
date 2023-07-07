<script>
  import DarkModeToggle from "./lib/DarkModeToggle.svelte";
  import NavTileGrid from "./lib/NavTileGrid.svelte";
  import allPokemon from "./data/pokemon.json";
  import Type from "./lib/Type.svelte";
</script>

<div class="grid-container">
  <div class="header">
    <Type type="Electric" />
    <DarkModeToggle />
  </div>
  <NavTileGrid pokemon={allPokemon} />
</div>

<style>
  .grid-container {
    display: grid;
  }
  
  .header {
    height: 100px;
  }
</style>