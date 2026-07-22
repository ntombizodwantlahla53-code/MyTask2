import type{ LinkListProps } from "./LinkOutput"
import {useState} from "react"

export const LinkList : React.FC<LinkListProps> =() =>{
    
const [editingtitle, setEditingTitle] = useState('')
const [editingdescription, setEditingDescription] = useState('')
const [editingurl, setEditingUrl] = useState('')
const [editingtags, setEditingTags] = useState('')
}