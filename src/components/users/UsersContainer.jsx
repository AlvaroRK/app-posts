import { useEffect, useState } from "react";
import User from "./User";

const UsersContainer = () => {
  const [api, setApi] = useState([]);

  useEffect(() => {
    consumeData();
  }, []);

  const consumeData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const dataJson = await data.json();
    setApi(dataJson);
  };
  return (
    <main className="grid grid-cols-2 gap-5">
        <User userC={api}></User>
    </main>
  )
}
export default UsersContainer