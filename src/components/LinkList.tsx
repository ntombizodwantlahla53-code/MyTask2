 import type { LinkListProps } from "./LinkOutput"
import { useState } from "react"
import type { LinkItemTypes } from "./LinkItem"

export const LinkList: React.FC<LinkListProps> = ({ links, onDelete, onUpdate, onSwitchToForm }) => {
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editingtitle, setEditingTitle] = useState('');
    const [editingdescription, setEditingDescription] = useState('');
    const [editingurl, setEditingUrl] = useState('');
    const [editingtags, setEditingTags] = useState('');

    const handleEditClick = (link: LinkItemTypes) => {
        setEditingId(link.id);
        setEditingTitle(link.title);
        setEditingDescription(link.description);
        setEditingUrl(link.url);
        setEditingTags(link.tags || '');
    };

    const handleSave = (id: number) => {
        onUpdate({
            id,
            title: editingtitle,
            description: editingdescription,
            url: editingurl,
            tags: editingtags
        });
        setEditingId(null);
    };

    return (
        
        <div className="link-list-container">
            <h2>Saved Links</h2>
            <button onClick={onSwitchToForm} className="switch-btn">+ Add Another Link</button>

            {links.length === 0 ? (
                <p>No links saved yet.</p>
            ) : (
                links.map((link) => (
                    
                    <div key={link.id} className="link-card">
                        {editingId === link.id ? (
                            <div className="edit-box">
                                <input className="input-field" type="text" value={editingtitle} onChange={(e) => setEditingTitle(e.target.value)} />
                                <input className="input-field" type="text" value={editingdescription} onChange={(e) => setEditingDescription(e.target.value)} />
                                <input className="input-field" type="text" value={editingurl} onChange={(e) => setEditingUrl(e.target.value)} />
                                <input className="input-field" type="text" value={editingtags} onChange={(e) => setEditingTags(e.target.value)} />
                                <button className="save-btn" onClick={() => handleSave(link.id)}>Save</button>
                                <button className="cancel-btn" onClick={() => setEditingId(null)}>Cancel</button>
                            </div>
                        ) : (
                            <div>
                                <h3 className="card-title">{link.title}</h3>
                                <p className="card-desc">{link.description}</p>
                                <a className="card-url" href={link.url} target="_blank" rel="noopener noreferrer">{link.url}</a>
                                <p className="card-tags"><small>Tags: {link.tags}</small></p>
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