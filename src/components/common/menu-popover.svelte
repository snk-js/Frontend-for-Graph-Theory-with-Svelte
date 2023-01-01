<script>
  import { fade } from "svelte/transition";
  import ListItem from "@commons/list-item/list-item.svelte";
  import { get_ui } from "$lib/store";

  export let labels_id = "";
  export let components_id = "";
  export let ids = "";

  const labels = get_ui(labels_id) || [];
  const components = get_ui(components_id) || [];
  const bg_menu_ids = get_ui(ids) || [];
</script>

<div class="menu" transition:fade>
  <div class="label default">
    {#each labels as label, i}
      <ListItem {label} component={components[i]} id={bg_menu_ids[i]} {i} />
    {/each}
  </div>
</div>

<style>
  .menu {
    display: flex;
    width: max-content;
    border-radius: 7px;
    background: rgba(0, 0, 0, 0.553);
  }

  .default {
    position: relative;
    box-sizing: border-box;
    padding: 0.5rem;
  }

  .label {
  }
</style>
