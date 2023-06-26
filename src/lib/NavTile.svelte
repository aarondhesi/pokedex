<script>
  import generatePokemonNumber from "../scripts/generatePokedexNumberString";

  export let number;
  export let name;
</script>

<div>
  <img src="src\assets\sprites\{number}.png" alt={name} />
  <p>{name}</p>
</div>

<style>
  div {
    background-color: #c1c1d2;
    width: 100px;
    height: 100px;
    padding-top: 5px;
    margin: 5px;
  }

  img {
    display: block;
    margin: auto;
  }

  p {
    text-align: center;
    margin-top: 10px;
  }
</style>
