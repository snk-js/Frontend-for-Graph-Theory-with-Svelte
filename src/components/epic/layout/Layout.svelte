<script>
  import Background from "@epics/background/Background.svelte";
  import Menu from "@uncommons/menu/Menu.svelte";
</script>

<div>
  <Background>
    <Menu />
    <slot />
  </Background>
</div>

<style>
</style>
