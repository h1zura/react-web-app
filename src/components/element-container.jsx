import React from 'react';
import { useNavigate } from 'react-router-dom'
import Element from './element';

const ElementContainer = ({ id, data }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    return navigate(`/ElementsPage/${id}`)
  }

  return (
    <div className="element-container" onClick={ handleClick }>
        <Element key={data.metadata.id} data={data}/>
        <div className="element-container--metadata">
            <p>{data.metadata.creator}</p>
            <aside>
                <p>{data.metadata.views} Views</p>
            </aside>
        </div>
    </div>
  );
};

export default ElementContainer;

