 import type { LinkListProps } from "./LinkOutput"
import { useState } from "react"
import type { LinkItemTypes } from "./LinkItem"

export const LinkList: React.FC<LinkListProps> = ({ links, onDelete, onUpdate, onSwitchToForm }) => {
    const [editingId, setEditingId] = useState<number | null>(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [tags, setTags] = useState('');

    const handleEditClick = (link: LinkItemTypes) => {
        setEditingId(link.id);
        setTitle(link.title);
        setDescription(link.description);
        setUrl(link.url);
        setTags(link.tags || '');
    };

    const handleSave = (id: number) => {
        onUpdate({id, title, description,url,tags});
        setEditingId(null);
    };

    return (
        
        <div className="link-list-container">
            <h2>Saved Links</h2>
            <button onClick={onSwitchToForm} className="switch-btn">+ Add Another Link</button>

            {links.length === 0 ? (
                <p>No links</p>
            ) : (
                links.map((link) => (
                    
                    <div key={link.id} className="link-card">
                        {editingId === link.id ? (
                            <div className="edit-box">
                                <input value={title} onChange ={(e) => setTitle(e.target.value)}/>
                                <input value={description} onChange ={(e) => setDescription(e.target.value)}/>
                                <input value={url} onChange ={(e) => setUrl(e.target.value)}/>
                                <input value={tags} onChange ={(e) => setTags(e.target.value)}/>
                                <button className="save-btn" onClick={() => handleSave(link.id)}>Save</button>
                                <button className="cancel-btn" onClick={() => setEditingId(null)}>Cancel</button>
                            </div>
                        ) : (
                            <div>
                                <h3>{link.title}</h3>
                                <p>{link.description}</p>
                                <a>{link.url}</a>
                                <p>{link.tags}</p>
                                <button className="edit-btn" onClick={() => handleEditClick(link)}>Edit</button>
                                <button className="delete-btn" onClick={() => onDelete(link.id)}>Delete</button>
                            </div>
                        )}
                    </div>
                ))
            )}
        </div>
    );
}