<script>
  import { onMount } from "svelte";
  import NavTile from "./NavTile.svelte";
  import PokedexEntry from "./PokedexEntry.svelte";

  export let allPokemon;

  let tileGridWidth;

  onMount(() => {
    updateEntryWidth();
    window.addEventListener("resize", updateEntryWidth);
  });

  function updateEntryWidth() {
    tileGridWidth = document.querySelector(".tile-grid").clientWidth;
  }
</script>

<div class="tile-grid">
  {#each allPokemon as pokemon}
    <NavTile {pokemon} />
    {#if pokemon.number === 3}
      <PokedexEntry {pokemon} {tileGridWidth} />
    {/if}
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
