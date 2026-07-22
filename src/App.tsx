import { useState, useEffect } from 'react'
import { LinkForm} from './components/LinkForm'
import { LinkList } from './components/LinkList'
import type { LinkItemTypes } from './components/LinkItem'
import './App.css'

function App() {
  // ilocalStorage
  const [links, setLinks] = useState<LinkItemTypes[]>(() => {
    const saved = localStorage.getItem('vault_links');
    return saved ? JSON.parse(saved) : [];
  });

  
  const [currentView, setCurrentView] = useState<'form' | 'list'>('form');

  // Saver to ilocalStorage oko xa kutshintshatshintsha iilink
  useEffect(() => {
    localStorage.setItem('vault_links', JSON.stringify(links));
  }, [links]);

  // ndiswitcher to ilist yam after uAdd
  const handleAddLink = (newLinkData: Omit<LinkItemTypes, 'id'>) => {
    const newLink: LinkItemTypes = {
      id: Date.now(),
      ...newLinkData
    };
    setLinks([newLink, ...links]);
    setCurrentView('list'); // kwipage yelist
  };

  // ukuDeleter
  const handleDeleteLink = (id: number) => {
    setLinks(links.filter(link => link.id !== id));
  };

  // for ukuUpdater
  const handleUpdateLink = (updatedLink: LinkItemTypes) => {
    setLinks(links.map(link => link.id === updatedLink.id ? updatedLink : link));
  };

  return (
     <div className="app-container">
       {currentView === 'form' ? (
         <div>
           <LinkForm onAddLink={handleAddLink} />
           {links.length > 0 && (
             <button onClick={() => setCurrentView('list')} style={{ marginTop: '10px' }}>
               View Saved Links ({links.length})
             </button>
           )}
         </div>
       ) : (
         <LinkList 
           links={links} 
           onDelete={handleDeleteLink} 
           onUpdate={handleUpdateLink} 
           onSwitchToForm={() => setCurrentView('form')}
         />
       )}
     </div>
  )
}

export default App