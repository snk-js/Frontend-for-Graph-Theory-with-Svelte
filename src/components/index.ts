import type Slider from "@components/common/slider/types";
import type Color from "@components/common/color/types";

export interface Component {
    type: string;
    settings?: {} extends (Slider | Color)
}