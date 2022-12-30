<script>
  import { fly } from "svelte/transition";
  import ListItem from "@commons/list-item/list-item.svelte";
  import { get_ui } from "$lib/store";

  export let labels_id;
  export let components_id;

  let labels = get_ui(labels_id) || [];
  let components = get_ui(components_id) || [];
</script>

<div class="menu" transition:fly>
  {#each labels as label, i}
    <ListItem {label} component={components[i]} {i} />
  {/each}
</div>

<style>
  .menu {
    position: relative;
    left: -3.2rem;
    top: 6.5rem;
    box-sizing: border-box;
    padding: 0.5rem;
    border-radius: 3px;
    background: rgba(0, 0, 0, 0.553);
  }
</style>
