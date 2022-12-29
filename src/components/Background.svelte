<script>
  import {background} from '$lib/store/menu/bg'

  const {color, size, pt_color, pt_len, bg_pos_hor, bg_pos_ver} = $background

</script>

  <div class="grid" style={`
      --bg: ${color};
      --unit: ${size};
      --pt_color: ${pt_color};
      --pt_len: ${pt_len};
      --bg_pos_hor: ${bg_pos_hor};
      --bg_pos_ver: ${bg_pos_ver};

    `}>
    <slot />

</div>

<style>


  .grid {
    background: var(--bg);
    background-image: radial-gradient(var(--pt_color) var(--pt_len), transparent 0);
    background-size: var(--unit) var(--unit);
    background-position: var(--bg_pos_ver) var(--bg_pos_hor);
    height: 100vw;
    min-width: 1200px;
    min-height: 2000px;

  }
</style>
