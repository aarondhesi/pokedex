<script>
  export let pokemon;
  export let tileGridWidth;
  import generatePokemonNumber from "../scripts/generatePokedexNumberString";
  import StatBar from "./StatBar.svelte";
  import Type from "./Type.svelte";

  let width;
  $: {
    let tileGridWidthRounded = Math.floor(tileGridWidth / 110) * 100 - 10;
    width = ((tileGridWidthRounded / tileGridWidth) * 110).toString() + "%";
  }
</script>

<div class="container" style="width: {width}">
  <div class="contents">
    <div class="image-name">
      <p>{generatePokemonNumber(pokemon.number)} {pokemon.name}</p>
      <img src="sprites/{pokemon.number}.png" alt={pokemon.name} />
    </div>
    <div class="types">
      {#each pokemon.type as type}
        <Type {type} />
      {/each}
    </div>
    <div class="data">
      <p>{pokemon.category}</p>
      <p>Height: {pokemon.height} m</p>
      <p>Weight: {pokemon.weight} kg</p>
      <p>Ability: {pokemon.ability}</p>
    </div>
    <div class="stats">
      <div>
        {#each Object.entries(pokemon["base stats"]) as [statName, statValue], i}
          {#if i < 3}
            <StatBar {statName} {statValue} />
          {/if}
        {/each}
      </div>
      <div>
        {#each Object.entries(pokemon["base stats"]) as [statName, statValue], i}
          {#if i >= 3}
            <StatBar {statName} {statValue} />
          {/if}
        {/each}
      </div>
    </div>
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

  :global(body.dark-mode) .container {
    background-color: #8b7d62;
    color: #e6ceac;
  }

  .contents {
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
  }

  .image-name {
    width: 140px;
    text-align: center;
  }

  .data {
    width: 200px;
  }

  img {
    display: block;
    margin: auto;
  }

  .stats {
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 25px;
  }

  @media screen and (max-width: 472px) {
    .stats {
      grid-template-columns: 1fr;
    }
  }
</style>
