import { menu_background_state } from '.'
import { derived } from 'svelte/store';
import type {Readable} from 'svelte/store'
import type { BackgroundState } from '@epics/background/types';
import {state_by_id_map, labels} from './utils'
// m-bg-k

export let bg_menu_state: BackgroundState = {
    bg_pos_hor: "-19px",
    bg_pos_ver: "-19px",
    color: "rgb(27, 27, 27)",
    pt_color: "rgba(255, 255, 255, 0.537)",
    pt_len: "1px",
    unit_square_size: "50px"
}

export let bg_menu_labels: (string|undefined)[] = [
    'option'
]


menu_background_state.subscribe((state) => {
    bg_menu_state = state_by_id_map(state);
    bg_menu_labels = labels(state);
})

export const bg_menu_components: Readable<string[]> = derived(
    menu_background_state, 
    $menu_background_state => Object.values(menu_background_state)  
) 


const ids = {
    'bg-menu-labels': bg_menu_labels,
    'bg-menu-state': bg_menu_state,
    'bg-menu-components': bg_menu_components
}

export default ids
