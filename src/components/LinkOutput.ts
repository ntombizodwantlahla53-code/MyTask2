import type { LinkItemTypes } from "./LinkItem"

export interface LinkListProps {
    links: LinkItemTypes[];
    onDelete: (id: number) => void;
    onUpdate: (updatedLink: LinkItemTypes) => void;
    onSwitchToForm: () => void;
}