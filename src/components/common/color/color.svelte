<script>
  import { get_ui } from "$lib/store/";
  export let id = "";
  import ColorPicker from "svelte-awesome-color-picker";

  let rgb; // or hsv or hex
  const color = get_ui("bg-menu-state")[id];
  let color_picker = false;

  const handle_click = () => {
    color_picker = true;
  };
</script>

<div
  on:mouseover={handle_click}
  on:mouseout={handle_click}
  class="color"
  style={`--c:${color}`}
/>
<div class="color-picker">
  {#if color_picker}
    <ColorPicker bind:rgb />
  {/if}
</div>

<style>
  .color-picker {
    position: absolute;
  }
  .color {
    width: 100%;
    height: 100%;
    background: var(--c);
  }
</style>
