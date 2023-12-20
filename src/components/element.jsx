import React from 'react';

const Element = ({ data }) => {
  const uniqueClass = `element-${data.metadata.id}`;

  return (
    <div className="elements-block">
        <div className={uniqueClass} dangerouslySetInnerHTML={{ __html: data.html }}></div>
        <style>{`.${uniqueClass} ${data.css}`}</style>
    </div>
  );
};

export default Element;
