import {useState} from "react"
import type{ LinkItemTypes } from "./LinkItem"
import type{ LinkFormProps } from "./LinkItem"

export const LinkForm : React.FC<LinkFormProps> =({onAddLink}) =>{
const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
const [url, setUrl] = useState('')
const [tags, setTags] = useState('')

const handleSubmit=(e.React.FormEvent) =>{
    
}
}

  return (
    <div className="linkForm">
          <h1 >Task2 LinkApp</h1>

          <div className="todo-wrapper">
            <div className="todo-input">
              <div className="todo-input-item">
              <label>Title</label>
              <input type= "text"
              placeholder="faka text">
              </input>
            </div>
            <div className="todo-input-item">
              <label>Description</label>
              <input type= "text"
              placeholder="faka text">
              </input>
            </div>
            <div className="todo-input-item">
              <label>URL</label>
              <input type= "text"
              placeholder="faka text">
              </input>
            </div>
            <div className="todo-input-item">
              <label>Tags</label>
              <input type= "text"
              placeholder="faka text">
              </input>
            </div>
            <div className="todo-input-item">
              <button type="button" className='AddBtn'>Add</button>
              </div>
</div>
          </div>
          </div>
  )
}