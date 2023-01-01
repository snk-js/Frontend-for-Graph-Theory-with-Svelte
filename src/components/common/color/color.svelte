<script>
  import { state_by_id_map } from "$lib/store/menu/bg/utils";
  import { menu_background_state } from "$lib/store/menu/bg";
  import ColorPicker from "svelte-awesome-color-picker";
  import { set_menu_state } from "$lib/store/menu/bg/";
  export let id = "";

  let isOpen = false;

  const openPicker = () => {
    isOpen = true;
  };

  const closePicker = () => {
    isOpen = false;
  };

  const handle_set_state = (value) => {
    set_menu_state(id, value);
  };

  let color;

  menu_background_state.subscribe((state) => {
    color = state_by_id_map(state)[id];
  });

  const handle_change_color = (target) => {
    handle_set_state(target.detail.hex);
  };

  let buttonref;
</script>

<button
  bind:this={buttonref}
  on:blur={closePicker}
  on:focus={openPicker}
  class="color-picker"
  style={`--c:${color}`}
>
  <ColorPicker
    {isOpen}
    on:input={handle_change_color}
    isInput={false}
    components={{ input: buttonref }}
  />
</button>

<!-- <C {hex} /> -->
<style>
  .color-picker {
    position: relative;
    width: 100%;
    height: 100%;
    background: var(--c);
    max-height: 50px;
    border-radius: 15px;
    border: none;
  }
  .color {
    width: 100%;
    height: 100%;
    max-width: 200px;
    max-height: 50px;
  }
</style>
