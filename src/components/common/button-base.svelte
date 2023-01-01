<script>
  import { onMount } from "svelte";
  import MenuPopover from "./menu-popover.svelte";

  export let popover;

  const { labels_id, components_id, ids } = popover;

  let show_menu = false;

  function handle_menu_popover() {
    show_menu = !show_menu;
  }
</script>

<div class="button-container">
  <div class="anchor">
    {#if show_menu}
      <MenuPopover {labels_id} {components_id} {ids} />
    {/if}
  </div>
  <button
    class="button-base"
    style="--color-icon:rgb(2, 100, 300, 1)"
    on:click={handle_menu_popover}
  >
    <slot />
  </button>
</div>

<style>
  .button-container {
    height: 100%;
  }
  .anchor {
    z-index: 2000;
    width: 0;
    height: 0;
    position: relative;
    top: 3rem;
  }

  .button-base {
    background: transparent;
    color: var(--color-icon);
    border: none;
    box-sizing: border-box;
    position: relative;
    height: 100%;
    border-radius: 10px;
  }

  .button-base:hover {
    background: rgba(82, 82, 82, 0.368);
  }
</style>
