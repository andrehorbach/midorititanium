import React, {useState, useEffect}  from "react";
import Posts from "./Posts";

const postsPerPage = 3; 
const arrayForHoldingPosts = [];


function RecentItems(props) {

  let posts = props.recentPhotos.photo
  // console.log("posts:");
  // console.log(posts);

  const [postsToShow, setPostsToShow] = useState([]);
  const [count, setCount] = useState(1);

  const loopThroughPosts = (count) => {
    for (
      let i = count * postsPerPage - postsPerPage;
      i < postsPerPage * count;
      i++
    ) {
      if (i > 0) {
        arrayForHoldingPosts.push(posts[i]);
      }
    }
    setPostsToShow(arrayForHoldingPosts);
    // console.log("poststoShow:");
    // console.log(postsToShow)
    
  };

  // load the first set of posts when the page loads
  // and then set the value of count to 2
  useEffect(() => {
    setCount((prevCount) => prevCount + 1);
    loopThroughPosts(count);
  }, []);

  const handleShowMorePosts = () => {
    setCount((prevCount) => prevCount + 1);
    loopThroughPosts(count);
  };

  return(
    <>
        <div className="portfolio-container section-container recent-container">
          <div className="container">
              <div className="row">
                  <div className="col portfolio section-description wow fadeIn">
                      <h2>RECENT POSTS</h2>
                      <div className="divider-1 wow fadeInUp"><span></span></div>
                      <p>These photos are in my Flickr collection. Check them out!</p>
                  </div>
              </div>
              <div className="row">
                  <div id="recent" className="col-md-4 portfolio-box wow fadeInUp">
                    <a href={props.recentPhotos.photo[0].id}>
                      <div className="portfolio-box-image">
                          <img src={props.recentPhotos.photo[0].url_c} alt="" data-at2x="assets/img/portfolio/1.jpg"></img>
                      </div>
                      <h3>
                      {props.recentPhotos.photo[0].title}
                      <i className="fas fa-angle-right"></i></h3>
                      <div className="portfolio-box-date"><i className="far fa-calendar"></i>
                        {props.photoDates[0]}
                        </div>
                       {/* <p>{props.recentPhotos.photo[0].description._content}</p> */}
                    </a>
                  </div>
                  <div id="recent" className="col-md-4 portfolio-box wow fadeInDown">
                      <div className="portfolio-box-image">
                          <img src={props.recentPhotos.photo[1].url_c} alt="" data-at2x="assets/img/portfolio/2.jpg"></img>
                      </div>
                      <h3><a href="#">
                      {props.recentPhotos.photo[1].title}
                      </a> <i className="fas fa-angle-right"></i></h3>
                      <div className="portfolio-box-date"><i className="far fa-calendar"></i>
                      {props.photoDates[1]}
                      </div>
                      {/* <p>{props.recentPhotos.photo[1].description._content}</p> */}
                  </div>
                  <div id="recent" className="col-md-4 portfolio-box wow fadeInUp">
                      <div className="portfolio-box-image">
                          <img src={props.recentPhotos.photo[2].url_c} alt="" data-at2x="assets/img/portfolio/3.jpg"></img>
                      </div>
                      <h3><a href="#">
                      {props.recentPhotos.photo[2].title}
                      </a> <i className="fas fa-angle-right"></i></h3>
                      <div className="portfolio-box-date"><i className="far fa-calendar"></i>
                      {props.photoDates[2]}
                      </div>
                      {/* <p>{props.recentPhotos.photo[2].description._content}</p> */}
                  </div>
              </div>

              <Posts 
                id = {props.id}
                key = {props.id}
                recentPhotos = {props.recentPhotos} // passar o post correto ao inves do array/obj todo
                photoDates = {props.photoDates} 
                postsToRender = {postsToShow}
              />
              
            <div className="row">
              <div className="col section-bottom-button wow fadeInUp">
                  <button className="btn btn-primary btn-link-1" onClick={handleShowMorePosts}>Load more</button>
                  </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default RecentItems;