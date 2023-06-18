<script>
  import Category from "./Category.svelte";
  import Heading from "./Heading.svelte";
  import Height from "./Height.svelte";
  import Weight from "./Weight.svelte";
  import Image from "./Image.svelte";
  import Type from "./Type.svelte";
  export let data;
</script>

<main>
  <div class="item1">
    <Heading number={data.number} name={data.name} />
  </div>
  <div class="item2">
    <Image id={data.number} name={data.name} />
  </div>
  <div class="item3">
    <Category category={data.category} />
  </div>
  <div class="item4">
    <Type type={data.type} />
  </div>
  <div class="item5">
    <Height height={data.height} />
  </div>
  <div class="item6">
    <Weight weight={data.weight} />
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
