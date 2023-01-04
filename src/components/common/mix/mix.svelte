<script>
  import Color from "@commons/color/color.svelte";
  import Slider from "@commons/slider/slider.svelte";

  export let id = "";
  export let component = { type: "" };

  let props = { ...component, id };

  const options = {
    color: Color,
    slider: Slider,
  };
</script>

<svelte:component this={options[component.type]} {...props} />

<style>
  .mix {
    height: 100%;
    max-height: 50px;
    z-index: 400;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
