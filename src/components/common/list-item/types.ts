import type { Component } from "@components/index";
import type Slider from "@components/common/slider/types";
import type Color from "@components/common/color/types";

export type ListItemProp = {
  state?: unknown;
  label?: string;
  component?: Component<string, Slider | Color>;
};
