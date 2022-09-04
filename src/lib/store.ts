import { writable } from "svelte/store";

import { Graph } from "./models/graph";

export const G = new Graph();

export const node_selection = writable("");
