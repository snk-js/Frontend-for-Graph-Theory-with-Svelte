<script>
  import { fade } from "svelte/transition";
  import Mix from "@commons/mix/mix.svelte";

  export let label = "";
  export let component = { type: "" };
  export let i = 0;
  export let id = "";
</script>

<div class="list-item">
  <div class="label" transition:fade={{ delay: 70 * i }}>
    {label}
  </div>
  <div class="component" transition:fade={{ delay: 70 * i }}>
    <Mix {component} {id} />
  </div>
</div>

<style>
  .list-item {
    display: flex;
    min-width: 200px;
    margin: 0.2rem;
  }

  .list-item:hover {
    transform: scale(105%);
    background: rgba(62, 62, 62, 0.285);
  }

  .label {
    font-size: 0.575rem;
    box-sizing: border-box;
    padding: 0.24rem;
    min-width: 100px;
  }
  .component {
    background-color: rgba(38, 38, 38, 0.066);
    width: 100%;
    max-width: 100px;
    margin: 0 0 0 auto;
    min-width: auto;
    display: flex;
  }
</style>
