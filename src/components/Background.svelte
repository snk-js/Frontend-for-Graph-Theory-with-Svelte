<script>

</script>

  <div class="grid" style="
      --bg:rgb(27, 27, 27);
      --unit: 50px;
    ">
    <slot />

</div>

<style>


  .grid {
    background: var(--bg);
    background-image: radial-gradient(rgba(255, 255, 255, 0.537) 1px, transparent 0);
    background-size: var(--unit) var(--unit);
    
    height: 100vw;
    min-width: 1200px;
    min-height: 2000px;
    background-position: -19px -19px;

  }
</style>
