import { useState } from "react"
import type { LinkFormProps } from "./LinkItem"

export const LinkForm: React.FC<LinkFormProps> = ({ onAddLink }) => {
const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
const [url, setUrl] = useState('')
const [tags, setTags] = useState('')

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !url) return;

    onAddLink({ title, description, url, tags });

    setTitle('');
    setDescription('');
    setUrl('');
    setTags('');
};

  return (
    <div className="linkContainer">
    <div className="Topic">
          <h1 className="form-title">Task2 LinkApp</h1>
          </div>
      
          <form onSubmit={handleSubmit} className="todo-wrapper">
            <div className="divv">
              <div className="linkss">
              <div>
              <label>Title</label>
              <input 
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter Text Here"
                className="input-field"/>
            </div>
            <div>
              <label>Description</label>
              <input 
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter Description Text"
                className="input-field"/>
            </div>
<div>
              <label>URL</label>
              <input 
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter Your Link"
                className="input-field"/>
            </div>
            <div>
              <label>Tags</label>
              <input 
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="Your Tag here"
                className="input-field"/>
            </div>
            </div>
            
              <button className= "MyButton">Add</button> 
              
            
          </div>
        </form>
     
    </div>
  )
}