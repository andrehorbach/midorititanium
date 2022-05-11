import React from "react";
import { Link } from 'react-router-dom';

function GreatSupport() {
  return(
    <>
     	<div className="great-support-container section-container section-container-gray-bg">
        <div className="container">
            <div className="row">
                <div className="col great-support section-description wow fadeIn">
                </div>
            </div>
            <div className="row" id="support">
                <div className="col-12 col-lg-7 great-support-box wow fadeInLeft">
                    <div className="great-support-box-text great-support-box-text-left">
                        <h3>Thanks for visiting!</h3>
                        <p className="medium-paragraph">
                        Thank you so much for visiting my blog!
                        </p>
                        <p className="medium-paragraph">
                        I hope it was helpful for you in some way!
                       
                        </p>
                        <p className="medium-paragraph">
                        Feel free to follow me on <a href="https://www.flickr.com/photos/midori_brinner/" target="_blank"><span className="colored-text">Flickr</span></a> and <a href="https://www.facebook.com/midori.brinner.7" target="_blank"><span className="colored-text">Facebook</span></a> as well!
                        </p>
                    </div>
                </div>
                <div className="col-12 col-lg-5 great-support-box great-support-box-phone wow fadeInUp thanks-section">
                    <img src="assets/img/blog/thanks1.jpg" alt=""></img>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default GreatSupport;