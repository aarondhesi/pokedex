<script>
  export let number;
  export let name;
</script>

<div class="nav-tile">
  <img src="src\assets\sprites\{number}.png" alt={name} />
  <p>{name}</p>
</div>

<style>
  .nav-tile {
    background-color: #c1c1d2;
    width: 100px;
    height: 100px;
    padding-top: 5px;
    margin: 5px;
    transition-duration: 0.3s;
    color: #0e0e12;
    font-family: monospace;
    font-size: 16px;
  }

  .nav-tile:hover {
    background-color: #a6a6bf;
  }

  :global(body.dark-mode) .nav-tile {
    background-color: #333346;
    color: #e6e6ec;
  }
  
  :global(body.dark-mode) .nav-tile:hover {
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
