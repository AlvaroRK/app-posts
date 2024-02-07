import { useEffect, useState } from "react";
import Photos from "./Photos";



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
    <main className="grid grid-cols-4 gap-8">
        <Photos photosC={api}></Photos>
    </main>
  )
}
export default PhotosContainer