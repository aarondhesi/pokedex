<script>
  import allPokemon from "./data/pokemon.json";
  import getDataValues from "./scripts/getDataValues";
  import NavTile from "./lib/NavTile.svelte";
  import { each } from "svelte/internal";

  let allNumbers = getDataValues(allPokemon, "number");
  let allNames = getDataValues(allPokemon, "name");
  let selectedNumber = null;

  function handlePokemonSelected(event) {
    selectedNumber = event.detail;
  }
</script>

<div class="flex-container">
  {#each allNumbers as number, i}
    <div>
      <NavTile {number} name={allNames[i]} />
    </div>
  {/each}
</div>

<style>
  .flex-container {
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    max-width: 1100px;
  }
</style>
