import React from 'react';
import { added } from '../../utilities/storage';

const ShowData = (props) => {
    const {id, eyeColor, name, gender} = props.shops;

    const addId = (id) => {
        added(id);
    }

    return (
        <div style={{padding: '15px', margin: '20px', borderRadius: '20px', border: '1px solid black'}}>
            <h3>ID: {id}</h3>
            <h3>Name: {name}</h3>
            <h3>Eye: {eyeColor}</h3>
            <h3>Gender: {gender}</h3>
            <button onClick={() => addId(id)}>ID Clicked</button>
        </div>
    );
};

export default ShowData;

