<script>
  import PokedexEntry from "./lib/PokedexEntry.svelte";
  import NavigationBar from "./lib/NavigationBar.svelte";
  import jsonData from "./data/pokemon.json";
  import getDataValues from "./scripts/getDataValues";

  let pokemonIds = getDataValues(jsonData, "id");
  let pokemonNames = getDataValues(jsonData, "name");
  let selectedID = 1;
</script>

<NavigationBar pokemonIDs={pokemonIds} pokemonNames= {pokemonNames} />

<PokedexEntry pokemonData={jsonData[selectedID - 1]} />