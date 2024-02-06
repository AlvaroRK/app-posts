import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import PostsContainer from "./components/posts/PostsContainer";
import { NextUIProvider } from "@nextui-org/react";
import Nav from "./components/navbar/Nav";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <Nav/>
      <PostsContainer />
    </NextUIProvider>
  </React.StrictMode>
);
