import React from 'react';

function Tile({ title, links }) {
  return (
    <div className="tile">
      <h3>{title}</h3>
      {links.map((link, index) => (
        <p key={index}><a href={link.url}>{link.text}</a></p>
      ))}
    </div>
  );
}