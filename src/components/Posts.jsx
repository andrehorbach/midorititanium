import React from "react";

function Posts(props) {
  const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const tempPosts = props.postsToRender;

  return(
    <div className="row">
      {tempPosts.map((post, index) => {return(
          <div id="recent" className="col-md-4 portfolio-box wow fadeInUp">
              <a href={post.id}>
              <div className="portfolio-box-image">
                  <img src={post.url_c} alt="" data-at2x="assets/img/portfolio/3.jpg"></img>
                  
              </div>
              </a>
              <h3><a href={post.id}>
              {post.title}
              </a> <i className="fas fa-angle-right"></i></h3>
              <div className="portfolio-box-date"><i className="far fa-calendar"></i>
              {(post.datetaken.slice(8,10) + "-" + months[parseInt(post.datetaken.slice(5,7))-1]+ "-"+ post.datetaken.slice(0,4))}
              </div>
              {/* <p>{props.recentPhotos.photo[2].description._content}</p> */}
          </div>
      )})}
    </div>
  )
}

export default Posts;