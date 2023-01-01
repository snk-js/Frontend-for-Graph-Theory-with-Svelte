import { menu_background_state } from ".";

import type { Component } from "@components";
import type { BackgroundState } from "@rares/background/types";
import { labels, components } from "./utils";
import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
// m-bg-k




export const bg_menu_state: Writable<BackgroundState> = writable();

export let bg_menu_labels: (string | undefined)[] = ["option"];

export let bg_menu_components: ( Component | undefined)[] = [
  { type: "none" },
];

export let bg_menu_ids = ['']

menu_background_state.subscribe((state) => {
  bg_menu_labels = labels(state);
  bg_menu_components = components(state);
  bg_menu_ids = Object.keys(state);
});

const ids = {
  "bg-menu-labels": bg_menu_labels,
  "bg-menu-components": bg_menu_components,
  "bg-menu-ids": bg_menu_ids
};

export default ids;
