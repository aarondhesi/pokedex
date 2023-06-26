<script>
  export let number;
  export let name;
  import generatePokemonNumber from "../scripts/generatePokedexNumberString";
</script>

<h1>{generatePokemonNumber(number)} {name}</h1>
