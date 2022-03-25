import React from 'react';
import { multy, sum } from '../../utilities/prices';

const Shoes = () => {
    const first = 300;
    const second = 100;
    const result =sum(first, second);
    const result2 = multy(first, second);       
    return (
        <div style={{backgroundColor: 'lightgray', padding: '15px', margin: '20px', borderRadius: '20px'}}>
            <h1>Shoes ( ekhane object export use kora hocche )</h1>
            <h3>Price (1-sum): {result} </h3>
            <h3>Price (2-multiply):  {result2} </h3>
        </div>
    );
};

export default Shoes;