import '../App.css';
import React from "react";
import classNames from "classnames"
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Header(props) {
  const mainPageClasses = "navbar navbar-dark fixed-top navbar-expand-md navbar-no-bg"
  const postPageClasses = "navbar navbar-dark fixed-top navbar-expand-md post-navbar"
  const postPageHrefs = "/"

  return(
    <>
      <nav className={props.postPage ? postPageClasses : mainPageClasses}>
			<div className="container">
			    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			        <span className="navbar-toggler-icon"></span>
			    </button>
			    <div className="collapse navbar-collapse" id="navbarNav">
			        <ul id="ul-navbar" className="navbar-nav mr-auto">
			            <li className="nav-item">
			                <a className="nav-link scroll-link navbar-first" href={props.postPage ? postPageHrefs : "#recent"}>What's New</a>
			            </li>
			            <li className="nav-item">
			                <a className="nav-link scroll-link" href={props.postPage ? postPageHrefs : "#favorites"}>Favorites</a>
			            </li>
                  <li className="nav-item">
			                <a id="navbar-first" className="nav-link scroll-link " href={props.postPage ? postPageHrefs : "#top"}>Midori's Blog</a>
			            </li>
			            <li className="nav-item">
			                <a className="nav-link scroll-link" href={props.postPage ? "#footer" : "#collab"}>Collab</a>
			            </li>
			            {/* <li className="nav-item">
			                <a className="nav-link scroll-link" href="#">Affiliates</a>
			            </li> */}
			            <li className="nav-item">
			                <a className="nav-link scroll-link" href="#footer">Contact</a>
			            </li>
			        </ul>
			        {/* <div className="navbar-text">
                        <a href="https://www.facebook.com/midori.brinner.7"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.flickr.com/photos/midori_brinner/"><i className="fab fa-flickr"></i></a>
                        <a href="https://marketplace.secondlife.com/stores/234196"><i className="fas fa-store"></i></a>
                        <a href="https://members.blogotex.com/s/0/User/JlMvA"><i className="fas fa-blog"></i></a>
                        <a href="mailto:midori.brinner@gmail.com"><i className="fas fa-envelope"></i></a>
					</div> */}
			    </div>
		    </div>
		</nav>
    </>
  )
}

export default Header;