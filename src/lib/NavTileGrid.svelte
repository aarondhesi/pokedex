<script>
  import NavTile from "./NavTile.svelte";
  import PokedexEntry from "./PokedexEntry.svelte";

  export let allPokemon;
</script>

<div class="tile-grid">
  {#each allPokemon as pokemon}
    <NavTile {pokemon} />
    {#if pokemon.number === 3}
      <PokedexEntry {pokemon} />
    {/if}
  {/each}
</div>

<style>
  .tile-grid {
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    max-width: 1100px;
    background-color: black;
  }
</style>
