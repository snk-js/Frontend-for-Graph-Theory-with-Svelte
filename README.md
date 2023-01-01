Welcome, curious person! This is a simple, animated UI for visualizing graph data using the Svelte framework.

The development of this project has been a personal journey in both graph theory and web development. Although these ideas already exist through many javascript libraries, I believe it is a fun and rewardable mental exercise to learn and apply them from scratch, especially since graph theory is a fundamental theory in many scientific fields.

In addition to learning about graph theory, I am also exploring topics such as architectural scalability, state management, best practices in web development, and user experience. I believe that Svelte is a powerful tool that allows me to showcase my skills and learn and apply exciting theories more efficiently.

The ultimate goal of this app is to create a fully dynamic and customizable platform for drawing and animating vertices and edges, with interactive configuration menus that support the fast visualization and testing of graph data structures. This app is intended to be both educational and enjoyable to use.

![localhost_5173 - 15 December 2022](https://user-images.githubusercontent.com/34718184/207974548-eb6db1ea-f912-4257-8751-5d44e96cae22.gif)


roadmap:
### begin:
- [x] - setup svelte, minimal mock for nodes and edges
- [x] - collect dummy data and verificability for many diffirent graph types:"
* undirected graph;
* directed graph;
* weighted graph;
* complete graph;
* bipartite graph;
* three;
- [x] - create basic algorithms for edge set to adjacency list conversions; 
- [x] - create better reactivity using states for node position, index and id
- [x] - draw nodes in the screen using motions
- [x] - add some cool styles to make it look like a twentieth century app
- [ ] - make minimal scabalable menu to hold configuration and settings of the many entities app will have
- [ ] - add Sugiyama layout algorithm on drawing planar graphs.
- [ ] - apply planar graph drawing
- [ ] - animate agent traversal

uncommon graph types:
* planar graph;
* multigraph;
* pseudo graph;
* multiple connected components graph;
* graph with loops;

optional:
- [ ] - add support for coloring areas
- [ ] - try to draw some cool stuff  
- [ ] - TODO: find an good algorithm to transform non-planar into planar
- [ ] - add cool transitions to edge and node
- [ ] - test visualization for connectivity and bridges
- [ ] - apply strongly connected components (SCC) algorithm 
- [ ] - TODO: search strategy for big data visualization
- [ ] - TODO: search features for clustering
- [ ] - ... ?

### Initialize the app:
you should have node 16+ and yarn (or npm)

fetch deps:
```
yarn
```
start app:
```
yarn dev
```


# Graph draw

## layouts:

There are many different graph layout algorithms that can be used to arrange the nodes and edges of a graph in a visually appealing way. Here are a few examples of common graph layout algorithms:

* Force-directed layout: This type of layout algorithm works by simulating the forces acting on the nodes of the graph, such as spring forces or gravitational forces, and using these forces to determine the final positions of the nodes. Examples of force-directed layout algorithms include the Fruchterman-Reingold algorithm and the Kamada-Kawai algorithm.

* Circular layout: This type of layout algorithm arranges the nodes of the graph in a circular shape, with the edges connecting the nodes forming radii. Circular layout algorithms are often used for graphs that have a hierarchical or tree-like structure.

* Hierarchical layout: This type of layout algorithm is often used for graphs that have a tree-like or hierarchical structure, and arranges the nodes in a tree-like shape with the parent nodes positioned above their children.

* Orthogonal layout: This type of layout algorithm arranges the nodes of the graph in a grid-like shape, with the edges connecting the nodes drawn as straight lines. Orthogonal layout algorithms are often used for graphs that have a grid-like structure or that represent networks.

* Sugiyama layout: This type of layout algorithm is specifically designed for drawing planar graphs (graphs that can be drawn on a plane without any of the edges crossing). The Sugiyama layout algorithm is a multi-step algorithm that assigns nodes to layers, minimizes the number of edge crossings, and assigns horizontal and vertical coordinates to the nodes.
