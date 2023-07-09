<script>
  import NavTile from "./NavTile.svelte";

  export let allPokemon;
</script>

<div class="tile-grid">
  {#each allPokemon as pokemon}
    <NavTile {pokemon} />
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
