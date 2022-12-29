<script>
  import Background from "./Background.svelte";
  import Menu from "./uncommon/menu/Menu.svelte";

</script>

<div >
  <Background>
    <Menu />
    <slot />
  </Background>
</div>

<style>

</style>
