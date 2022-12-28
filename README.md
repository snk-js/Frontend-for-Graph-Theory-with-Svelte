this is a stupidly simple graph visualizer example using svelte framework. Still up to be upgraded. 

this repo includes (or intended to) animated graphs and actor traversing through them using Svelte as framework.

Also, has many different graph data structure conversion like `edge set` to `adjacency list` and some useful algorithms such as
`two-edge-connected-graph` assertion given a `adjacency list`

![localhost_5173 - 15 December 2022](https://user-images.githubusercontent.com/34718184/207974548-eb6db1ea-f912-4257-8751-5d44e96cae22.gif)


roadmap:
- [x] - setup svelte, minimal mock for nodes and edges
- [x] - get large set for dummy data in many different cases
- [x] - algorithms for edge set serialization 
- [x] - create better reactivity using states for node position, index and id
- [x] - draw nodes in the screen in motions
- [x] - add some cool styles to make it look like a twentieth century app
- [ ] - use mathematical sorcery to draw as planar graph
- [ ] - try to draw some cool stuff  
- [ ] - animate agent traversal
- [ ] - add cool transitions to edge and node
- [ ] - test visualization for connectivity and bridges
- [ ] - apply strongly connected components (SCC) algorithm 
- [ ] - add input option panels 
- [ ] - try test this thing for big data visualization
- [ ] - features for clustering
- [ ] - ... ?

how to init the app:

```
yarn dev
```
