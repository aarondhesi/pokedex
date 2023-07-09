<script>
  import { onMount } from "svelte";
  import NavTile from "./NavTile.svelte";
  import PokedexEntry from "./PokedexEntry.svelte";

  export let allPokemon;

  let tileGridWidth;
  let tilesInRow;
  let selectedPokemonNumber = 0;
  let entryPosition = 0;

  onMount(() => {
    updatetileGridWidth();
    window.addEventListener("resize", updatetileGridWidth);
  });

  function updatetileGridWidth() {
    tileGridWidth = document.querySelector(".tile-grid").clientWidth;
    tilesInRow = Math.floor(tileGridWidth / 110);
    updateEntryPosition();
  }

  function updateEntryPosition() {
    if (selectedPokemonNumber === 0) {
      entryPosition = 0;
    } else {
      entryPosition =
        Math.ceil(selectedPokemonNumber / tilesInRow) * tilesInRow;
    }
  }

  function updateSelectedPokemonNumber(event) {
    let clickedPokemonNumber = event.detail.pokemonNumber;

    if (clickedPokemonNumber === selectedPokemonNumber) {
      selectedPokemonNumber = 0;
    } else {
      selectedPokemonNumber = clickedPokemonNumber;
    }
  }

  function handleClick(event) {
    updateSelectedPokemonNumber(event);
    updateEntryPosition();
  }

</script>

<div class="tile-grid">
  {#each allPokemon as pokemon}
    <NavTile {pokemon} on:click={handleClick} {selectedPokemonNumber} />
    {#if entryPosition === pokemon.number}
      <PokedexEntry pokemon={allPokemon[selectedPokemonNumber - 1]} {tileGridWidth} />
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
