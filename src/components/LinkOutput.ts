import type{ LinkItemTypes } from "./LinkItem"
export interface LinkListProps{
    links:LinkItemTypes[];
    onDelete:() =>void
    onUpdate:() =>void

}
