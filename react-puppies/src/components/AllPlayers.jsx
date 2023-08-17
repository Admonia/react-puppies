import fetchAllPuppies from "../API";
import { useEffect, useState } from "react";
export default function AllPlayers() {
    const [puppyData, setPuppyData] = useState([]);
    async function makePuppiesUseful() {
      let puppyArray = await fetchAllPuppies();
      setPuppyData(puppyArray);
    }
    useEffect(() => {
      makePuppiesUseful();
    }, []);
    console.log(puppyData);
    return puppyData.map((puppy) => {
      return (
        <div key={puppy.id}>
          <h4>id={puppy.id}</h4>
          <h4>name={puppy.name}</h4>
          <h4>breed={puppy.breed}</h4>
          <img src={puppy.imageUrl} />
        </div>
      );
    });
  }
