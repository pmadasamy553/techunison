import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyNavbar() {
  return (
    <>
      <header>
        <div className="my-nav">
          <div className="container">
            <div className="row">
              <div className="nav-items">
                <div className="menu-toggle">
                  <div className="menu-hamburger"></div>
                </div>
                 <div className="logo">
                  {/* <img src="assets/images/logo-01.png" alt="Logo" /> */}
                </div> 
                <div className="menu-items">
                  <div className="menu">
                    <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/AboutUs">About Us</Link></li>
                      <li><Link to="/Careers">Careers</Link></li>
                     
                      <li><Link to="/Contact">Contact Us</Link></li>
                     {/* <li>
                        <button className="mahathma" data-toggle="modal" data-target="#myModal">
                          <img src="img/mahathma-ganthi.png" width="100" alt="Mahatma Gandhi" />
                        </button>
                      </li>  */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default MyNavbar;
