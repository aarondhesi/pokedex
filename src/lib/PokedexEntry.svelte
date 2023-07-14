<script>
  export let pokemon;
  export let tileGridWidth;
  import generatePokemonNumber from "../scripts/generatePokedexNumberString";
  import Type from "./Type.svelte";

  let width;
  $: {
    let tileGridWidthRounded = Math.floor(tileGridWidth / 110) * 100 - 10;
    width = ((tileGridWidthRounded / tileGridWidth) * 110).toString() + "%";
  }
</script>

<div class="container" style="width: {width}">
  <div class="contents">
    <p>{generatePokemonNumber(pokemon.number)} {pokemon.name}</p>
    <p>Category: {pokemon.category}</p>
    {#each pokemon.type as type}
      <Type {type} />
    {/each}
    <p>Height: {pokemon.height} m</p>
    <p>Weight: {pokemon.weight} kg</p>
    <p>Ability: {pokemon.ability}</p>
  </div>
</div>

<style>
  .container {
    margin: 5px;
    background-color: #a48d6a;
    font-family: monospace;
    font-size: 16px;
    color: #292418;
  }

  :global(body.dark-mode).container {
    background-color: #8b7d62;
    color: #e6ceac;
  }

  .contents {
    margin: 10px;
  }
</style>
