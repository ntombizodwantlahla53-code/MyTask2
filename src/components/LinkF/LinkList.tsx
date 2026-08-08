 import type { LinkListProps } from "../LinkOutput";
import { useState } from "react";
import type { LinkItemTypes } from "../LinkItem";
import styles from './LinkList.module.css'
import { MdEditSquare } from "react-icons/md";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { TbRewindBackward10 } from "react-icons/tb";
import { BsFillSave2Fill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import {Search} from './../Search/Search'
import { Buttons} from "./../../components/Buttons/Buttons"
import { TbLinkPlus } from "react-icons/tb";

export const LinkList: React.FC<LinkListProps> = ({ links, onDelete, onEdit, onBack }) => {
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [editingId, setEditingId] = useState<number | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [tags, setTags] = useState("");
  const filteredResults = links.filter((link)=>{
    
    return (
      link.title.includes(searchQuery)||
      link.description.includes(searchQuery)||
      link.url.includes(searchQuery)||
      (link.tags?.includes(searchQuery) || false)
    );
  })
  
  const onSearch=(newValue: string)=>{
    setSearchQuery(newValue)
  }
  
  const handleEditClick = (link: LinkItemTypes) => {
    setEditingId(link.id);
    setTitle(link.title);
    setDescription(link.description);
    setUrl(link.url);
    setTags(link.tags || "");
  };

  const handleSave = (id: number) => {
    onEdit({ id, title, description, url, tags });
    setEditingId(null);


  };
  return (
    <div className={styles.listCcontainer}>
      <Search searchQuery= {searchQuery} onSearch={onSearch}/>
      <div className={styles.Topic}>
      <h2 className={styles.savedL}><TbLinkPlus/> Saved Links <TbLinkPlus/></h2></div>
      <Buttons label="Back"
      icon={<TbRewindBackward10 />}
      onClick={onBack}
      variant="undoBtn"/>
      {links.length === 0 ? (
        <p>No links Available yet</p>
        
      ) : (
        filteredResults.map(link => (
          <div key={link.id} className={styles.linkCard}>
            {editingId === link.id ? (
              <div className={styles.box}>
                <div className={styles.editPage}>
                  <label>title</label>
                <input className={styles.tt} value={title} onChange={e => setTitle(e.target.value)} />
                <label>description</label>
                <input className={styles.descc} value={description} onChange={e => setDescription(e.target.value)} />
                <label>url</label>
                <input className={styles.link} value={url} onChange={e => setUrl(e.target.value)} />
                <label>tags</label>
                <input className={styles.tag} value={tags} onChange={e => setTags(e.target.value)} />
                </div>
                <div>
                <Buttons label="Save"
                icon={<BsFillSave2Fill />}
                onClick={() => handleSave(link.id)}
                variant="inputting"/>

                <Buttons
                label="Cancel"
                icon={<MdCancel />}
                onClick={() => setEditingId(null)}
                variant="undoBtn"/>
              </div>
              </div>
            ) : (
              
              <div className={styles.linkbox}>
                <div className={styles.linksOutp}>
                <h3>{link.title}</h3>
                <p>{link.description}</p>
                <a href={link.url} target="_blank" rel="noopener noreferrer">{link.url}</a>
                <p>{link.tags}</p>
                </div>
                <div>
                <Buttons label="Edit"
                icon={<MdEditSquare />}
                onClick={() => handleEditClick(link)}
                variant="inputting"/>

                <Buttons label="Delete"
                icon={<RiDeleteBin2Fill />}
                onClick={() => onDelete(link.id)}
                variant="danger"/>
              </div>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};
