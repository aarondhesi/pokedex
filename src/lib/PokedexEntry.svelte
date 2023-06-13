<script>
  import Heading from "./Heading.svelte";
  import Image from "./Image.svelte";
  export let pokemonData;
  console.log(pokemonData);
</script>

<Heading pokemonID={pokemonData.id} pokemonName={pokemonData.name}  />
<Image pokemonID={pokemonData.id} pokemonName={pokemonData.name} />
