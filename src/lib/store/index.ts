import menu_ui_ids from './menu'

const ids = {
    ...menu_ui_ids
}

export const get_ui = (id:string) => {
    return ids[id]
}