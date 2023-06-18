<script>
  import Category from "./Category.svelte";
  import Heading from "./Heading.svelte";
  import Height from "./Height.svelte";
  import Weight from "./Weight.svelte";
  import Image from "./Image.svelte";
  import Type from "./Type.svelte";
  export let pokemon;
</script>

<main>
  <div class="item1">
    <Heading number={pokemon.number} name={pokemon.name} />
  </div>
  <div class="item2">
    <Image id={pokemon.number} name={pokemon.name} />
  </div>
  <div class="item3">
    <Category category={pokemon.category} />
  </div>
  <div class="item4">
    <Type type={pokemon.type} />
  </div>
  <div class="item5">
    <Height height={pokemon.height} />
  </div>
  <div class="item6">
    <Weight weight={pokemon.weight} />
  </div>
</main>

<style>
  .item1 {
    grid-area: header;
  }

  .item2 {
    grid-area: image;
  }

  .item3 {
    grid-area: category;
  }

  .item4 {
    grid-area: type;
  }

  .item5 {
    grid-area: height;
  }

  .item6 {
    grid-area: weight;
  }

  main {
    display: grid;
    grid-template-areas:
      "header header header header header"
      "image category type height weight";
    background-color: grey;
    padding: 10px;
    grid-gap: 10px;
  }

  main > div {
    background-color: white;
  }
</style>
