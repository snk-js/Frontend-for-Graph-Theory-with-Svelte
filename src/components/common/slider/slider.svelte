<script>
  export let value = 0;
  export let min = 0;
  export let max = 100;
  export let step = 1;
</script>

<div />

<input
  type="range"
  bind:value
  {min}
  {max}
  {step}
  on:input={(event) => {
    value = event.target.value;
  }}
/>

<!-- Slider.svelte -->
<style>
  /* Add styles for the slider here */
</style>
