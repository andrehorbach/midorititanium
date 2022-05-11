import { isArray } from "lodash";
import React, {useState, useEffect}  from "react";
import Posts from "./Posts";

let arrayForHoldingPosts = [];

function RecentItems(props) {

  let posts = props.recentPhotos.photo
  const initialPosts = [posts[0], posts[1], posts[2]]
  const postsPerPage = 3; 
  const [postsToShow, setPostsToShow] = useState([]);
  const [next, setNext] = useState(3);

  const loopWithSlice = (start, end) => {
    const slicedPosts = posts.slice(start, end);

    arrayForHoldingPosts.push(...slicedPosts);
    
  };

  useEffect(() => {
    setPostsToShow(initialPosts);
    arrayForHoldingPosts = initialPosts;

  }, []);

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + postsPerPage);
    setNext(next + postsPerPage);
  };

  return(
    <>
        <div className="portfolio-container section-container recent-container" id="recent">
          <div className="container">
              <div className="row">
                  <div className="col portfolio section-description wow fadeIn">
                      <h2>RECENT POSTS</h2>
                      <div className="divider-1 wow fadeInUp"><span></span></div>
                      <p>These photos are in my Flickr collection. Check them out!</p>
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