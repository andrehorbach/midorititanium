import React from "react";
import { Link } from 'react-router-dom';

function TopContent() {
  return(
    <>
      <div className="top-content"  id="top" name="top"> 
          <div className="inner-bg">
              <div className="container">
                  <div className="row">
                      <div className="col-md-8 offset-md-2 text">
                          <div className="logo wow fadeInDown">
                              <a href="index.html"></a>
                          </div>
                          <h1 className="wow fadeInLeftBig">Midori's Blog</h1>
                          <div className="description wow fadeInLeftBig">
                              <p>
                                  Fashion blogger in Second Life <br/>
                                  Fun photographer in leisure time. Available for collab work.<br/>
                                  ironytai Resident @ Second Life
                              </p>
                          </div>
                          <div className="top-big-link wow fadeInUp">
                              <a className="btn btn-primary btn-link-1" href="https://www.flickr.com/photos/midori_brinner/" target="_blank">See my work</a>
                              <a className="btn btn-primary btn-link-2 scroll-link" href="#support" >Contact me</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>      
      </div>
    </>
  )
}

export default TopContent;