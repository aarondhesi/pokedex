<script>
  import DarkModeToggle from "./lib/DarkModeToggle.svelte";
  import NavTileGrid from "./lib/NavTileGrid.svelte";

  import allPokemon from "./data/pokemon.json";
</script>

<div class="grid-container">
  <div class="header">
    <DarkModeToggle />
  </div>
  <NavTileGrid {allPokemon} />
</div>

<style>
  .grid-container {
    display: grid;
  }

  .header {
    height: 100px;
  }
</style>
