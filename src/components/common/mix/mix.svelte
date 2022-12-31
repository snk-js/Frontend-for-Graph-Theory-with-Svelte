<script>
  import Color from "@commons/color/color.svelte";
  import Slider from "@commons/slider/slider.svelte";
  import { onMount } from "svelte";
  export let id = "";
  export let component = { type: "" };

  let props = { ...component, id };

  onMount(() => {
    console.log({ id }, { component });
  });
  const options = {
    color: Color,
    slider: Slider,
  };
</script>

<svelte:component this={options[component.type]} {...props} />
