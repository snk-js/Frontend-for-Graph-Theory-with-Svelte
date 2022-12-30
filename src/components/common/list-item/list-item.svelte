<script>
  import { fade } from "svelte/transition";

  export let label = "";
  export let component = {};
  export let i = 0;
</script>

<div class="list" transition:fade={{ delay: 70 * i }}>
  {label}
</div>

<style>
  .list {
    font-size: 0.75rem;
    box-sizing: border-box;
    padding: 0.24rem;
  }
</style>
