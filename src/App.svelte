<script>
  import PokedexEntry from "./lib/PokedexEntry.svelte";
  import NavigationBar from "./lib/NavigationBar.svelte";
  import data from "./data/pokemon.json";
</script>

<NavigationBar />
<PokedexEntry pokemonData={data} />
