<script>
  export let pokemonID;
  export let pokemonName;

  function generatePokemonNumber(id) {
    if (id >= 100) {
      return id.toString();
    } else if (id >= 10) {
      return "0" + id.toString();
    } else {
      return "00" + id.toString();
    }
  }

  $: pokemonNumber = generatePokemonNumber(pokemonID);
</script>

<h1>#{pokemonNumber} {pokemonName}</h1>
