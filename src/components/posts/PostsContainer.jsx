import { useEffect, useState } from "react";
import Post from "./Post";

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
    <main className="grid grid-cols-4 gap-8">
        <Post postC={api}></Post>
    </main>
  )
};
export default PostsContainer;
