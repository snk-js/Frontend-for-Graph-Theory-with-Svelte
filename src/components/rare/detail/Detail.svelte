<script>
  export let content;
</script>

<div class="detail">
  {#each Object.entries(content) as [name, value], i}
    <div class="stats">
      <span class="name">
        {name}
      </span>
      ::
      <span class="value">
        {value}
      </span>
    </div>
  {/each}
</div>

<style>
  .stats {
    display: flex;
  }

  .value {
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: rgb(81, 215, 112);
    font-size: 0.5rem;
  }
  .name {
    font-size: 0.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: rgb(239, 235, 198);
  }

  .detail {
    display: flex;
    flex-direction: column;

    border: 1px solid rgb(255, 60, 138);

    padding: 0.5rem 0 0 0.5rem;
    z-index: 1000;

    position: relative;

    left: 20px;
    top: 20px;
    min-width: 3rem;
    max-width: 150px;
    width: fit-content;

    overflow: auto;

    background: rgb(182, 251, 182, 0.1);
  }
</style>
