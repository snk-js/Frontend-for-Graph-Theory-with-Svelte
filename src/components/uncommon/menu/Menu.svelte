<script>
  import BackgroundIcon from "svelte-icons/md/MdBlurOn.svelte";
  import ButtonBase from "../../common/button-base.svelte";
</script>

<div class="menu">
  <div class="main-panel">
    <div class="panel-row">
      <ButtonBase popover={{ labels_id: "m-bg-settings" }}>
        <BackgroundIcon />
      </ButtonBase>
    </div>
  </div>
</div>

<style>
  .panel-row {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .main-panel {
    padding: 0.75rem;
    box-sizing: border-box;
    width: 100%;
    max-width: 700px;
    height: 65px;
    margin: 2rem;
    border-radius: 1rem;
    background: rgba(1, 1, 1, 0.607);
    color: rgb(86, 177, 50);
  }

  .menu {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
