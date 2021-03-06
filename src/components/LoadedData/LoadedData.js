import React, { useEffect, useState } from 'react';
import ShowData from '../ShowData/ShowData';

const LoadedData = () => {
/*     const shops = [
            {
              "id": "623dd2ae92b34a3b2a262d73",
              "age": 33,
              "eyeColor": "green",
              "name": "Roxanne Dillon",
              "gender": "female"
            },
            {
              "id": "623dd2ae4acffe5719161497",
              "age": 20,
              "eyeColor": "green",
              "name": "Bridgett Alvarado",
              "gender": "female"
            },
            {
              "id": "623dd2ae3af14a29fa62a0b2",
              "age": 25,
              "eyeColor": "blue",
              "name": "Annette Garrett",
              "gender": "female"
            },
            {
              "id": "623dd2ae66eb3a5ed6c76c4e",
              "age": 40,
              "eyeColor": "brown",
              "name": "Tyson Marks",
              "gender": "male"
            },
            {
              "id": "623dd2ae4bee93bb21da3ec8",
              "age": 21,
              "eyeColor": "blue",
              "name": "Bernadette Hudson",
              "gender": "female"
            },
            {
              "id": "623dd2aebb2e6668381c0832",
              "age": 22,
              "eyeColor": "blue",
              "name": "Byrd Melton",
              "gender": "male"
            },
            {
              "id": "623dd2aef49c1adf0d304404",
              "age": 39,
              "eyeColor": "blue",
              "name": "Jacklyn Buchanan",
              "gender": "female"
            }
    ]; */

    /* Fetch kore korte caile evabe */

    const [shops, setShops] = useState([]);
    useEffect( () => {
        fetch('data.json')
                .then(res => res.json())
                .then(data => setShops(data));
    } , [])

    return (
        <div style={{backgroundColor: 'lightgray', padding: '15px', margin: '20px', borderRadius: '20px'}}>
            <h1>Loading data </h1>
            {
                shops.map(shop => <ShowData
                     key={shop.id}  /* Performance improvement */
                     shops={shop}
                     ></ShowData>)
            }
        </div>
    );
};

export default LoadedData;