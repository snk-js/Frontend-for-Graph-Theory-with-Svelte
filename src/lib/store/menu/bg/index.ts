import { writable } from "svelte/store";

 
export const bg_init_state = {
    //background
    color: 'rgb(27, 27, 27)',
    bg_pos_ver: '-19px',
    bg_pos_hor: '-19px',
    //unit square
    size: '50px',
    //point style
    pt_color: 'rgba(255, 255, 255, 0.537) 1px',
    pt_len: '1px',
}

export const background = writable(bg_init_state)

