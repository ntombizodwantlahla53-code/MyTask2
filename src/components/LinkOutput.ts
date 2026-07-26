import type { LinkItemTypes } from "./LinkItem";

export interface LinkListProps {
  links: LinkItemTypes[];
  onDelete: (id: number) => void;
  onEdit: (link: LinkItemTypes) => void;
  onBack: () => void;
  
}
