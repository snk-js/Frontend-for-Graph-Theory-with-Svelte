<script>
  import Background from "@rares/background/Background.svelte";
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
