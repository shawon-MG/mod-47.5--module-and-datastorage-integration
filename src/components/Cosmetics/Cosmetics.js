import React from 'react';
import add from '../../utilities/price';

const Cosmetics = () => {
    const first = 350;
    const second = 550;
    const result = add(first, second);
    return (
        <div style={{backgroundColor: 'lightgray', padding: '15px', margin: '20px', borderRadius: '20px'}} >
            <h1>Cosmetics ( ekhane default export use kora hocche )</h1>
            <h3>Price: {result}</h3>
        </div>
    );
};

export default Cosmetics;