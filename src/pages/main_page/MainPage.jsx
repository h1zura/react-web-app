import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './MainPage.css'

import Element from '../../components/element';
import ElementContainer from '../../components/element-container';
import elementsData from '../../components/elementsData';

const MainPage = () => {
  window.scrollTo(0, 0);

  // const [elementsDataState, setElementsData] = useState([]);

  // useEffect(() => {
  //   const fetchElements = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:3001/elements');
  //       setElementsData(response.data.elements);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchElements();
  // }, []);

  // const elementIds = ["1", "11", "9", "23", "8"];

  // const filteredElements = elementsDataState ? elementsData.filter(element => elementIds.includes(element.id)) : [];

  return (
    <main className='MainPage--wrapper'>
      <div className="MainPage-content--wrapper">
        <h1>The best source of UI elements for any project</h1>
        <p>Buy, sell and use creative css elements</p>
            
            <div className="search">
              <input type="search" placeholder='Search for UI elements, creator, type..'/>
              <div className="search--button">
                <img src="/assets/png/search.png" alt="search"/>
                <button>Search</button>
              </div>
            </div>
            <section className='elements-blocks'>
                <div className='elements-marquee_block'>
                      {Object.keys(elementsData)
                          .filter(elementKey => elementKey === "element1")
                        .map((elementKey) => (
                      <Element key={elementKey} data={elementsData[elementKey]}/>
                      ))}
                      {Object.keys(elementsData)
                          .filter(elementKey => elementKey === "element9")
                        .map((elementKey) => (
                      <Element key={elementKey} data={elementsData[elementKey]}/>
                      ))}
                      {Object.keys(elementsData)
                          .filter(elementKey => elementKey === "element23")
                        .map((elementKey) => (
                      <Element key={elementKey} data={elementsData[elementKey]}/>
                      ))}
                      {Object.keys(elementsData)
                          .filter(elementKey => elementKey === "element32")
                        .map((elementKey) => (
                      <Element key={elementKey} data={elementsData[elementKey]}/>
                      ))}
                      {Object.keys(elementsData)
                          .filter(elementKey => elementKey === "element5")
                        .map((elementKey) => (
                      <Element key={elementKey} data={elementsData[elementKey]}/>
                      ))}
                </div>   
                <div className='elements-marquee_block'>
                      {Object.keys(elementsData)
                          .filter(elementKey => elementKey === "element6")
                        .map((elementKey) => (
                      <Element key={elementKey} data={elementsData[elementKey]}/>
                      ))}
                      {Object.keys(elementsData)
                          .filter(elementKey => elementKey === "element12")
                        .map((elementKey) => (
                      <Element key={elementKey} data={elementsData[elementKey]}/>
                      ))}
                      {Object.keys(elementsData)
                          .filter(elementKey => elementKey === "element8")
                        .map((elementKey) => (
                      <Element key={elementKey} data={elementsData[elementKey]}/>
                      ))}
                      {Object.keys(elementsData)
                          .filter(elementKey => elementKey === "element11")
                        .map((elementKey) => (
                      <Element key={elementKey} data={elementsData[elementKey]}/>
                      ))}
                      {Object.keys(elementsData)
                          .filter(elementKey => elementKey === "element10")
                        .map((elementKey) => (
                      <Element key={elementKey} data={elementsData[elementKey]}/>
                      ))}
                </div>
                <div className='elements-marquee_block'>
                      {Object.keys(elementsData)
                          .filter(elementKey => elementKey === "element2")
                        .map((elementKey) => (
                      <Element key={elementKey} data={elementsData[elementKey]}/>
                      ))}
                      {Object.keys(elementsData)
                          .filter(elementKey => elementKey === "element7")
                        .map((elementKey) => (
                      <Element key={elementKey} data={elementsData[elementKey]}/>
                      ))}
                      {Object.keys(elementsData)
                          .filter(elementKey => elementKey === "element13")
                        .map((elementKey) => (
                      <Element key={elementKey} data={elementsData[elementKey]}/>
                      ))}
                      {Object.keys(elementsData)
                          .filter(elementKey => elementKey === "element14")
                        .map((elementKey) => (
                      <Element key={elementKey} data={elementsData[elementKey]}/>
                      ))}
                      {Object.keys(elementsData)
                          .filter(elementKey => elementKey === "element15")
                        .map((elementKey) => (
                      <Element key={elementKey} data={elementsData[elementKey]}/>
                      ))}
                </div>
            </section>
            <div className="all_elements--button button-margin_top" id='ordinary--button'>
                  <Link to="/ElementsPage">
                    <button>
                      Browse all elements
                    </button>
                  </Link>
            </div>
            <h1>We have the most responsive clients!</h1>

            <div className="clients-reviews">
              <div className="clients-review">
                <h3>3,752</h3>
                <p>Elements available, use high quality UI!</p>
              </div>
              <div className="clients-review">
                <h3>100%</h3>
                <p>Satisfied customers who left their reviews!</p>
              </div>
              <div className="clients-review">
                <h3>35,320</h3>
                <p>Number of unique sources purchased!</p>
              </div>
            </div>

            <h3 className='TheMostPopularElements'>The most popular elements</h3>
            <p className='OfAllTime'>of the day</p>

            <div className="elements-mostPopular-block">
                      {Object.keys(elementsData)
                      .filter(elementKey => elementKey === "element16")
                      .map((elementKey) => (
                      <ElementContainer key={elementKey} data={elementsData[elementKey]} />
                      ))}
                      {Object.keys(elementsData)
                      .filter(elementKey => elementKey === "element17")
                      .map((elementKey) => (
                      <ElementContainer key={elementKey} data={elementsData[elementKey]} />
                      ))}
                      {Object.keys(elementsData)
                      .filter(elementKey => elementKey === "element20")
                      .map((elementKey) => (
                      <ElementContainer key={elementKey} data={elementsData[elementKey]} />
                      ))}
            </div>

            <div className="elements-mostPopular-block">
                      {Object.keys(elementsData)
                      .filter(elementKey => elementKey === "element22")
                      .map((elementKey) => (
                      <ElementContainer key={elementKey} data={elementsData[elementKey]} />
                      ))}
                      {Object.keys(elementsData)
                      .filter(elementKey => elementKey === "element18")
                      .map((elementKey) => (
                      <ElementContainer key={elementKey} data={elementsData[elementKey]} />
                      ))}
                      {Object.keys(elementsData)
                      .filter(elementKey => elementKey === "element21")
                      .map((elementKey) => (
                      <ElementContainer key={elementKey} data={elementsData[elementKey]} />
                      ))}
            </div>

            <div className="all_elements--button button-margin_top" id='ordinary--button'>
                  <Link to="/ElementsPage">
                    <button>
                      Browse all elements
                    </button>
                  </Link>
            </div>
        </div>
    </main>
  );
};

export default MainPage;
