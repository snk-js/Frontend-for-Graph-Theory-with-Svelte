import { menu_background_state } from ".";

import type { Component } from "@components";
import type { BackgroundState } from "@epics/background/types";
import { state_by_id_map, labels, components } from "./utils";
// m-bg-k

export let bg_menu_state: BackgroundState = {
  bg_pos_hor: "-19px",
  bg_pos_ver: "-19px",
  color: "rgba(50, 27, 27, 1)",
  pt_color: "rgba(255, 255, 255, 0.537)",
  pt_len: "1px",
  unit_square_size: "50px",
};

export let bg_menu_labels: (string | undefined)[] = ["option"];

export let bg_menu_components: ( Component | undefined)[] = [
  { type: "none" },
];

export let bg_menu_ids = ['']

menu_background_state.subscribe((state) => {
  bg_menu_state = state_by_id_map(state);
  bg_menu_labels = labels(state);
  bg_menu_components = components(state);
  bg_menu_ids = Object.keys(state);

});

const ids = {
  "bg-menu-labels": bg_menu_labels,
  "bg-menu-state": bg_menu_state,
  "bg-menu-components": bg_menu_components,
  "bg-menu-ids": bg_menu_ids
};

export default ids;
