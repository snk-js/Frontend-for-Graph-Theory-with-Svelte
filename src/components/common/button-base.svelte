<script>
  import MenuPopover from "./menu-popover.svelte";
  export let popover;

  let show_menu = false;

  function handle_menu_popover() {
    show_menu = !show_menu;
  }
</script>

<button
  class="button-base"
  style="--color-icon:rgb(65, 163, 61)"
  on:mouseover={handle_menu_popover}
  on:focus={handle_menu_popover}
>
  <slot />
</button>
{#if show_menu}
  <MenuPopover labels_id={popover.labels_id} />
{/if}

<style>
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
