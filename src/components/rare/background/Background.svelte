<script>
  import { menu_background_state } from "$lib/store/menu/bg";
  import { state_by_id_map } from "$lib/store/menu/bg/utils";

  let bg_state;

  menu_background_state.subscribe((state) => {
    bg_state = state_by_id_map(state);
  });
</script>

<div
  class="grid"
  style={`
      --bg: ${bg_state.color};
      --unit: ${bg_state.unit_square_size};
      --pt_color: ${bg_state.pt_color};
      --pt_len: ${bg_state.pt_len};
      --bg_pos_hor: ${bg_state.bg_pos_hor};
      --bg_pos_ver: ${bg_state.bg_pos_ver};

    `}
>
  <slot />
</div>

<style>
  .grid {
    background: var(--bg);
    background-image: radial-gradient(
      var(--pt_color) var(--pt_len),
      transparent 0
    );
    background-size: var(--unit) var(--unit);
    background-position: var(--bg_pos_ver) var(--bg_pos_hor);
    height: 100vw;
    min-width: 1200px;
    min-height: 2000px;
  }
</style>
