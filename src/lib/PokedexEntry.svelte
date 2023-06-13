<script>
  import Image from "./Image.svelte";
  export let pokemonData;
  console.log(pokemonData);
</script>

<Image pokemonID={pokemonData.id} pokemonName={pokemonData.name} />
