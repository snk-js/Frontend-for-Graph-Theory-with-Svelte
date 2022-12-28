<script>
  import Background from "./Background.svelte";
  import Menu from "./uncommon/menu/Menu.svelte";

</script>

<div >
  <Background class='layout'>
    <Menu />
    <slot />
  </Background>
</div>

<style>
  .layout {
    z-index: 2000;
  }
</style>
