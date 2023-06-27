<script>
  function toggleDarkMode() {
    window.document.body.classList.toggle("dark-mode");
  }
</script>

<div class="wrapper">
  <input type="checkbox" id="hide-checkbox" on:click={toggleDarkMode}/>
  <label for="hide-checkbox" class="toggle">
    <span class="toggle-button">
      <span class="crater crater-1" />
      <span class="crater crater-2" />
      <span class="crater crater-3" />
      <span class="crater crater-4" />
      <span class="crater crater-5" />
      <span class="crater crater-6" />
      <span class="crater crater-7" />
    </span>
    <span class="star star-1" />
    <span class="star star-2" />
    <span class="star star-3" />
    <span class="star star-4" />
    <span class="star star-5" />
    <span class="star star-6" />
    <span class="star star-7" />
    <span class="star star-8" />
  </label>
</div>

<style>
  .wrapper{
    width: auto;
  }

  #hide-checkbox {
    opacity: 0;
    height: 0;
    width: 0;
  }

  .toggle {
    position: relative;
    float: right;
    cursor: pointer;
    width: 100px;
    height: 50px;
    background: #211042;
    border-radius: 50px;
    transition: 500ms;
    overflow: hidden;
  }

  .toggle-button {
    position: absolute;
    display: inline-block;
    top: 3.5px;
    left: 3px;
    width: 43px;
    height: 43px;
    border-radius: 50%;
    background: #faeaf1;
    overflow: hidden;
    box-shadow: 0 0 17.5px 2px rgba(255, 255, 255);
    transition: all 500ms ease-out;
  }

  .crater {
    position: absolute;
    display: inline-block;
    background: #faeaf1;
    border-radius: 50%;
    transition: 500ms;
  }

  .crater-1 {
    background: #fffff9;
    width: 43px;
    height: 43px;
    left: 5px;
    bottom: 5px;
  }

  .crater-2 {
    width: 10px;
    height: 10px;
    top: -3.5px;
    left: 22px;
  }

  .crater-3 {
    width: 8px;
    height: 8px;
    top: 10px;
    right: -2px;
  }

  .crater-4 {
    width: 5px;
    height: 5px;
    top: 12px;
    left: 15px;
  }

  .crater-5 {
    width: 7.5px;
    height: 7.5px;
    top: 20px;
    left: 28px;
  }

  .crater-6 {
    width: 5px;
    height: 5px;
    top: 24px;
    left: 10px;
  }

  .crater-7 {
    width: 6px;
    height: 6px;
    bottom: 2.5px;
    left: 17.5px;
  }

  .star {
    position: absolute;
    display: inline-block;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0.5px 0 1px 1px rgba(255, 255, 255);
  }

  .star-1 {
    width: 3px;
    height: 3px;
    right: 45px;
    bottom: 20px;
  }

  .star-2 {
    width: 4px;
    height: 4px;
    right: 35px;
    top: 5px;
  }

  .star-3 {
    width: 2.5px;
    height: 2.5px;
    right: 30px;
    bottom: 7.5px;
  }

  .star-4 {
    width: 1.5px;
    height: 1.5px;
    right: 20px;
    bottom: 25px;
  }

  .star-5 {
    width: 2px;
    height: 2px;
    right: 5px;
    bottom: 17.5px;
  }

  .star-6,
  .star-7,
  .star-8 {
    width: 5px;
    height: 1px;
    border-radius: 2px;
    transform: rotate(-45deg);
    box-shadow: 2.5px 0px 2px 0.5px #fff;
    animation-name: travel;
    animation-duration: 1.5s;
    animation-timing-function: ease-out;
    animation-iteration-count: infinite;
  }

  .star-6 {
    right: 15px;
    bottom: 15px;
    animation-delay: -2s;
  }

  .star-7 {
    right: 25px;
    bottom: 30px;
  }

  .star-8 {
    right: 45px;
    top: 5px;
    animation-delay: -4s;
  }

  @keyframes travel {
    0% {
      transform: rotate(-45deg) translateX(35px);
    }

    50% {
      transform: rotate(-45deg) translateX(-10px);
      box-shadow: 2.5px 0px 3px 0.5px #fff;
    }

    100% {
      transform: rotate(-45deg) translateX(-15px);
      width: 1px;
      height: 1px;
      opacity: 0;
      box-shadow: none;
    }
  }

  #hide-checkbox:checked + .toggle {
    background: #24d7f7;
  }

  #hide-checkbox:checked + .toggle .toggle-button {
    background: #f7ffff;
    transform: translateX(51px);
    box-shadow: 0 0 17.5px 2.5px rgba(255, 255, 255);
  }

  #hide-checkbox:checked + .toggle .toggle-button .crater {
    transform: rotate(-45deg) translateX(35px);
  }

  #hide-checkbox:checked + .toggle .star {
    animation: move 2s infinite;
    transform: none;
    box-shadow: none;
  }

  #hide-checkbox:checked + .toggle .star-1 {
    width: 20px;
    height: 5px;
    border-radius: 10px;
    background: #fff;
    left: 10px;
    top: 12.5px;
    box-shadow: none;
  }

  #hide-checkbox:checked + .toggle .star-2 {
    width: 6px;
    height: 6px;
    background: #fff;
    left: 13px;
    top: 11.5px;
    box-shadow: -0.5px 0 1px 0 rgba(0, 0, 0, 0.1);
  }

  #hide-checkbox:checked + .toggle .star-3 {
    width: 8px;
    height: 8px;
    background: #fff;
    left: 17.5px;
    top: 9.5px;
    box-shadow: -0.5px 0 1px 0 rgba(0, 0, 0, 0.1);
  }

  #hide-checkbox:checked + .toggle .star-4 {
    width: 7%;
    height: 7px;
    background: #fff;
    left: 23px;
    top: 10.5px;
    box-shadow: -0.5px 0 1px 0 rgba(0, 0, 0, 0.1);
  }

  #hide-checkbox:checked + .toggle .star-5 {
    width: 30px;
    height: 7.5px;
    border-radius: 7.5px;
    background: #fff;
    left: 15px;
    bottom: 10px;
    box-shadow: none;
  }

  #hide-checkbox:checked + .toggle .star-6 {
    width: 9px;
    height: 9px;
    background: #fff;
    border-radius: 50%;
    left: 19px;
    bottom: 10px;
    box-shadow: -0.5px 0 1px 0 rgba(0, 0, 0, 0.1);
  }

  #hide-checkbox:checked + .toggle .star-7 {
    width: 12px;
    height: 12px;
    background: #fff;
    border-radius: 50%;
    left: 26px;
    bottom: 10px;
    box-shadow: -0.5px 0 1px 0 rgba(0, 0, 0, 0.1);
  }

  #hide-checkbox:checked + .toggle .star-8 {
    width: 10.5px;
    height: 10.5px;
    background: #fff;
    border-radius: 50%;
    left: 35px;
    top: 29.5px;
    box-shadow: -0.5px 0 1px 0 rgba(0, 0, 0, 0.1);
  }

  @keyframes move {
    0% {
      transform: none;
    }

    25% {
      transform: translateX(1px);
    }

    100% {
      transform: translateX(-1px);
    }
  }
</style>
