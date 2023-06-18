<script>
  import generatePokedexNumberString from "../scripts/generatePokedexNumberString";
  import { createEventDispatcher } from "svelte";
  export let allNumbers;
  export let allNames;

  const dispatch = createEventDispatcher();

  function select(number) {
    dispatch("pokemonSelected", number);
  }
</script>

<nav>
  <ul>
    {#each allNumbers as number}
      <li>
        <a on:click={() => select(number)} href="#top">
          {generatePokedexNumberString(number)}
          {allNames[number - 1]}
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  ul {
    list-style-type: none;
    padding: 0px;
  }

  li {
    padding: 5px;
  }
</style>
