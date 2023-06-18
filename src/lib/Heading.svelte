<script>
  export let pokemonID;
  export let pokemonName;
  import generatePokemonNumber from "../scripts/generatePokemonNumber";

  $: pokemonNumber = generatePokemonNumber(pokemonID);
</script>

<h1>#{pokemonNumber} {pokemonName}</h1>
