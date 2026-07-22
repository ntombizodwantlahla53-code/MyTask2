export interface LinkItemTypes{
    id:number;
    title:string;
    description:string;
    url:string;
    tags?:string;
}

export interface LinkFormProps{
    onAddLink:(link:LinkItemTypes) => void
}
