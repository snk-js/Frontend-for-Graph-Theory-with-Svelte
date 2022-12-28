<script>
  import Background from "./Background.svelte";
  import Menu from "./uncommon/menu/Menu.svelte";
</script>

<div>
  <Menu />
  <Background>
    <slot />
  </Background>
</div>
