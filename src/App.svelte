<script>
  import allPokemon from "./data/pokemon.json";
  import getDataValues from "./scripts/getDataValues";
  import NavTile from "./lib/NavTile.svelte";
  import DarkModeToggle from "./lib/DarkModeToggle.svelte";

  let allNumbers = getDataValues(allPokemon, "number");
  let allNames = getDataValues(allPokemon, "name");
</script>

<DarkModeToggle>Toggle</DarkModeToggle>

<div class="tile-grid">
  {#each allNumbers as number, i}
    <div>
      <NavTile {number} name={allNames[i]} />
    </div>
  {/each}
</div>

<style>
  .tile-grid {
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    max-width: 1100px;
  }

  
  :global(body) {
    background-color: #e6e6ec;
    transition-duration: 0.2s;
    color: #0e0e12;
    font-family: monospace;
    font-size: 16px;
  }

  :global(body.dark-mode) {
    background-color: #0e0e12;
    color: #e6e6ec;
  }
</style>
