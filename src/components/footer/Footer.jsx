import React from 'react';

import './Footer.css'

const Footer = () => {  
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="footer-info">
                    <nav>
                        <a>
                            <img src="/assets/png/full-logo.png" alt="logo"/>
                        </a>
                        <p>
                            Codeblesses UI market. Hundreads of UI elements!
                        </p>
                        <p>
                            All content, UI elements on this site are published under the IITU License
                        </p>
                    </nav>
                    <nav>
                        <aside>
                            <h3>Information</h3>
                            <a href="">Gide</a>
                        </aside>
                        <aside>
                            <h3>Legal</h3>
                            <a>Terms and conditions</a>
                            <a>Privacy policy</a>
                            <a>Cookie policy</a>
                        </aside>
                    </nav>
                </div>
                <div className="footer-license">
                    <p>©2023 codeblessed team. All rights reseved. codeblessed.kz</p>
                </div>
            </div>
        </footer>
    );
  };
  
  export default Footer;