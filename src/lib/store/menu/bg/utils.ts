import type {BackgroundState} from '@epics/background/types'
import type { BgMenu } from '$lib/store/menu/bg'


export const state_by_id_map = (state: BgMenu): BackgroundState => {
    return Object.keys(state).reduce((acc, key) => (((acc[key]=state[key].state) && acc)||{}), {})
}

export const labels = (state: BgMenu): (string|undefined)[] => Object.values(state).map((setting) =>  setting.label)