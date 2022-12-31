import { writable } from "svelte/store";
import type { ListItemProp } from "@commons/list-item/types";


export type BgMenu = {
    [key: string]: ListItemProp
}

const color: ListItemProp = {
  label: "color",
  state: "rgb(27, 27, 27)",
  component: {
    type: "color",
  },
};
const bg_pos_ver: ListItemProp = {
  label: "vertical position",
  state: "-19px",
  component: {
    type: "slider",
    settings: {
      from: -50,
      to: 50,
      default: 19,
      pace: 1,
    },
  },
};

const bg_pos_hor: ListItemProp = {
  label: "horizontal position",
  state: "-19px",
  component: {
    type: "slider",
    settings: {
      from: -50,
      to: 50,
      default: 19,
      pace: 1,
    },
  },
};
const unit_square_size: ListItemProp = {
  state: "50px",
  label: "size",
  component: {
    type: "slider",
    settings: {
      from: -100,
      to: 100,
      default: 50,
      pace: 1,
    },
  },
};
const pt_color: ListItemProp = {
  label: "point color",
  state: "rgba(255, 255, 255, 0.537)",
  component: {
    type: "color",
  },
};
const pt_len: ListItemProp = {
  label: "point length",
  state: "1px",
  component: {
    type: "slider",
    settings: {
      from: 0,
      to: 10,
      pace: 0.2,
      default: 1,
    },
  },
};

export const bg_menu_list_items: BgMenu = {
  //background
  bg_pos_ver,
  color,
  bg_pos_hor,
  //unit square
  unit_square_size,
  //point style
  pt_color,
  pt_len
};

export const menu_background_state = writable(bg_menu_list_items);
