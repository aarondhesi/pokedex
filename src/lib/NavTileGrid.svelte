<script>
  import { onMount } from "svelte";
  import NavTile from "./NavTile.svelte";
  import PokedexEntry from "./PokedexEntry.svelte";

  export let allPokemon;

  let tileGridWidth;
  let selectedPokemonNumber = 0;

  onMount(() => {
    updatetileGridWidth();
    window.addEventListener("resize", updatetileGridWidth);
  });

  function updatetileGridWidth() {
    tileGridWidth = document.querySelector(".tile-grid").clientWidth;
  }

  function handleClick(event) {
    let clickedPokemonNumber = event.detail.pokemonNumber;

    if (clickedPokemonNumber === selectedPokemonNumber) {
      selectedPokemonNumber = 0;
    } else {
      selectedPokemonNumber = clickedPokemonNumber;
    }
  }
</script>

<div class="tile-grid">
  {#each allPokemon as pokemon}
    <NavTile {pokemon} on:click={handleClick} />
    {#if selectedPokemonNumber === pokemon.number}
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
