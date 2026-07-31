import React, { useState, useEffect } from "react";
import './App.css'
import { LinkForm } from "./components/Form/LinkForm";
import { LinkList } from "./components/LinkF/LinkList";
import type { LinkItemTypes } from "./components/LinkItem";

const App: React.FC = () => {
  const [links, setLinks] = useState<LinkItemTypes[]>([]);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("links");
    if (saved) setLinks(JSON.parse(saved));
  }, []);

  const addLink = (link: LinkItemTypes) => {
    setLinks((prevLinks) =>{
      const updatedLinks = [...prevLinks,link]
      localStorage.setItem('links',JSON.stringify(updatedLinks))
      return updatedLinks
    });
    setShowList(true);
  };

  const deleteLink = (id: number) => {
    const updatedLinks=links.filter(link => link.id !== id)
    localStorage.setItem('links',JSON.stringify(updatedLinks))
    setLinks(updatedLinks);
  };

  const updateLink = (updated: LinkItemTypes) => {
    const updatedLinks=(links.map(link => (link.id === updated.id ? updated : link)));
    localStorage.setItem('links',JSON.stringify(updatedLinks))
    setLinks(updatedLinks);

  };

  return (
    <>
    <div>
      {showList ? (
        <LinkList links={links} onDelete={deleteLink} onEdit={updateLink} onBack={() => setShowList(false)} />
      ) : (
        <LinkForm onAddLink={addLink}
        onView={() => setShowList(true)} />
      )}
  </div>
  </>
  )
};

export default App;
