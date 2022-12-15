<div class="cartesian-draw" style="--c: 60; --cx: 30; --cy: 15; --dsize: 6;">
  <slot />
</div>

<style>
  #cartesian-draw_x-3 {
    --size: 100%;
  }
  .cartesian-draw {
    --c: 10;
    --cx: 5;
    --cy: 5;
    --dsize: 10;
    --dcolor: #369;
    --size: 100%;

    --lc: rgba(0, 255, 166, 0.521);
    position: relative;
    width: var(--size);
    height: 0;
    padding-top: var(--size);
    box-sizing: border-box;
    aspect-ratio: 1/1;
    background-image: linear-gradient(
        rgba(223, 37, 37, 0) calc(var(--cy) * 100% / var(--c) - 1px),
        var(--lc) 0 calc(var(--cy) * 100% / var(--c) + 1px),
        transparent 0
      ),
      linear-gradient(
        to right,
        rgba(243, 15, 15, 0) calc(var(--cx) * 100% / var(--c) - 1px),
        var(--lc) 0 calc(var(--cx) * 100% / var(--c) + 1px),
        transparent 0
      ),
      repeating-linear-gradient(
        rgba(15, 98, 51, 0.566) 0 0.5px,
        rgb(15, 31, 35) 0 calc(100% / var(--c) - 0.5px),
        rgb(0, 0, 0) 0 calc(100% / var(--c))
      ),
      repeating-linear-gradient(
        to right,
        rgba(1, 255, 158, 0.279) 0 0.5px,
        rgba(0, 0, 0, 0.989) 0 calc(100% / var(--c) - 0.5px),
        #0002 0 calc(100% / var(--c))
      );
  }

  .cartesian-draw.no-overflow {
    overflow: hidden;
  }
</style>
