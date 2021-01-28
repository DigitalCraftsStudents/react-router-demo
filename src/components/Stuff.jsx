import React from 'react';

function Stuff(props) {
    return (
        <>
        <h1>All the stuff goes here</h1>
        <h2>{props.data.status}</h2>
        </>
    );

}

export default Stuff;