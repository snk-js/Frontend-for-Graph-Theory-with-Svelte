
<button class="button-base" style="--color-icon:rgb(65, 163, 61) ">
        <slot/>
</button>

<style>

    .button-base {
        background: transparent;
        color: var(--color-icon);
        border: none;
        box-sizing: border-box;
        position: relative;
        height: 100%;
        border-radius: 10px;
    }

    .button-base:hover {
        background: rgba(82, 82, 82, 0.368)
    }
</style>