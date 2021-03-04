import React from 'react';

export default function SaludarFn(props) {

    /*const alertar = () => {
        alert("Hola bro");
    }*/

    return (
        <div>
            <button onClick={props.alertar}>Saludate</button>
        </div>
    );
}