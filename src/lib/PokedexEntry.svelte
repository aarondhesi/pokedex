<script>
  import Heading from "./Heading.svelte";
  import Image from "./Image.svelte";
  import Type from "./Type.svelte";
  export let pokemonData;
  console.log(pokemonData);
</script>

<Heading pokemonID={pokemonData.id} pokemonName={pokemonData.name} />
<Image pokemonID={pokemonData.id} pokemonName={pokemonData.name} />
<Type pokemonType={pokemonData.type} />
