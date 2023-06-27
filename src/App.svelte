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

</style>
