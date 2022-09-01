<script >
    import { spring } from 'svelte/motion'
	import { N, node_selection } from '$lib/store'

    export let id;
	export let onMouseDown;
	export let index;

	let coords = spring({ x:100, y: 100 }, {
		stiffness: 0.02,
		damping: 0.2,
	});

	N.subscribe(value => {
		console.log(!value[id] ? value : 'not')
		coords.set({x: value[id]?.x, y: value[id]?.y})
	});

</script>
{@debug N}


	<circle
			on:mousedown="{(e) => onMouseDown(e,id)}"
			cx={$coords.x} cy={$coords.y} r={$node_selection === id ? 30 : 10}/>
<style>
	circle {
		fill: #ff3e00;
	}
</style>

