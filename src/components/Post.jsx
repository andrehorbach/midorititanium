import React from "react";
import parse from 'html-react-parser';
import { BrowserRouter as Router, Link } from 'react-router-dom';

let currentPost, prevPost, nextPost;

let flickrLink = "https://www.flickr.com/photos/midori_brinner/"

function Post(props) {
  const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const posts = props.posts.photo;
  const postId = props.postId.id;
  let description = "";
 
  
  // const getPosts = () => (
  //   currentPost = posts.filter((id)=>{id=postId})
  // )

  // function getPosts(specificPost){
  //   if (specificPost.id == postId.id) {
  //     return true
  //   }
  // }

  // if (posts != undefined) {
  //   currentPost = posts.filter(getPosts)
  //   console.log(currentPost);
  // }

  if (posts != undefined) {
     currentPost = posts.filter(function(itm){
      return postId.indexOf(itm.id) > -1;
    })
    description = currentPost[0].description._content.replace(/\n/g, "<br>")
    prevPost = posts[posts.indexOf(currentPost[0])-1]
    nextPost = posts[posts.indexOf(currentPost[0])+1]

  }

  if (posts == undefined) { 
   return <></>
 } else {

      return(
        // <div className="row"> // usar row para colocar descricao ao lado
          <div id="recent" className="single-post fadeInUp">
          <h2 className="post-title">
            {currentPost[0].title}
            </h2>
          <div className="post-date portfolio-box-date">
          <i className="far fa-calendar"> </i>
            {(currentPost[0].datetaken.slice(8,10) + "-" + months[parseInt(currentPost[0].datetaken.slice(5,7))-1]+ "-"+ currentPost[0].datetaken.slice(0,4))}
          </div>
          <div className="">   
            <img src={currentPost[0].url_c} alt="" data-at2x="assets/img/portfolio/3.jpg"></img>
            </div>
          <div className="post-description">
          {parse(description)}
          </div>
          <div className="post-description">
          <a href={flickrLink + currentPost[0].id} target="_blank"><i className="fab fa-flickr"></i> Full Post Here</a>
          
          </div>
          <div className="top-big-link wow fadeInUp">
          <div className="col wow fadeInUp ">
        
          { 
           prevPost != undefined ? ( 
            <Link to={"/" + prevPost.id}>
              <img className="prev-thumb post-thumbs" src={prevPost.url_c}></img>
              </Link>
           )
           :  (
            <Link to={"/"}>
              <img className="prev-thumb post-thumbs" src="assets/img/midori-home.jpg"></img>
              </Link>
           )
          }
        
          <Link to={"/" + nextPost.id}>
             <img className="next-thumb" src={nextPost.url_c}></img>
             </Link>
          </div>
          <div className="col wow fadeInUp">

          { 
           prevPost != undefined ? ( 
            <Link to={"/" + prevPost.id}>
              <i className="fas fa-angle-left"></i>
              <a className="post-prev"><span>Previous</span></a>
            </Link>
           )
           : ( 
            <Link to={"/"}>
              <i className="fas fa-angle-left"></i>
              <a className="post-prev"><span>Go to Home</span></a>
            </Link>
           )
          }
          <Link to={"/" + nextPost.id}>
          <a className="post-next"><span>Next Post</span></a>
          <i className="fas fa-angle-right"></i>
            </Link>

          </div>
          </div>
        </div>
      )
 }
}

export default Post;

// ID ANTERIOR = 52064109261
// ID ATUAL = 52062224858
// ID PROXIMO = 52055145415