import React from 'react';
import { Link } from 'react-router-dom';

import './ElementsPage.css';

import Sidebar from './Sidebar';
import ElementContainer from '../../components/element-container';
import elementsData from '../../components/elementsData';

const PatternsPage = () => {
    window.scrollTo(0, 0);
    return(
       <div className="ElementsPage--wrapper">
            <div className="ELementsPage-content--wrapper">
                <Sidebar/>
                <main className='elements-block--wrapper'>
                    <div className="elements-block--navbar">
                        <div className="elements-block--navbar_buttons">
                            <div className="HomePage--button elements-block--navbar_button">
                                <Link to="/MainPage">
                                    <button>
                                        Go Home
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
                    <div className="allElements-block">
                        {Object.keys(elementsData)
                        .filter(elementKey => elementsData[elementKey]?.metadata?.type === 'pattern')
                        .map((elementKey) => (
                        <ElementContainer key={elementKey} id={elementKey} data={elementsData[elementKey]}/>))}
                    </div>
                </main>
            </div>
       </div>
    )
}   

export default PatternsPage;