import React from "react";

function Footer() {
  return(
    <>
       <footer className="footer-container">
          <div className="container">
              <div className="row">
                  <div id="contact" className="col-md-6 footer-left">
                      <h3>Contact me</h3>
                      <div className="contact-form">
                          <form role="form" action="assets/contact.php" method="post">
                              <div className="form-group">
                                  <label className="sr-only" htmlFor="contact-email">Email</label>
                                  <input type="text" name="email" placeholder="Email..." className="contact-email form-control" id="contact-email"></input>
                              </div>
                              <div className="form-group">
                                  <label className="sr-only" htmlFor="contact-subject">Subject</label>
                                  <input type="text" name="subject" placeholder="Subject..." className="contact-subject form-control" id="contact-subject"></input>
                              </div>
                              <div className="form-group">
                                  <label className="sr-only" htmlFor="contact-message">Message</label>
                                  <textarea name="message" placeholder="Message..." className="contact-message form-control" id="contact-message"></textarea>
                              </div>
                              <button type="submit" className="btn btn-primary">Send message</button>
                          </form>
                      </div>
                  </div>
                  
                  <div className="col-md-5 offset-md-1 footer-right">
                      <h3>Follow me</h3>
                      <div className="footer-social">	                    	
                          <a href="https://www.facebook.com/midori.brinner.7"><i className="fab fa-facebook-f"></i></a>
                          <a href="https://www.flickr.com/photos/midori_brinner/"><i className="fab fa-flickr"></i></a>
                          <a href="https://marketplace.secondlife.com/stores/234196"><i className="fas fa-store"></i></a>
                          <a href="https://members.blogotex.com/s/0/User/JlMvA"><i className="fas fa-blog"></i></a>
                          <a href="mailto:midori.brinner@gmail.com"><i className="fas fa-envelope"></i></a>
                      </div>
                      <div className="footer-copyright">
                          &copy; Midori's Blog 2021 <br />Website by Andrek Titanium (SL: andrek.titanium)                         
                          <a href="https://www.facebook.com/andrek.titanium.5"><i className="fab fa-facebook-f"></i></a>
                          <a href="https://www.flickr.com/photos/182095888@N06/"><i className="fab fa-flickr"></i></a>
                          <a href="mailto:andrektitanium@gmail.com"><i className="fas fa-envelope"></i></a>
                      </div>
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