import React from 'react';
import { Link } from 'react-router-dom';

import './ElementsPage.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
          <div className="sidebar-logo">
              <a className="header_logo">
                <img src="/assets/png/full-logo.png" alt="logo"/>
              </a>
          </div>
          <div className="sidebar--navigation">
            <div className="sidebar-link" id=''>
                  <Link to="/ElementsPage">
                    <button>
                      All
                    </button>
                  </Link>
            </div>
            <div className="sidebar-link" id=''>
                  <Link to="/ButtonsPage">
                    <button>
                      Buttons
                    </button>
                  </Link>
            </div>
            <div className="sidebar-link" id=''>
                  <Link to="/LoadersPage">
                    <button>
                      Loaders
                    </button>
                  </Link>
            </div>
            <div className="sidebar-link" id=''>
                  <Link to="/InputsPage">
                    <button>
                      Inputs
                    </button>
                  </Link>
            </div>
            <div className="sidebar-link" id=''>
                  <Link to="/CheckboxPage">
                    <button>
                      Checkboxes
                    </button>
                  </Link>
            </div>
            <div className="sidebar-link" id=''>
                  <Link to="/RadioPage">
                    <button>
                      Radio Buttons
                    </button>
                  </Link>
            </div>
            <div className="sidebar-link" id=''>
                  <Link to="/FormsPage">
                    <button>
                      Forms
                    </button>
                  </Link>
            </div>
            <div className="sidebar-link" id=''>
                  <Link to="/CardsPage">
                    <button>
                      Cards
                    </button>
                  </Link>
            </div>
            <div className="sidebar-link" id=''>
                  <Link to="/TogglePage">
                    <button>
                      Toggle Switches
                    </button>
                  </Link>
            </div>
            <div className="sidebar-link" id=''>
                  <Link to="/PatternsPage">
                    <button>
                      Patterns
                    </button>
                  </Link>
            </div>
        </div>
        </div>
    );
  };
  
  export default Sidebar;