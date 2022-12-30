<script>
  import MenuPopover from "./menu-popover.svelte";

  export let popover;

  const { labels_id, components_id } = popover;

  let show_menu = false;

  function handle_menu_popover(state) {
    show_menu = state;
  }
</script>

<button
  class="button-base"
  style="--color-icon:rgb(65, 163, 61)"
  on:mouseover={() => handle_menu_popover(true)}
  on:focus={() => handle_menu_popover(true)}
  on:mouseleave={() => handle_menu_popover(false)}
>
  <slot />
</button>
{#if show_menu}
  <MenuPopover {labels_id} {components_id} />
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
