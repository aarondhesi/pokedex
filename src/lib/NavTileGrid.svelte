<script>
  import { onMount } from "svelte";
  import NavTile from "./NavTile.svelte";
  import PokedexEntry from "./PokedexEntry.svelte";

  export let allPokemon;

  let tileGridWidth;
  let selectedPokemon = null;

  onMount(() => {
    updatetileGridWidth();
    window.addEventListener("resize", updatetileGridWidth);
  });

  function updatetileGridWidth() {
    tileGridWidth = document.querySelector(".tile-grid").clientWidth;
  }

  function handleClick(event) {
    let clickedPokemon = event.detail.object;

    if (JSON.stringify(clickedPokemon) === JSON.stringify(selectedPokemon)) {
      selectedPokemon = null;
    } else {
      selectedPokemon = clickedPokemon;
    }
  }
</script>

<div class="tile-grid">
  {#each allPokemon as pokemon}
    <NavTile {pokemon} on:click={handleClick} />
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
