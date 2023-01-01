Welcome, curious person! This is a simple, animated UI for visualizing graph data using the Svelte framework.

The development of this project has been a personal journey in both graph theory and web development. Although these ideas already exist through many javascript libraries, I believe it is a fun and rewardable mental exercise to learn and apply them from scratch, especially since graph theory is a fundamental theory in many scientific fields.

In addition to learning about graph theory, I am also exploring topics such as architectural scalability, state management, best practices in web development, and user experience. I believe that Svelte is a powerful tool that allows me to showcase my skills and learn and apply exciting theories more efficiently.

The ultimate goal of this app is to create a fully dynamic and customizable platform for drawing and animating vertices and edges, with interactive configuration menus that support the fast visualization and testing of graph data structures. This app is intended to be both educational and enjoyable to use.

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

!you must have node 16+ and yarn (or npm)

fetch deps:
```
yarn
```
start app:
```
yarn dev
```
