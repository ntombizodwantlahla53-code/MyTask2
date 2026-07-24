import React, { useState, useEffect } from "react";
import './App.css'
import { LinkForm } from "./components/Form/LinkForm";
import { LinkList } from "./components/LinkF/LinkList";
import type { LinkItemTypes } from "./components/LinkItem";

const App: React.FC = () => {
  const [links, setLinks] = useState<LinkItemTypes[]>([]);
  const [showList, setShowList] = useState(false);

  // useEffect(() => {
  //   const saved = localStorage.getItem("links");
  //   if (saved) setLinks(JSON.parse(saved));
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("links", JSON.stringify(links));
  // }, [links]);

  const addLink = (link: Omit<LinkItemTypes, "id">) => {
    setLinks([...links, { id: Date.now(), ...link }]);
    setShowList(true);
  };

  const deleteLink = (id: number) => {
    setLinks(links.filter(link => link.id !== id));
  };

  const updateLink = (updated: LinkItemTypes) => {
    setLinks(links.map(link => (link.id === updated.id ? updated : link)));
  };

  return (
    <>
    <div>
      {showList ? (
        <LinkList links={links} onDelete={deleteLink} onEdit={updateLink} />
      ) : (
        <LinkForm onAddLink={addLink} />
      )}
  </div>
  </>
  )
};

export default App;
