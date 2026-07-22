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
    
    <div className="link-form-container">
          <h1 className="form-title">Task2 LinkApp</h1>

          <form onSubmit={handleSubmit} className="todo-wrapper">
            <div className="todo-input">
              <div className="todo-input-item">
              <label>Title</label>
              <input 
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="tgyuhij"
                className="input-field"
              />
            </div>
            <div className="todo-input-item">
              <label>Description</label>
              <input 
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="yguhij"
                className="input-field"
              />
            </div>
            <div className="todo-input-item">
              <label>URL</label>
              <input 
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="tyguhbinj"
                className="input-field"
              />
            </div>
            <div className="todo-input-item">
              <label>Tags</label>
              <input 
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="njkls"
                className="input-field"
              />
            </div>
            <div className="todo-input-item">
              <button type="submit" className='AddBtn'>Add</button> 
            </div>
          </div>
        </form>
    </div>
  )
}