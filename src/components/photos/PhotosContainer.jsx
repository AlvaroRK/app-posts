import { useEffect, useState } from "react";
import Photo from "./Photo";



const PhotosContainer = () => {
  const [api, setApi] = useState([]);

  useEffect(() => {
    consumeData();
  }, []);


  const min = 1
  const max = 50
  const maxItem = Math.floor(Math.random() * (max - min + 1) + min)

  const consumeData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/photos");
    const dataJson = await data.json();
    setApi(dataJson.slice(0, maxItem));
  };
  return (
    <main className="grid grid-cols-5 gap-8">
        <Photo photosC={api}></Photo>
    </main>
  )
}
export default PhotosContainer