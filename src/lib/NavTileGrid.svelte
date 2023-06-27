<script>
  import NavTile from "./NavTile.svelte";
  import getDataValues from "../scripts/getDataValues";

  export let pokemon;
  let allNumbers = getDataValues(pokemon, "number");
  let allNames = getDataValues(pokemon, "name");
</script>

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
