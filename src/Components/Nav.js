import React from 'react';
import "./Nav.css";
import {useState} from "react";




function Nav() {

    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    return (   
        
            <nav className="head row ">
                <div className="logo col-2 d-none d-lg-block">
                    <div >
                        <img src='../assets/logo.svg' alt="logo" className="logoSize" />
                    </div>   
                </div>

                              
                <div className="d-none d-lg-block col-8"    >
                    <ul className="navbar__links ">
                    
                        <li className="navbar__item">
                            <a href='/' className="navbar__link nbrArticle">Programmation</a>
                        </li>
                        <li className="navbar__item">
                            <a href='/' className="navbar__link nbrArticle">Billetterie</a>
                        </li>   
                        <li className="navbar__item">
                            <a href='/' className="navbar__link nbrArticle">Informations</a>
                        </li>        
                        <li className="navbar__item">
                            <a href='/' className="navbar__link nbrArticle">Plan</a>
                        </li>             
                    </ul>
                </div>
                         
                <div class="row headM">   
               

                    <div className=" col-2 d-block d-lg-none  ">
                        <div class="btn-group" data-toggle="buttons-checkbox">
                        <button type="button" class="Burger btn btn-default " onClick={handleShowLinks}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#000000" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                        </button>
                        </div>
                    </div>

                    <div className="logoM col-2 offset-5 d-block d-lg-none">
                    <div >
                        <img src='../assets/logo.svg' alt="logo" className="logoSizeM" />
                    </div>   
                </div>

                    <div class={`row d-lg-none ${showLinks ? "d-block" : "d-none"} `}>   
                        
                        <ul className=" d-block d-lg-none">                   
                            <li className="navbar__item">
                                <a href='/' className="navbar__link">Programmation</a>
                            </li>
                            <li className="navbar__item">
                                <a href='/' className="navbar__link">Billetterie</a>
                            </li>   
                            <li className="navbar__item">
                                <a href='/' className="navbar__link">Informations</a>
                            </li>   
                            <li className="navbar__item">
                                <a href='/' className="navbar__link">Plan</a>
                            </li>                 
                        </ul>

                    </div>
                  
                </div>
                
            </nav>
            
    )
}
      
export default Nav;