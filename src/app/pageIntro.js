// PageIntro.js
import React from 'react';

function PageIntro({ eyebrow, title, children }) {
  return (
    <div className="page-intro">
      <h1 className="page-intro-eyebrow">{eyebrow}</h1>
      <h2 className="page-intro-title">{title}</h2>
      <div className="page-intro-content">{children}</div>
    </div>
  );
}

export default PageIntro;
