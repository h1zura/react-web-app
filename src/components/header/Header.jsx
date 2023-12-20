import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'

const Header = () => {  
    return (
        <header className="header">
            <div className="header-wrapper">
                <nav className="header_buttons--left">
                    <div className="all_elements--button" id='ordinary--button'>
                        <Link to="/ElementsPage">
                            <button>
                                Elements
                            </button>
                        </Link>
                    </div>                    
                    <div className="create_element--button" id='ordinary--button'>
                        <Link to="/">
                            <button>
                                Create
                            </button>
                        </Link>
                    </div>
                </nav>
                <a className="header_logo">
                    <img src="/assets/svg/logo.svg" alt="logo"/>
                </a>
                <nav className="header_buttons--right">
                    <div className="login--button" id='ordinary--button'>
                        <Link to="/">
                            <button>
                                Sign In
                            </button>
                        </Link>
                    </div>                    
                    <div className="lang--button" id='ordinary--button'>
                        <Link to="/">
                            <button>
                                Other skills
                            </button>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
  };
  
  export default Header;
  