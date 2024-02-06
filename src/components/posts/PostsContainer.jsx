import { useEffect, useState } from "react";
import Post from "../Post";

const PostsContainer = () => {
  const [api, setApi] = useState([]);

  useEffect(() => {
    consumeData();
  }, []);

  const consumeData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const dataJson = await data.json();
    setApi(dataJson);
  };
  return (
    <main>
        <Post postC={api}></Post>
    </main>
  )
};
export default PostsContainer;
