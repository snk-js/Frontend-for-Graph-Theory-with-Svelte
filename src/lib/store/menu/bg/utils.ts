import type {BackgroundState} from '@rares/background/types'
import type { BgMenu } from '$lib/store/menu/bg'
import type { Component } from '@components/index'

export const state_by_id_map = (state: BgMenu): BackgroundState => {
    return Object.keys(state).reduce((acc, key) => (((acc[key]=state[key].state) && acc)||{}), {})
}

export const labels = (state: BgMenu): (string|undefined)[] => Object.values(state).map((setting) =>  setting.label)

export const components = (state: BgMenu): 
    (Component |undefined)[] => Object.values(state).map((prop) => prop.component)