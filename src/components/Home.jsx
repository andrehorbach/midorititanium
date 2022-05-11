import '../App.css';
import React, { useState, useEffect, useRef } from "react";
import Loader from './Loader';
import Header from './Header';
import Footer from './Footer';
import TopContent from './TopContent';
import RecentItems from './RecentItems';
import BlogFavorites from './BlogFavorites';
import MidContent from './MidContent';
import CollabWork from './CollabWork';
import GreatSupport from './GreatSupport';

let favoritePhotos = {};
let favoritePhotoDates = [];
let photos = {};
let photoDates = [];
const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];



function Home() {

  const [recentPhotos, setRecentPhotos] = useState();
  const [favPhotos, setFavPhotos] = useState();

  useEffect(() => {
    
    async function fetchRecent() {

      const response = await fetch('https://www.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=82c49e585f83ca27744741c4f5a2d747&user_id=189305865%40N06&extras=url_c%2C+description%2C+date_taken%2C+tags&per_page=300&format=json&nojsoncallback=1');
      const data = await response.json();
      const recentPhotosArray = data.photos
      recentPhotosArray.photo.forEach(
        function(item, index){
        photoDates.push(recentPhotosArray.photo[index].datetaken.slice(8,10) + "-" + months[parseInt(recentPhotosArray.photo[index].datetaken.slice(5,7))-1]+ "-"+ recentPhotosArray.photo[index].datetaken.slice(0,4))
        })
      

      setRecentPhotos(recentPhotosArray)
      
    }

    fetchRecent();
  
  }, [])

  useEffect(() => {
    
    async function fetchFavorites() {

      const response = await fetch('https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=82c49e585f83ca27744741c4f5a2d747&photoset_id=72157720003200568&extras=url_c%2C+date_taken%2C+description&format=json&nojsoncallback=1');
      const data = await response.json();
      const favPhotosArray = data.photoset
      favPhotosArray.photo.forEach(
        function(item, index){
          favoritePhotoDates.push(favPhotosArray.photo[index].datetaken.slice(8,10) + "-" + months[parseInt(favPhotosArray.photo[index].datetaken.slice(5,7))-1]+ "-"+ favPhotosArray.photo[index].datetaken.slice(0,4))
        })
      

      setFavPhotos(favPhotosArray)
      
    }

    fetchFavorites();
  
  }, [])

  return (
    <>
      {/* <Loader /> */}
      <Header />
      <TopContent />
      {recentPhotos != undefined ? <RecentItems recentPhotos = {recentPhotos} photoDates = {photoDates} /> : 'Loading...'}
      {favPhotos != undefined ? <BlogFavorites favPhotos = {favPhotos} favoritePhotoDates = {favoritePhotoDates} /> : 'Loading...'}
      
      <CollabWork />
      <MidContent />
      <GreatSupport />
      <Footer />
    </>
  );
}

export default Home;