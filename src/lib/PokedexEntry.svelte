<script>
  import Category from "./Category.svelte";
  import Heading from "./Heading.svelte";
  import Height from "./Height.svelte";
  import Weight from "./Weight.svelte";
  import Image from "./Image.svelte";
  import Type from "./Type.svelte";
  export let pokemonData;
  console.log(pokemonData);
</script>

<Heading pokemonID={pokemonData.id} pokemonName={pokemonData.name} />
<Image pokemonID={pokemonData.id} pokemonName={pokemonData.name} />
<Type pokemonType={pokemonData.type} />
<Category category={pokemonData.category} />
<Height height={pokemonData.height} />
<Weight weight={pokemonData.weight} />
