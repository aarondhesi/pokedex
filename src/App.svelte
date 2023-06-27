<script>
  import DarkModeToggle from "./lib/DarkModeToggle.svelte";
  import NavTileGrid from "./lib/NavTileGrid.svelte";
  import allPokemon from "./data/pokemon.json";
</script>

<DarkModeToggle>Toggle</DarkModeToggle>
<NavTileGrid pokemon={allPokemon} />

