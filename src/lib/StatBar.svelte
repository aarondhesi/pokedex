<script>
  const max = 255;
  export let statName;
  export let statValue;
  $: percentage = ((100 * statValue) / 255).toString() + "%";
</script>

<div class="container">
  <p>{statName}: {statValue}</p>
  <div class="bar">
    <div class="fill" style="width: {percentage}" />
  </div>
</div>

<style>
  .container{
    width: 150px;
  }

  .bar {
    width: 100%;
    height: 10px;
    background-color: #cdba94;
    margin-top: -5px;
    margin-bottom: -10px;
  }

  .fill {
    background-color: #524839;
    height: 10px;
  }

  p {
    color: #292418;
    font-family: monospace;
    font-size: 16px;
  }

  :global(body.dark-mode) p {
    color: #e6ceac;
  }

</style>
