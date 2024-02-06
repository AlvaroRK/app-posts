import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import PostsContainer from "./components/posts/PostsContainer";
import { NextUIProvider } from "@nextui-org/react";
import Nav from "./components/navbar/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersContainer from "./components/users/UsersContainer";
import PhotosContainer from "./components/photos/PhotosContainer";
import Home from "./components/home/Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Nav />
      <NextUIProvider>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/posts" element={<PostsContainer />}/>
          <Route path="/photos" element={<PhotosContainer />}/>
          <Route path="/users" element={<UsersContainer />}/>
        </Routes>
      </NextUIProvider>
    </BrowserRouter>
  </>
);
