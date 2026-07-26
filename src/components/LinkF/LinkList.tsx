 import type { LinkListProps } from "../LinkOutput";
import { useState } from "react";
import type { LinkItemTypes } from "../LinkItem";
import styles from './LinkList.module.css'

export const LinkList: React.FC<LinkListProps> = ({ links, onDelete, onEdit, onBack }) => {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [tags, setTags] = useState("");

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
      <h2 className={styles.savedL}>Saved Links</h2>
      {links.length === 0 ? (
        <p>No links yet</p>
      ) : (
        links.map(link => (
          <div key={link.id} className={styles.linkCard}>
            {editingId === link.id ? (
              <div className={styles.box}>
                <div className={styles.editPage}>
                  <label>title</label>
                <input value={title} onChange={e => setTitle(e.target.value)} />
                <label>description</label>
                <input value={description} onChange={e => setDescription(e.target.value)} />
                <label>url</label>
                <input value={url} onChange={e => setUrl(e.target.value)} />
                <label>tags</label>
                <input value={tags} onChange={e => setTags(e.target.value)} />
                </div>
                <div>
                <button className={styles.MySaveBtn} onClick={() => handleSave(link.id)}>Save</button>
                <button className={styles.MyCancelBtn} onClick={() => setEditingId(null)}>Cancel</button>
                <button className={styles.MyBackBtnn} onClick={onBack}>BackBtn</button>
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
                <button className={styles.MyEditBtn} onClick={() => handleEditClick(link)}>Edit</button>
                <button className={styles.MyDeleteBtn} onClick={() => onDelete(link.id)}>Delete</button>
                <button className={styles.MyBackBtn} onClick={onBack}>BackBtn</button>
              </div>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};
