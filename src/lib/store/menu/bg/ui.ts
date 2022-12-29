import {bg_init_state} from './'

// m-bg-k
const menu_bg_state_keys: string[] = Object.keys(bg_init_state)

// m-bg-lbs
export const menu_bg_labels = menu_bg_state_keys.map((key:string) => {
    return key.replaceAll('_', ' ')
})

const ids = {
    'm-bg-k': menu_bg_state_keys,
    'm-bg-settings': menu_bg_labels
}

export default ids 

