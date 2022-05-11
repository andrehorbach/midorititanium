import React from "react";

function BlogFavorites(props) {
  
  return(
    <>
     	<div className="fav-container section-container" id="favorites" >
        <div className="container">
            
            <div className="row">
                <div className="col blog section-description wow fadeIn">
                    <h2>MY FAVORITE POSTS ♥</h2>
                    <div className="divider-1 wow fadeInUp"><span></span></div>
                </div>
            </div>
            
            <div className="row  justify-content-md-center">
                <div className="col-md-6 blog-box wow fadeInLeft">
                    <div className="row row-img">
                        <div className="col-md-9">
                            <div className="blog-box-image">
                            <a href={props.favPhotos.photo[0].id}>
                                <img src={props.favPhotos.photo[0].url_c } alt="" data-at2x="assets/img/blog/4.jpg"></img>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <h3> <a href={props.favPhotos.photo[0].id}>{props.favPhotos.photo[0].title}<i className="fas fa-angle-right"></i></a> </h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 blog-box wow fadeInLeft">
                    <div className="row row-img">
                        <div className="col-md-9">
                            <div className="blog-box-image">
                            <a href={props.favPhotos.photo[1].id}>
                               <img src={props.favPhotos.photo[1].url_c} alt="" data-at2x="assets/img/blog/4.jpg"></img>
                               </a>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <h3><a href={props.favPhotos.photo[1].id}>{props.favPhotos.photo[1].title}<i className="fas fa-angle-right"></i></a></h3>
                            {/* <p><%=favPhotos.photo[1].descriptionShort%></p> */}
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-md-6 blog-box wow fadeInLeft">
                    <div className="row row-img">
                        <div className="col-md-9">
                            <div className="blog-box-image">
                            <a href={props.favPhotos.photo[2].id}>
                                <img src={props.favPhotos.photo[2].url_c} alt="" data-at2x="assets/img/blog/4.jpg"></img>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <h3><a href={props.favPhotos.photo[2].id}>{props.favPhotos.photo[2].title} <i className="fas fa-angle-right"></i></a></h3>
                            <p>
                                {/* <%=favPhotos.photo[2].descriptionShort%> */}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 blog-box wow fadeInLeft">
                    <div className="row row-img">
                        <div className="col-md-9">
                            <div className="blog-box-image">
                            <a href={props.favPhotos.photo[3].id}>
                                <img src={props.favPhotos.photo[3].url_c} alt="" data-at2x="assets/img/blog/4.jpg"></img>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <h3> <a href={props.favPhotos.photo[2].id}>{props.favPhotos.photo[3].title} <i className="fas fa-angle-right"></i></a></h3>
                            <p>
                                {/* <%=favPhotos.photo[3].descriptionShort%> */}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    </div>
    </>
  )
}

export default BlogFavorites;