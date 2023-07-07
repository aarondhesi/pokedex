<script>
  import types from "../data/types.json";

  function getTypeColour(type) {
    for (let i = 0; i <= types.length; i++) {
      let object = types[i];

      if (object.type === type) {
        return object.colour;
      }
    }
  }

  export let type;
  let colour = getTypeColour(type);
</script>

<p style="background-color: {colour}">{type}</p>

<style>
  p {
    color: black;
    font-family: monospace;
    font-size: 16px;
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 10px;
  }
</style>
