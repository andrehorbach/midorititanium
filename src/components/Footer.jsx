import React from "react";

function Footer() {
  return(
    <>
       <footer className="footer-container" id="footer" name="footer" >
          <div className="container">
        

                  <div className=" footer-right">
                      <h3>Follow me</h3>
                      <div className="footer-social">	                    	
                          <a href="https://www.facebook.com/midori.brinner.7" target="_blank"><i className="fab fa-facebook-f"></i></a>
                          <a href="https://www.flickr.com/photos/midori_brinner/" target="_blank"><i className="fab fa-flickr"></i></a>
                          <a href="https://marketplace.secondlife.com/stores/234196" target="_blank"><i className="fas fa-store"></i></a>
                          <a href="https://members.blogotex.com/s/0/User/JlMvA" target="_blank"><i className="fas fa-blog"></i></a>
                          <a href="mailto:midori.brinner@gmail.com" target="_blank"><i className="fas fa-envelope"></i></a>
                      </div>
                      <div className="footer-copyright">
                          &copy; Midori's Blog 2021 <br />Website by Andrek Titanium (SL: andrek.titanium)                         
                          <a href="https://www.facebook.com/andrek.titanium.5" target="_blank"><i className="fab fa-facebook-f"></i></a>
                          <a href="https://www.flickr.com/photos/182095888@N06/" target="_blank"><i className="fab fa-flickr"></i></a>
                          <a href="mailto:andrektitanium@gmail.com" target="_blank"><i className="fas fa-envelope"></i></a>
                      </div>
                  </div>
                  
              </div>

          <div className="footer-bottom">
                <a className="scroll-link" href="#top-content"><i className="fas fa-chevron-up"></i></a>
            </div>
                  
        </footer>
    </>
  )
}

export default Footer;