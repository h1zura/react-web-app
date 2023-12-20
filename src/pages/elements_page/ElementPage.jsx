import React from 'react';
import { Link, useParams} from 'react-router-dom';
import ClipboardJS from 'clipboard'; 

import './ElementsPage.css'

import Sidebar from './Sidebar';
import elementsData from '../../components/elementsData';

const ElementPage = () => {
  const { id } = useParams()
  const data = elementsData[id]

  if (!data) {
    throw new Error('Not defined')
  }

  window.scrollTo(0, 0);

  const clipboardHTML = new ClipboardJS('#copy-html', {
    text: function () {
      return data.html;
    },
  });

  const clipboardCSS = new ClipboardJS('#copy-css', {
    text: function () {
      return data.css;
    },
  });

  React.useEffect(() => {
    return () => {
      clipboardHTML.destroy();
      clipboardCSS.destroy();
    };
  }, [clipboardHTML, clipboardCSS]);

  return (
    <div className="ElementsPage--wrapper">
            <div className="ELementsPage-content--wrapper elementById-wrapper">
                <Sidebar/>
                <main className='elements-block--wrapper'>
                    <div className="elements-block--navbar">
                        <div className="elements-block--navbar_buttons">
                            <div className="HomePage--button elements-block--navbar_button">
                                <Link to="/ElementsPage">
                                    <button>
                                        Go Back
                                    </button>
                                </Link>
                            </div> 
                            <div className="AllElements--dropdown">
                                <Link to="/MainPage">
                                    <button>
                                        All Elements dropdown
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="search elementById-search">
                          <input type="search" placeholder='Search for UI elements'/>
                          <div className="search--button elementById-search--button">
                            <img src="/assets/png/search-white.png" alt="search"/>
                            <button>Search</button>
                          </div>
                        </div>
                    </div>
                    <div className="element--block">
                        {/* <h2>{data.metadata.name}</h2> */}
                      <div className="elements-block elementById-block">
                        <div dangerouslySetInnerHTML={{ __html: data.html }}></div>
                        <style>{data.css}</style>
                      </div>
                      <div className="elementByID-code" style={{ maxWidth:'54rem', overflowX:'auto', overflowWrap: 'break-word', textAlign: 'left', padding: '1rem', scrollbarWidth: 'thin'}}>
                        <div className="code-lines">
                          {data.css.split('\n').map((line, index) => {
                            const classMatch = line.match(/^\s*\.([^\s{]+)\s*{/); 
                            const idMatch = line.match(/^\s*#([^\s{]+)\s*{/); 
                            
                            if (classMatch && classMatch[1]) {
                              const className = classMatch[1];
                              return (
                                <div key={index}>
                                  <span style={{ color: 'var(--orange-color)', fontSize: '1.6rem' }}>.{className}</span>
                                  <span style={{ color: 'var(--white-color)', fontSize: '1.6rem'}}>{line.replace(`.${className}`, '')}</span>
                                </div>
                              );
                            } else if (idMatch && idMatch[1]) {
                              const idName = idMatch[1];
                              return (
                                <div key={index}>
                                  <span style={{ color: 'var(--orange-color)', fontSize: '1.6rem' }}>#{idName}</span>
                                  <span style={{ color: 'var(--white-color)', fontSize: '1.6rem' }}>{line.replace(`#${idName}`, '')}</span>
                                </div>
                              );
                            }
                              return (
                                <div key={index}>
                                  <span style={{ color: 'var(--white-color)', fontSize: '1.6rem',whiteSpace: 'pre-wrap' }}>{line}</span>
                                </div>
                              );
                          })}
                        </div>
                      </div>
                  </div>
                  <div className="element-info--wrapper">
                    <div className="info-info">
                      <h2>UI name: {data.metadata.name}</h2>
                      <h2>Creator: {data.metadata.creator}</h2>
                      <h2>Views: {data.metadata.views}</h2>
                    </div>
                     <div className="elements-info-wrapper--buttons elements-block--navbar_buttons">
                      <div className="elements-block--navbar_button">
                        <button id="copy-html" className="">
                          Copy HTML
                        </button>
                      </div>
                      <div className="elements-block--navbar_button">
                        <button id="copy-css" className="">
                          Copy CSS
                        </button>
                      </div>
                    </div>
                  </div>
                </main>
            </div>
       </div>
  );
};

export default ElementPage;