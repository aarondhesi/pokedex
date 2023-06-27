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
    transition-duration: 0.2s;
  }
  .nav-tile:hover {
    background-color: #a6a6bf;
  }

  :global(.dark-mode) .nav-tile {
    background-color: #333346;
  }
  :global(.dark-mode) .nav-tile:hover {
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
