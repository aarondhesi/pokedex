<script>
  import { each } from "svelte/internal";
  import { get } from "svelte/store";

  const typeColours = {
    Normal: "#A8A77A",
    Fire: "#EE8130",
    Water: "#6390F0",
    Electric: "#F7D02C",
    Grass: "#7AC74C",
    Ice: "#96D9D6",
    Fighting: "#C22E28",
    Poison: "#A33EA1",
    Ground: "#E2BF65",
    Flying: "#A98FF3",
    Psychic: "#F95587",
    Bug: "#A6B91A",
    Rock: "#B6A136",
    Ghost: "#735797",
    Dragon: "#6F35FC",
    Dark: "#705746",
    Steel: "#B7B7CE",
    Fairy: "#D685AD",
  };

  function generateColourTypeList(type) {
    let colourType = [];

    for (let i = 0; i < type.length; i++) {
      colourType.push({ type: type[i], colour: typeColours[type[i]] });
    }

    return colourType;
  }

  export let type;
  $: colourTypeList = generateColourTypeList(type);
</script>

<h2>Type</h2>
<ul>
  {#each colourTypeList as colourType}
    <li style="background-color: {colourType.colour}">{colourType.type}</li>
  {/each}
</ul>

<style>
  ul {
    list-style-type: none;
    padding: 0px;
  }

  li {
    float: left;
    width: 100px;
    padding: 5px;
    margin: 5px;
    border-radius: 10px;
    color: white;
    text-align: center;
  }
</style>
