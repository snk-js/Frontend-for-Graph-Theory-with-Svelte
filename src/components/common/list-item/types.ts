 
export type ListItemComponent = {
    type: string,
    settings?: {
        [key:string]: unknown
    }
}

export type ListItemProp = {
    state: unknown;
    label?: string;
    component?: ListItemComponent
}