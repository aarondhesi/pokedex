<script>
  export let number;
  export let name;
</script>

<div>
  <img src="src\assets\sprites\{number}.png" alt={name} />
  <p>{name}</p>
</div>

<style>
  :global(body) div {
    background-color: #c1c1d2;
    width: 100px;
    height: 100px;
    padding-top: 5px;
    margin: 5px;
    transition: 0.2s;
  }

  :global(body) div:hover {
    background-color: #a6a6bf;
  }

  :global(body.dark-mode) div {
    background-color: #333346;
  }
  :global(body.dark-mode) div:hover {
    background-color: #535373;
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
