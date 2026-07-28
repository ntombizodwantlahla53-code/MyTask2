import { useState } from "react";
import type { LinkFormProps } from "../LinkItem";
import styles from './LinkForm.module.css'
import { CiSaveDown2 } from "react-icons/ci";
import { IoIosAddCircle } from "react-icons/io";

export const LinkForm: React.FC<LinkFormProps> = ({ onAddLink, onView }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [tags, setTags] = useState("");
  


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !url) return;

    onAddLink({ id: Date.now(), title, description, url, tags });


    setTitle(""); setDescription(""); setUrl(""); setTags("");
  
  };

  return (
    <div className={styles.linkContainer}>
    <div className={styles.Topic}>
          <h1 className={styles.Mytitle}>LinkVault</h1>
          </div>
    <form onSubmit={handleSubmit}>
      <div className={styles.insideContainer}>
        <div className={styles.linkss}>
        <div className={styles.title}>
          <label>Title</label>
          <input className={styles.inputtitle} value={title} onChange={e => setTitle(e.target.value)} placeholder="Add Your Title here" required />
          </div>
          <div className={styles.desc}>
          <label>Description</label>
          <input className={styles.inputdesc} value={description} onChange={e => setDescription(e.target.value)} placeholder="Add Your Description here" />
          </div>
          <div className={styles.url}>
          <label>Url</label>
          <input className={styles.inputurl} value={url} onChange={e => setUrl(e.target.value)} placeholder="Add Your URL/Link here" required />
          </div>
          <div className={styles.tags}>
          <label>Tags</label>
          <input className={styles.inputtags} value={tags} onChange={e => setTags(e.target.value)} placeholder="Add Tag(it is optional)" />
      </div>
      
      <button className={styles.MyButton}><IoIosAddCircle/>Add</button>
      <button type="button" className={styles.MyButton} onClick={onView}><CiSaveDown2/>View Links</button>
    </div>
      </div>
    </form>
    </div>
  );
};
