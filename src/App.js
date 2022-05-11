import './App.css';
import React from "react";
//import Routes from "./components/Routes";
import { BrowserRouter as Router, Routes, Route, Link, useParams, useRouteMatch } from 'react-router-dom';
import Home from "./components/Home";
import Post from "./components/SinglePosts";

export default function App() {

  return (

    <Router>
      <Routes>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route> */}
          <Route exact path='/' element={<Home/>}/>
          <Route path='/:id' element={<Post />}/>
       </Routes>
    </Router>

    );
}

// <Route path="/cart" element={<CartPage />}>
//     <Route path=":id" element={<CartPage />} />
// </Route>