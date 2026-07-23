import { useState } from "react";
import type { LinkFormProps } from "./LinkItem";

export const LinkForm: React.FC<LinkFormProps> = ({ onAddLink }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [tags, setTags] = useState("");
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !url) return;

    onAddLink({ title, description, url, tags });

    setTitle(""); setDescription(""); setUrl(""); setTags("");
  ("/links");
  };

  return (
    <div className="linkContainer">
    <div className="Topic">
          <h1 className="Mytitle">Task2 LinkApp</h1>
          </div>
    <form onSubmit={handleSubmit}>
      <div className="divv">
        <div className="linkss">
          <label>Title</label>
          <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Add Your Title here" required />
          <label>Description</label>
          <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Add Your Description here" />
          <label>Url</label>
          <input value={url} onChange={e => setUrl(e.target.value)} placeholder="Add Your URL/Link here" required />
          <label>Tags</label>
          <input value={tags} onChange={e => setTags(e.target.value)} placeholder="Add Tag(it is optional)" />
      </div>
      <button className= "MyButton"type="submit">Add</button>
    
      </div>
    </form>
    </div>
  );
};
