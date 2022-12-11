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
    color: rgb(39, 39, 39);
    font-size: 0.75rem;
  }
  .name {
    font-size: 0.75rem;

    font-weight: 900;
    margin-bottom: 0.5rem;
    color: rgb(31, 31, 31);
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
    max-width: 200px;
    width: fit-content;

    overflow: auto;

    background: rgb(182, 251, 182, 0.1);
  }
</style>
