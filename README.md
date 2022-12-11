this is a stupidly simple graph visualizer example using svelte framework. Still up to be upgraded. 

this repo includes (or intended to) animated graphs and actor traversing through them using Svelte as framework.

Also, has many different graph data structure conversion like `edge set` to `adjacency list` and some useful algorithms such as
`two-edge-connected-graph` assertion given a `adjacency list`

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

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
