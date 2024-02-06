import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import PostsContainer from "./components/posts/PostsContainer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PostsContainer/>
  </React.StrictMode>
);
