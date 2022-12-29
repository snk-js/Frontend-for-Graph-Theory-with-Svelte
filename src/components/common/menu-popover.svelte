<script>
  import { slide } from "svelte/transition";
  import { get_ui } from "$lib/store";
  export let labels_id;

  let labels = get_ui(labels_id) || [];
</script>

<div class="menu" transition:slide>
  <ul>
    {#each labels as label, i}
      <li>
        {label}
      </li>
    {/each}
  </ul>
</div>

<style>
</style>
