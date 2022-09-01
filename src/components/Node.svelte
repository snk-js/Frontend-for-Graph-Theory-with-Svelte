<script >
    import { spring } from 'svelte/motion'
	import { N, node_selection } from '$lib/store'


    export let id;
	export let onMouseDown;

	let coords = spring({ x:100, y: 100 }, {
		stiffness: 0.1,
		damping: 0.25
	});


	N.subscribe(value => {
		coords.set({x: value[id].x, y: value[id].y})
	});


</script>
	<circle
			on:mousedown="{(e) => onMouseDown(e,id)}"
			cx={$coords.x} cy={$coords.y} r={$node_selection === id ? 30 : 10}/>
<style>
	circle {
		fill: #ff3e00;
	}
</style>

